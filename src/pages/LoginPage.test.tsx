import { screen } from "@testing-library/react";
import { renderWithProviders } from "../testUtils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'Suspiria'", () => {
      const textTitle = "Suspiria";

      renderWithProviders(<LoginPage />);

      const expectedResult = screen.getByRole("heading", {
        name: textTitle,
      });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show an image with the text 'A woman leaning on his knee with a melancholy mood'", () => {
      const imageTitle = "A woman leaning on his knee with a melancholy mood";

      renderWithProviders(<LoginPage />);

      const expectedResult = screen.getByRole("img", {
        name: imageTitle,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
