import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, vitest } from "vitest";
import { renderWithProviders } from "../../testUtils/testUtils";
import LoginForm from "./LoginForm";
import { UserCredentials } from "../types";

describe("Given a LoginForm component", () => {
  const usernamePlaceholder = "Username:";
  const passwordPlaceholder = "Password:";

  const userLoginData: UserCredentials = {
    username: "Judit",
    password: "Judit",
  };

  const onClick = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show two inputs with the placeholder text 'Username:' and 'Password:'", () => {
      renderWithProviders(<LoginForm actionOnClick={onClick} />);

      const expectedUsernamePlaceholder =
        screen.getByPlaceholderText(usernamePlaceholder);
      const expectedPasswordPlaceholder =
        screen.getByPlaceholderText(passwordPlaceholder);

      expect(expectedUsernamePlaceholder).toBeInTheDocument();
      expect(expectedPasswordPlaceholder).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Log In'", () => {
      const buttonText = "Log In";

      renderWithProviders(<LoginForm actionOnClick={onClick} />);

      const expectedResult = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedResult).toBeInTheDocument();
    });
  });

  describe("When the user types 'Judit' in the username text field and in the password text field", () => {
    test("Then the username field and the password field should show 'Judit'", async () => {
      renderWithProviders(<LoginForm actionOnClick={onClick} />);

      const expectedUsernamePlaceholder =
        screen.getByPlaceholderText(usernamePlaceholder);
      const expectedPasswordPlaceholder =
        screen.getByPlaceholderText(passwordPlaceholder);

      await userEvent.type(expectedUsernamePlaceholder, userLoginData.username);
      await userEvent.type(expectedPasswordPlaceholder, userLoginData.password);

      expect(expectedUsernamePlaceholder).toHaveValue(userLoginData.username);
      expect(expectedPasswordPlaceholder).toHaveValue(userLoginData.password);
    });
  });

  describe("When the user complete the fields and click on 'Log In' button", () => {
    test("Then it should call the handleOnSubmit function", async () => {
      const handleOnSubmit = vitest.fn();

      renderWithProviders(<LoginForm actionOnClick={handleOnSubmit} />);

      const usernamePlaceholderField =
        screen.getByPlaceholderText(usernamePlaceholder);
      const passwordPlaceholderField =
        screen.getByPlaceholderText(passwordPlaceholder);
      const loginButton = screen.getByRole("button", { name: "Log In" });

      await userEvent.type(usernamePlaceholderField, userLoginData.username);
      await userEvent.type(passwordPlaceholderField, userLoginData.password);
      await userEvent.click(loginButton);

      expect(handleOnSubmit).toHaveBeenCalled();
    });
  });
});
