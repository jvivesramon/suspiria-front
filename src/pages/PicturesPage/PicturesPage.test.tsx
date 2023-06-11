import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import PicturesPage from "./PicturesPage";
import { server } from "../../mocks/server";
import { paginationHandlers } from "../../mocks/handlers";
import { pictureTotalData } from "../../mocks/mocks/picturesMock";

describe("Given a PicturesPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Suspiria logo", () => {
      const imageText = "Suspiria logo";

      renderWithProviders(<PicturesPage />);

      const expectedLogo = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedLogo).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'Previous' button", () => {
    test("Then it should show the next picture's page", async () => {
      server.resetHandlers(...paginationHandlers);

      const nextButtonText = "Next";
      const previousButtonText = "Previous";

      renderWithProviders(wrapWithRouter(<PicturesPage />), {
        picturesStore: pictureTotalData,
      });

      const expectedNextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      await userEvent.click(expectedNextButton);

      expect(expectedNextButton).not.toBeInTheDocument();

      const expectedPreviousButton = screen.getByRole("button", {
        name: previousButtonText,
      });

      expect(expectedPreviousButton).toBeInTheDocument();

      await userEvent.click(expectedPreviousButton);

      expect(expectedPreviousButton).not.toBeInTheDocument();
    });
  });
});
