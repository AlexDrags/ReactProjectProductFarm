import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import { defaultTheme } from "/src/themes/defaultTheme";

import App from "/src/components/app/app";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
