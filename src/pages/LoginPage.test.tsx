import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../testUtils/testUtils";
import LoginPage from "./LoginPage";
import { userData } from "../mocks/mocks/userMocks";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import path from "../routers/paths/paths";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Suspiria'", () => {
      const textTitle = "Suspiria";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const expectedResult = screen.getByRole("heading", {
        name: textTitle,
      });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show an image with the text 'A woman leaning on his knee with a melancholy mood'", () => {
      const imageTitle = "A woman leaning on his knee with a melancholy mood";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const expectedResult = screen.getByRole("img", {
        name: imageTitle,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });

  describe("When the user complete the fields and click on 'Log In' button", () => {
    test("Then it should redirects to home page", async () => {
      const usernamePlaceholder = "Username:";
      const passwordPlaceholder = "Password:";

      const routes: RouteObject[] = [
        {
          path: path.app,
          element: <LoginPage />,
        },
        { path: path.homeCollection },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const usernamePlaceholderField =
        screen.getByPlaceholderText(usernamePlaceholder);
      const passwordPlaceholderField =
        screen.getByPlaceholderText(passwordPlaceholder);
      const loginButton = screen.getByRole("button", { name: "Log In" });

      await userEvent.type(usernamePlaceholderField, userData.username);
      await userEvent.type(passwordPlaceholderField, userData.password);
      await userEvent.click(loginButton);

      expect(router.state.location.pathname).toBe(path.homeCollection);
    });
  });
});
