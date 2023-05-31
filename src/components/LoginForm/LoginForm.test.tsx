import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show two inputs with the placeholder text 'Username:' and 'Password:'", () => {
      const usernamePlaceholder = "Username:";
      const passwordPlaceholder = "Password:";

      renderWithProviders(<LoginForm />);

      const expectedUsernamePlaceholder =
        screen.getByPlaceholderText(usernamePlaceholder);
      const expectedPasswordPlaceholder =
        screen.getByPlaceholderText(passwordPlaceholder);

      expect(expectedUsernamePlaceholder).toBeInTheDocument();
      expect(expectedPasswordPlaceholder).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log In'", () => {
      const buttonText = "Log In";

      renderWithProviders(<LoginForm />);

      const expectedResult = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
