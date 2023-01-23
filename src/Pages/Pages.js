import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Pages from "./Pages";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Pages />
  </StrictMode>,
  rootElement
);
