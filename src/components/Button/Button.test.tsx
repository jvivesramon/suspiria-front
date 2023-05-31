import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    let isNotValid: boolean;

    const buttonText = "button";

    test("Then it should show a button with the text 'button' enabled", () => {
      isNotValid = false;

      renderWithProviders(
        <Button isDisable={isNotValid} className="" text={buttonText} />
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
      expect(expectedButton).toBeEnabled();
    });

    test("Then it should show a button with the text 'button' disabled", () => {
      isNotValid = true;

      renderWithProviders(
        <Button isDisable={isNotValid} className="" text={buttonText} />
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
      expect(expectedButton).toBeDisabled();
    });
  });
});
