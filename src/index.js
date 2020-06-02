import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import {GlobalStyle} from "./util";

const App = () => (
  <div>
    <PrimaryButton modifiers={["small", "warning"]}>Hello World</PrimaryButton>
    <SecondaryButton modifiers={["large", "warning", "secondaryButtonWarning"]}>
      Hi World
    </SecondaryButton>
    <TertiaryButton>Hey World</TertiaryButton>
    <GlobalStyle />
  </div>
);
ReactDOM.render(<App />, document.querySelector("#root"));
