import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../testUtils/testUtils";
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

  describe("When the user clicks on the Next' button", () => {
    test("Then the 'Next' button has to be disabled", async () => {
      server.resetHandlers(...paginationHandlers);

      const nextButtonText = "Next";

      renderWithProviders(<PicturesPage />, {
        picturesStore: pictureTotalData,
      });

      const expectedNextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      expect(expectedNextButton).toBeInTheDocument();

      await userEvent.click(expectedNextButton);

      waitFor(() => expect(expectedNextButton).not.toBeInTheDocument());
    });
  });
});
