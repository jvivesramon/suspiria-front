import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'button'", () => {
      const buttonText = "button";

      renderWithProviders(<Button className="" text={buttonText} />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
