import { renderWithProviders } from "../testUtils/testUtils";
import { LazyPicturesPage } from "./lazyPages";
import { Suspense } from "react";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import path from "./paths/paths";
import { screen, waitFor } from "@testing-library/react";

describe("Given lazyPicturesPage function", () => {
  describe("When it is called", () => {
    test("Then it should show the Suspiria logo", async () => {
      const imageText = "Suspiria logo";

      const routes: RouteObject[] = [
        {
          path: path.app,
          element: (
            <Suspense>
              <LazyPicturesPage />
            </Suspense>
          ),
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const expectedLogo = await waitFor(() =>
        screen.getByRole("img", {
          name: imageText,
        })
      );

      expect(expectedLogo).toBeInTheDocument();
    });
  });
});
