import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../testUtils/testUtils";
import PicturesFilter from "./PicturesFilter";
import { vi } from "vitest";

describe("Given a PictureFilter component", () => {
  describe("When it is rendered", () => {
    const onClick = vi.fn();

    const coldButton = "Cold";
    const mixedButton = "Mixed";
    const warmButton = "Warm";
    const allButton = "All colors";

    test("Then it should show a filter menu with three buttons", () => {
      renderWithProviders(
        <PicturesFilter setCurrentPage={onClick} setFilterState={onClick} />
      );

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

      expect(expectedColdButton).toBeInTheDocument();
      expect(expectedMixedButton).toBeInTheDocument();
      expect(expectedWarmButton).toBeInTheDocument();
      expect(expectedAllButton).toBeInTheDocument();
    });

    test("Then the buttons have to be clicked", async () => {
      renderWithProviders(
        <PicturesFilter setCurrentPage={onClick} setFilterState={onClick} />
      );

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

      expect(onClick).toHaveBeenCalled();
    });
  });
});
