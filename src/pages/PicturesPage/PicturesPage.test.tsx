import { renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  renderWithProviders,
  wrapperWithProvider,
} from "../../testUtils/testUtils";
import PicturesPage from "./PicturesPage";
import { server } from "../../mocks/server";
import { handlers } from "../../mocks/handlers";
import useApi from "../../hooks/useApi/useApi";

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
      server.resetHandlers(...handlers);

      const nextButtonText = "Next";
      const skip = 3;

      const {
        result: {
          current: { getPictures },
        },
      } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

      const picturesList = await getPictures(skip);

      renderWithProviders(<PicturesPage />, {
        picturesStore: picturesList,
      });

      const expectedNextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      userEvent.click(expectedNextButton);
      expect(screen.getByText(/1/).textContent).toBe("1/0");
    });
  });
});
