import { screen } from "@testing-library/react";
import Nav from "./Nav";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a Nav component", () => {
  describe("When it is rendered", () => {
    let textImage = "create form logo";
    test("Then it should show a create logo", () => {
      textImage = "create form logo";

      renderWithProviders(<Nav />);

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a logout logo", () => {
      textImage = "logout logo";

      renderWithProviders(<Nav />);

      const expectedResult = screen.getByRole("img", { name: textImage });

      expect(expectedResult).toBeInTheDocument();
    });

    test("Then it should show a 'Home' text icon", () => {
      const textIcon = "Home";

      renderWithProviders(<Nav />);

      const expectedResult = screen.getByText(textIcon);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
