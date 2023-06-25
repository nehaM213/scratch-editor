// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "tailwindcss/tailwind.css";

// console.log("hi");

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={4}>
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();