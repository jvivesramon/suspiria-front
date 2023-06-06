import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Suspiria' logo", () => {
      const expectedText = "Suspiria logo";

      renderWithProviders(wrapWithRouter(<App />));

      const expectedResult = screen.getByRole("img", {
        name: expectedText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
