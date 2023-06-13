import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import NotFoundPage from "./NotFoundPage";
import path from "../../routers/paths/paths";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import PicturesPage from "../PicturesPage/PicturesPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'not found page' image", () => {
      const imageText = "not found page";

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const expectedImage = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });

  describe("When the user clicks the 'Back to Home' button", () => {
    test("Then it should redirects to the home page", async () => {
      const buttonText = "Back to Home";
      const imageText = "Suspiria logo";

      const routes: RouteObject[] = [
        {
          path: path.app,
          element: <NotFoundPage />,
        },
        {
          path: path.errorPage,
          element: <PicturesPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(expectedButton);

      const expectedHomePage = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedHomePage).toBeInTheDocument();
    });
  });
});
