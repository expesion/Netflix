import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import App from "./App";
import { GlobalStyles } from "./globalStyles"; /* 
import { firebase } from "./lib/firebase.prod"; */
ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById("root")
);
