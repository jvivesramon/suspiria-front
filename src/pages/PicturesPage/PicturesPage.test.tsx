import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import PicturesPage from "./PicturesPage";
import { server } from "../../mocks/server";
import { paginationHandlers } from "../../mocks/handlers";
import { pictureTotalData } from "../../mocks/mocks/picturesMock";
import { vi } from "vitest";

describe("Given a PicturesPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Suspiria logo", () => {
      const imageText = "Suspiria logo";

      renderWithProviders(wrapWithRouter(<PicturesPage />));

      const expectedLogo = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedLogo).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'Next' button", () => {
    test("Then the 'Next' button has to be disabled", async () => {
      server.resetHandlers(...paginationHandlers);

      const spyScrollTo = vi.fn();
      Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });

      const nextButtonText = "Next";

      renderWithProviders(wrapWithRouter(<PicturesPage />), {
        picturesStore: pictureTotalData,
      });

      const expectedNextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      expect(expectedNextButton).toBeInTheDocument();

      await userEvent.click(expectedNextButton);

      expect(expectedNextButton).not.toBeInTheDocument();
    });
  });

  describe("When the user clicks on the 'Previous' button", () => {
    test("Then the 'Previous' button has to be disabled", async () => {
      server.resetHandlers(...paginationHandlers);

      const spyScrollTo = vi.fn();
      Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });

      const nextButtonText = "Next";
      const previousButtonText = "Previous";

      renderWithProviders(wrapWithRouter(<PicturesPage />), {
        picturesStore: pictureTotalData,
      });

      const expectedNextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      expect(expectedNextButton).toBeInTheDocument();

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
