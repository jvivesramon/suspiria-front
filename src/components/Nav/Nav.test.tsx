import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";
import { renderWithProviders } from "../../testUtils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import path from "../../routers/paths/paths";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import { Provider } from "react-redux";
import theme from "../../styles/theme/theme";
import { store } from "../../store";

describe("Given a Nav component", () => {
  describe("When it is rendered", () => {
    let textImage = "create form logo";
    test("Then it should show a create logo", () => {
      textImage = "create form logo";

      renderWithProviders(<Nav />);

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a logout logo", () => {
      textImage = "logout logo";

      renderWithProviders(<Nav />);

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a 'Home' text icon", () => {
      const textIcon = "Home";

      renderWithProviders(<Nav />);

      const expectedResult = screen.getByText(textIcon);

      expect(expectedResult).toBeInTheDocument();
    });
  });

  describe("When the user is logged and clicks on the logout button", () => {
    test("Then it should redirect to the loginPage", async () => {
      const routes: RouteObject[] = [
        {
          path: path.app,
          element: <Nav />,
        },
      ];

      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
      );

      const button = screen.getByRole("button", {
        name: "logout logo",
      });

      await userEvent.click(button);

      expect(router.state.location.pathname).toStrictEqual(path.app);
    });
  });
});
