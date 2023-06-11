import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import PicturesFilter from "./PicturesFilter";

describe("Given a PictureFilter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a filter menu with three buttons", () => {
      const coldButton = "Cold";
      const mixedButton = "Mixed";
      const warmButton = "Warm";

      renderWithProviders(<PicturesFilter />);

      const expectedColdButton = screen.getByRole("button", {
        name: coldButton,
      });

      const expectedMixedButton = screen.getByRole("button", {
        name: mixedButton,
      });

      const expectedWarmButton = screen.getByRole("button", {
        name: warmButton,
      });

      expect(expectedColdButton).toBeInTheDocument();
      expect(expectedMixedButton).toBeInTheDocument();
      expect(expectedWarmButton).toBeInTheDocument();
    });
  });
});
