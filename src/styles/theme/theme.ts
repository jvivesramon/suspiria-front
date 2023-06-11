import { DefaultTheme } from "styled-components";
import "@fontsource/jomolhari";
import "@fontsource/gurajada";

const theme: DefaultTheme = {
  colors: {
    primary: "#2f2f35",
    secondary: "#242428",
    tertiary: "#eda82c",
    brightGrey: "#8c8888",
    white: "#fff",
    black: "#000",
    logo: "#45a0e0",
    info: "#ff535d",
    error: "#ff5454",
    delete: "#c23126",
    ok: "#54ff65",

    button: {
      logIn: "#417ca7",
      modify: "#417ca7",
      delete: "#c23126",
    },
  },

  fonts: {
    primary: "Gurajada, sans-serif",
    secondary: "Jomolhari, serif",
  },

  size: {
    title: "5.938rem",
    slogan: "2.813rem",
    info: "2.438rem",
    secondaryTitle: "2.25rem",
    medium: "1.875rem",
    text: "1.563rem",
    details: "1rem",
  },
};

export default theme;
