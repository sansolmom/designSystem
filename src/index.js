import React, {useState} from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import {GlobalStyle, darkTheme, defaultTheme} from "./util";

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button
        style={{margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={() => setUseDarkTheme(true)}
      >
        Dark Theme
      </button>
      <button
        style={{margin: "0 16px 24px", padding: "8px", background: "none"}}
        onClick={() => setUseDarkTheme(false)}
      >
        Default Theme
      </button>
      <div
        style={{
          background: useDarkTheme
            ? defaultTheme.primaryColor
            : darkTheme.primaryColor,
          width: "100vw",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <PrimaryButton modifiers={["small"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large"]}>Hi World</SecondaryButton>
        <TertiaryButton>Hey World</TertiaryButton>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
