import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import path from "../../routers/paths/paths";

describe("Given a Nav component", () => {
  describe("When it is rendered", () => {
    let textImage = "create form logo";
    test("Then it should show a create logo", () => {
      textImage = "create form logo";

      renderWithProviders(wrapWithRouter(<Nav />));

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a logout logo", () => {
      textImage = "logout logo";

      renderWithProviders(wrapWithRouter(<Nav />));

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a 'Home' text icon", () => {
      const textIcon = "Home";

      renderWithProviders(wrapWithRouter(<Nav />));

      const expectedResult = screen.getByText(textIcon);

      expect(expectedResult).toBeInTheDocument();
    });
  });

  describe("When the user is logged and clicks on the logout button", () => {
    test("Then it should redirect to the loginPage", async () => {
      const buttonName = "logout logo";
      const routes: RouteObject[] = [
        {
          path: path.app,
          element: <Nav />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const button = screen.getByRole("button", {
        name: buttonName,
      });

      await userEvent.click(button);

      expect(router.state.location.pathname).toStrictEqual(path.app);
    });
  });
});
