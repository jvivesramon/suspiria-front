import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import PicturesPage from "./PicturesPage";

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
});
