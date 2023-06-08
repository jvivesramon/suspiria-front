import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import path from "../../routers/paths/paths";
import LoginPage from "../../pages/LoginPage/LoginPage";
import FormPage from "../../pages/FormPage/FormPage";

describe("Given a Nav component", () => {
  describe("When it is rendered", () => {
    let textImage = "";
    test("Then it should show a create logo", () => {
      textImage = "create form logo";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a logout logo", () => {
      textImage = "logout logo";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a 'Home' text icon", () => {
      const textIcon = "Home";

      renderWithProviders(wrapWithRouter(<Navbar />));

      const expectedResult = screen.getByText(textIcon);

      expect(expectedResult).toBeInTheDocument();
    });
  });

  describe("When the user is logged and clicks on the logout button", () => {
    test("Then it should redirect to the LoginPage", async () => {
      const buttonName = "logout";
      const titleText = "Suspiria";
      const routes: RouteObject[] = [
        {
          path: path.app,
          element: <Navbar />,
        },
        {
          path: path.login,
          element: <LoginPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const button = screen.getByLabelText(buttonName);

      await userEvent.click(button);

      const title = screen.getByRole("heading", {
        name: titleText,
      });

      expect(router.state.location.pathname).toBe(path.login);
      expect(title).toBeInTheDocument();
    });
  });

  describe("When the user is logged and clicks on the create button", () => {
    test("Then it should redirect to the FormPage", async () => {
      const buttonName = "create";
      const labelImageText = "Image* :";

      const routes: RouteObject[] = [
        {
          path: path.app,
          element: <Navbar />,
        },
        {
          path: path.form,
          element: <FormPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const button = screen.getByLabelText(buttonName);

      await userEvent.click(button);

      const expectedLabel = screen.getByLabelText(labelImageText);

      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
