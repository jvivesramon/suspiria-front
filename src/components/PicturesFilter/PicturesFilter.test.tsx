import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../testUtils/testUtils";
import PicturesFilter from "./PicturesFilter";

describe("Given a PictureFilter component", () => {
  describe("When it is rendered", () => {
    const coldButton = "Cold";
    const mixedButton = "Mixed";
    const warmButton = "Warm";
    const allButton = "All colors";

    test("Then it should show a filter menu with three buttons", async () => {
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

      const expectedAllButton = screen.getByRole("button", {
        name: allButton,
      });

      await userEvent.click(expectedColdButton);
      await userEvent.click(expectedWarmButton);
      await userEvent.click(expectedMixedButton);
      await userEvent.click(expectedAllButton);

      expect(expectedColdButton).toBeInTheDocument();
      expect(expectedMixedButton).toBeInTheDocument();
      expect(expectedWarmButton).toBeInTheDocument();
      expect(expectedAllButton).toBeInTheDocument();
    });
  });
});
