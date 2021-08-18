import { Dispatch } from "@reduxjs/toolkit";
import { useLayoutEffect, useState } from "react";
import { RootState } from "./store";
export { default as classNames } from "clsx";

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

export function useMediaQuery(...queries: string[]): boolean[] {
  const isSupported = "matchMedia" in window;

  const [matches, setMatches] = useState(
    queries.map((query) =>
      isSupported ? !!window.matchMedia(query).matches : false
    )
  );

  useLayoutEffect(() => {
    if (!isSupported) return undefined;

    const mediaQueryList = queries.map((query) => window.matchMedia(query));

    const listenerList = mediaQueryList.map((mediaQuery, index) => {
      const listener = () =>
        setMatches((prev) =>
          prev.map((prevValue, idx) =>
            index === idx ? !!mediaQuery.matches : prevValue
          )
        );

      mediaQuery.addListener(listener);

      return listener;
    });

    return () => {
      mediaQueryList.forEach((mediaQuery, index) => {
        mediaQuery.removeListener(listenerList[index]);
      });
    };
  }, [isSupported, queries]);

  return matches;
}
