import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Layout from "./Layout";

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
  });
});
