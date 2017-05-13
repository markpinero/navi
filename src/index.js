import React from "react";
import ReactDOM from "react-dom";
import cookie from "react-cookie";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import "../semantic/dist/semantic.css";
import "./styles.css";

import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
const store = configureStore();

import { AUTHENTICATE_USER } from "./actions/actionTypes";

const token = cookie.load("token");
if (token) {
  store.dispatch({ type: AUTHENTICATE_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
