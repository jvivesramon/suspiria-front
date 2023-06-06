import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../testUtils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'not found page' image", () => {
      const imageText = "not found page";

      renderWithProviders(<NotFoundPage />);

      const expectedImage = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
