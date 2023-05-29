import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import theme from "../../styles/theme/theme";

describe("Given an App component", () => {
  describe("When rendered", () => {
    test("Then it should show a container", () => {
      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      );

      const text = screen.getByRole("heading", { name: "Hello World" });

      expect(text).toBeInTheDocument();
    });
  });
});
