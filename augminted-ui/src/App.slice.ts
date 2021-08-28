import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { N0xAlphaArt, instance as web3 } from "./n0x-concept/contract.hub";
import { createDispatches, createThunk } from "./utils";
import detectProvider from "@metamask/detect-provider";

export type SectionId = undefined | "n0xscape" | "about" | "team" | "contact";
export interface HomePageState {
  view:
    | "sold-out"
    | "needs-provider"
    | "disconnected"
    | "connecting"
    | "ready"
    | "submitting"
    | "success";
  account: string;
  failure: string;
  chainId: number;
  activeSection: SectionId;
}

export interface MintFormData {
  quantity: string;
}

export function makeInitialState(): HomePageState {
  return {
    view: "sold-out",
    account: "",
    failure: "",
    chainId: -1,
    activeSection: undefined,
  };
}

export const slice = createSlice({
  name: "home",
  initialState: makeInitialState(),
  reducers: {
    pageLoadedFailure(state) {
      // state.view = "needs-provider";
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
    sectionSelected(state, action: PayloadAction<SectionId>) {
      const id = action.payload;

      if (state.activeSection === id) {
        state.activeSection = undefined;
        return;
      }

      state.activeSection = action.payload;
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
    const state = getState().home;

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
      const price = 0.05;
      const totalCost = parseInt(args.quantity, 10) * price;

      const txOptions = {
        from: state.account,
        value: web3.utils.toWei(totalCost.toString(), "ether"),
        type: "0x2",
      };

      await contract.methods.mintTokens(args.quantity).send(txOptions);

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
