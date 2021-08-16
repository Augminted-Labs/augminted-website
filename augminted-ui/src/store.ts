import * as N0xscapeConceptSlice from "./n0x-concept/N0xscapeConcept.slice";
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
  [N0xscapeConceptSlice.slice.name]: N0xscapeConceptSlice.N0xscapeConceptState;
}

export const reducers: MappedReducer<RootState> = {
  [N0xscapeConceptSlice.slice.name]: N0xscapeConceptSlice.slice.reducer,
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
