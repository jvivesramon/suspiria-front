import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

html {  
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
}

ul,
ol {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

input {
  border: none
}

input, select, textarea {
  font-family: arial;
  font-size: 16px;
}

::placeholder {
  font-family: inherit;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
`;

export default GlobalStyle;
