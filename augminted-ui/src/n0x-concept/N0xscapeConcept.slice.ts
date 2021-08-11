import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { N0xAlphaArt, instance as web3 } from "./contract.hub";
import { createDispatches, createThunk } from "../utils";
import detectProvider from "@metamask/detect-provider";

export interface N0xscapeConceptState {
  view:
    | "needs-provider"
    | "disconnected"
    | "connecting"
    | "ready"
    | "submitting"
    | "success";
  account: string;
  failure: string;
  chainId: number;
}

export interface MintFormData {
  quantity: string;
}

export function makeInitialState(): N0xscapeConceptState {
  return {
    view: "disconnected",
    account: "",
    failure: "",
    chainId: -1,
  };
}

export const slice = createSlice({
  name: "n0x-concept",
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
      state.view = "ready";
      state.account = action.payload.accounts[0];
      state.chainId = action.payload.chainId;
    },
    mintRequestSubmittedPending(state) {
      state.view = "submitting";
      state.failure = "";
    },
    mintRequestSubmittedFailure(state, action: PayloadAction<any>) {
      state.view = "ready";
      state.failure = action.payload.message;
    },
    mintRequestSubmittedSuccess(state, action: PayloadAction<string>) {
      state.view = "success";
    },
  },
});

type ConnectClickedSuccessPayload = {
  chainId: number;
  accounts: string[];
};

export const pageLoaded = createThunk(async (args, dispatch, getState) => {
  const provider: any = await detectProvider();

  if (!provider) {
    dispatch(slice.actions.pageLoadedFailure());
    return;
  }

  provider.on("chainChanged", (chainId: any) => {
    console.log("Changing to: ", chainId);
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    window.location.reload();
  });

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

export const mintRequestSubmitted = createThunk<MintFormData>(
  async (args, dispatch, getState) => {
    const state = getState()["n0x-concept"];

    const contract = N0xAlphaArt(state.chainId);

    if (!contract) {
      dispatch(
        actions.mintRequestSubmittedFailure({
          message: `This contract is not yet available on CHAIN_ID ${state.chainId}`,
        })
      );
      return;
    }

    dispatch(actions.mintRequestSubmittedPending());

    try {
      await contract.methods
        .mintTokens(args.quantity)
        .send({
          from: state.account,
          value: web3.utils.toWei("0.05", "ether"),
        });
      dispatch(actions.mintRequestSubmittedSuccess("ok"));
    } catch (e) {
      dispatch(actions.mintRequestSubmittedFailure(e));
    }
  }
);

export const actions = createDispatches(slice.actions, {
  connectClicked,
  mintRequestSubmitted,
  pageLoaded,
});
