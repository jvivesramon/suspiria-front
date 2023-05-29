import { DefaultTheme } from "styled-components";
import "@fontsource/jomolhari";
import "@fontsource/gurajada";

const theme: DefaultTheme = {
  colors: {
    primary: "#2f2f35",
    secondary: "#242428",
    tertiary: "#eda82c",
    white: "#ffffff",
    black: "#000000",
    logo: "#45a0e0",
    error: "#ff5454",
    ok: "#54ff65",

    button: {
      logIn: "#417ca7",
      modify: "#417ca7",
      delete: "#c23126",
    },
  },

  fonts: {
    primary: "Gurajada",
    secundary: "Jomolhari",
  },

  size: {
    title: "95px",
    secondaryTitle: "36px",
    button: "30px",
    text: "25px",
    details: "16px",
  },
};

export default theme;
