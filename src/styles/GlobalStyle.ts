import { createGlobalStyle } from "styled-components";
import "@fontsource/jomolhari";
import "@fontsource/gurajada";

const GlobalStyle = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}

@font-face {
  font-display: swap; 
  font-family: 'Jomolhari';
  font-style: normal;
  font-weight: 400;
  src: url('/assets/jomolhari-latin-400-normal-05031377.woff2') format('woff2'); 
}

@font-face {
  font-display: swap;
  font-family: 'Gurajada';
  font-style: normal;
  font-weight: 400;
  src: url('assets/gurajada-latin-400-normal-670cf3f0.woff2') format('woff2'); 
}

html {  
  font-family: "Jomolhari, serif";
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

::placeholder {
  font-family: inherit;
}

button {
  font-family: inherit;
  border: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
