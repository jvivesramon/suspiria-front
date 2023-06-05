import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Layout from "./Layout";
import { trueLoadingState } from "../../store/ui/uiSlice.test";
import { uiStoreMock } from "../../mocks/mocks/uiMock";

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

    test("Then it should show a modal if isVisible is true", () => {
      const expectedButtonText = "button to close the feedback";

      renderWithProviders(<Layout />, {
        uiStore: { ...uiStoreMock, isVisible: true },
      });

      const expectedLoading = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(expectedLoading).toBeInTheDocument();
    });
  });
});
