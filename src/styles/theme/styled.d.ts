import { DefaultTheme } from "styled-components";

interface ButtonThemeStructure {
  logIn: string;
  modify: string;
  delete: string;
}

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
      black: string;
      logo: string;
      info: string;
      error: string;
      ok: string;

      button: ButtonThemeStructure;
    };

    fonts: {
      primary: string;
      secondary: string;
    };

    size: {
      title: string;
      slogan: string;
      info: string;
      secondaryTitle: string;
      medium: string;
      text: string;
      details: string;
    };
  }
}

export default DefaultTheme;
