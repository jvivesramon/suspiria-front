import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import GlobalStyle from "../../styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the Suspiria logo", () => {
      const imageText = "Suspiria logo";

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <Header />
          </Provider>
        </ThemeProvider>
      );

      const expectedResult = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
