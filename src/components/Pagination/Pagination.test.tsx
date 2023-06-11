import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Pagination from "./Pagination";
import { vi } from "vitest";

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Previous' button and a 'Next' button", () => {
      const previousButtonText = "Previous";
      const nextButtonText = "Next";
      const onClick = vi.fn();
      const onClick2 = vi.fn();
      const isFalse = false;

      renderWithProviders(
        <Pagination
          isNextDisabled={isFalse}
          isPreviousDisabled={false}
          onClickNext={onClick}
          onClickPrevious={onClick2}
        />
      );

      const expectedPreviousButton = screen.getByRole("button", {
        name: previousButtonText,
      });
      const expectedNextButton = screen.getByRole("button", {
        name: nextButtonText,
      });

      expect(expectedNextButton).toBeInTheDocument();
      expect(expectedPreviousButton).toBeInTheDocument();
    });
  });
});
