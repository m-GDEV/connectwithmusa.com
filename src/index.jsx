import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
} else {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    rootElement
  );
}
