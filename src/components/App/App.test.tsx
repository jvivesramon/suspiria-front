import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Suspiria' logo", () => {
      const expectedText = "Suspiria logo";

      renderWithProviders(<App />);

      const expectedResult = screen.getByRole("img", {
        name: expectedText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
