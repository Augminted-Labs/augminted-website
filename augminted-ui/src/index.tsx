import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HomePage } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { makeStore } from "./store";

async function launch() {
  const store = makeStore();

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <HomePage />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

launch();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();