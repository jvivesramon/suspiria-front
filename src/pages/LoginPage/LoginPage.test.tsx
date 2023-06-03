import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import LoginPage from "./LoginPage";
import {
  passwordPlaceholder,
  validUserCredentials,
  usernamePlaceholder,
} from "../../mocks/mocks/userMocks";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import path from "../../routers/paths/paths";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { invalidUserCredentials } from "../../mocks/mocks/userMocks";
import PicturesPage from "../PicturesPage/PicturesPage";

describe("Given a LoginPage page", () => {
  const routes: RouteObject[] = [
    {
      path: path.app,
      element: <LoginPage />,
    },
    {
      path: path.homeCollection,
      element: <PicturesPage />,
    },
  ];

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
    test("Then it should show the suspiria logo", async () => {
      const imageText = "Suspiria logo";

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const usernamePlaceholderField =
        screen.getByPlaceholderText(usernamePlaceholder);
      const passwordPlaceholderField =
        screen.getByPlaceholderText(passwordPlaceholder);
      const loginButton = screen.getByRole("button", { name: "Log In" });

      await userEvent.type(
        usernamePlaceholderField,
        validUserCredentials.username
      );
      await userEvent.type(
        passwordPlaceholderField,
        validUserCredentials.password
      );

      await userEvent.click(loginButton);

      const expectedLogo = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedLogo).toBeInTheDocument();
    });
  });

  describe("When the user complete the fields with invalid credentials and clicks on 'Log In' button", () => {
    test("Then it should stay in login page", async () => {
      server.resetHandlers(...errorHandlers);

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const usernamePlaceholderField =
        screen.getByPlaceholderText(usernamePlaceholder);
      const passwordPlaceholderField =
        screen.getByPlaceholderText(passwordPlaceholder);
      const loginButton = screen.getByRole("button", { name: "Log In" });

      await userEvent.type(
        usernamePlaceholderField,
        invalidUserCredentials.username
      );
      await userEvent.type(
        passwordPlaceholderField,
        invalidUserCredentials.password
      );
      await userEvent.click(loginButton);

      expect(router.state.location.pathname).toBe(path.app);
    });
  });
});
