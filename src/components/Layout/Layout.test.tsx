import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Layout from "./Layout";
import {
  falseLoadingState,
  trueLoadingState,
} from "../../store/ui/uiSlice.test";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Suspiria' logo", () => {
      const expectedText = "Suspiria logo";

      renderWithProviders(<Layout />);

      const expectedResult = screen.getByRole("img", {
        name: expectedText,
      });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a loading if isLoading is true", () => {
      const expectedText = "loading";

      renderWithProviders(<Layout />, { uiStore: trueLoadingState });

      const expectedLoading = screen.getByRole("generic", {
        name: expectedText,
      });

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});
