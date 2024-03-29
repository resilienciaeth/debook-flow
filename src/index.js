import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/style/input.css";
import "flowbite";
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-white">
      <App />
    </div>
  </React.StrictMode>
);

serviceWorker.register();