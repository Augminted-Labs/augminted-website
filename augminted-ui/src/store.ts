import * as HomePageSlice from "./App.slice";
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose as defaultCompose,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";

type MappedReducer<T> = {
  [K in keyof T]: any;
};

export interface RootState {
  [HomePageSlice.slice.name]: HomePageSlice.HomePageState;
}

export const reducers: MappedReducer<RootState> = {
  [HomePageSlice.slice.name]: HomePageSlice.slice.reducer,
};

export function makeStore() {
  const compose: typeof defaultCompose =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || defaultCompose;
  const store = createStore(
    combineReducers(reducers),
    compose(applyMiddleware(thunk))
  );

  return store;
}
