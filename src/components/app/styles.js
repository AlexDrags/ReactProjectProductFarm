import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
html {
  height: 100%;
}

body,
html {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 18px;
  line-height: 27px;
  color: #333333;
}
`;
export default GlobalStyles;
