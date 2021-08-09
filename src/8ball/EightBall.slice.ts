import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EightBallFactory, instance as web3 } from "./contract.hub";
import { createDispatches, createThunk } from "./utils";
import detectProvider from "@metamask/detect-provider";

export interface EightBallState {
  view:
    | "needs-provider"
    | "disconnected"
    | "connecting"
    | "question"
    | "submitting"
    | "answer";
  answer: string;
  account: string;
  failure: string;
  chainId: number;
}

export interface BallFormData {
  question: string;
}

export function makeInitialState(): EightBallState {
  return {
    view: "disconnected",
    account: "",
    answer: "",
    failure: "",
    chainId: -1,
  };
}

export const slice = createSlice({
  name: "8ball",
  initialState: makeInitialState(),
  reducers: {
    pageLoadedFailure(state) {
      state.view = "needs-provider";
    },
    pageLoadedSuccess(state) {
      // todo
    },
    connectClickedPending(state) {
      state.view = "connecting";
    },
    connectClickedSuccess(
      state,
      action: PayloadAction<ConnectClickedSuccessPayload>
    ) {
      state.view = "question";
      state.account = action.payload.accounts[0];
      state.chainId = action.payload.chainId;
    },
    ballReset(state) {
      state.view = "question";
      state.answer = "";
    },
    questionSubmittedPending(state) {
      state.view = "submitting";
      state.failure = "";
    },
    questionSubmittedFailure(state, action: PayloadAction<any>) {
      state.view = "question";
      state.failure = action.payload.message;
    },
    questionSubmittedSuccess(state, action: PayloadAction<string>) {
      state.view = "answer";
      state.answer = action.payload;
    },
  },
});

type ConnectClickedSuccessPayload = {
  chainId: number;
  accounts: string[];
};

export const pageLoaded = createThunk(async (args, dispatch, getState) => {
  const provider = await detectProvider();

  if (!provider) {
    dispatch(slice.actions.pageLoadedFailure());
    return;
  }

  dispatch(slice.actions.pageLoadedSuccess());
});

export const connectClicked = createThunk(async (args, dispatch, getState) => {
  dispatch(actions.connectClickedPending());

  const [chainId, accounts] = await Promise.all([
    web3.eth.getChainId(),
    web3.eth.requestAccounts(),
  ]);

  dispatch(actions.connectClickedSuccess({ chainId, accounts }));
});

export const questionSubmitted = createThunk<BallFormData>(
  async (args, dispatch, getState) => {
    const state = getState()["8ball"];
    const contract = EightBallFactory(state.chainId);

    contract.once("EightBallAdded", (err, evt) => {
      const { answer } = evt.returnValues;
      dispatch(actions.questionSubmittedSuccess(answer));
    });

    dispatch(actions.questionSubmittedPending());

    try {
      await contract.methods
        .askQuestion(args.question)
        .send({ from: state.account });
    } catch (e) {
      dispatch(actions.questionSubmittedFailure(e));
    }
  }
);

export const actions = createDispatches(slice.actions, {
  connectClicked,
  questionSubmitted,
  pageLoaded,
});
