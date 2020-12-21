import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import boardReducer from "./store/modules/board";

const store = createStore(boardReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
