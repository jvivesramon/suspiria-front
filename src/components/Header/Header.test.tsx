import { screen } from "@testing-library/react";
import Header from "./Header";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a header with the Suspiria logo", () => {
      const imageText = "Suspiria logo";

      renderWithProviders(<Header />);

      const expectedResult = screen.getByRole("img", {
        name: imageText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
