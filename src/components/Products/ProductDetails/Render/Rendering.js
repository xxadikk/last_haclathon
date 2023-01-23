import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import Render from "./Render";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Render />
  </StrictMode>,
  rootElement
);
