import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "./store";

type ThunkView<TArgs = void> = TArgs extends void
  ? () => void
  : (args: TArgs) => void;

export function createThunk<TArgs = void>(
  thunk: (
    args: TArgs,
    dispatch: Dispatch,
    getState: () => RootState
  ) => Promise<void>
): ThunkView<TArgs> {
  return ((args: TArgs) => (dispatch: any, getState: any) =>
    thunk(args, dispatch, getState)) as unknown as ThunkView<TArgs>;
}

type AsyncActions = Record<string, (...args: any) => any>;

type DeletedReturnInfo<T extends AsyncActions> = {
  [K in keyof T]: (...args: Parameters<T[K]>) => void;
};

export function createDispatches<TSync, TAsync extends AsyncActions>(
  syncActions: TSync,
  asyncActions: TAsync
): TSync & DeletedReturnInfo<TAsync> {
  return {
    ...syncActions,
    ...asyncActions,
  };
}
