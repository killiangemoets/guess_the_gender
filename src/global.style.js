import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  position: relative;
  margin: 0;
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-weight: 400;
  background-color: #fff;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

a {
  text-decoration: none;
}

html {
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

`;
