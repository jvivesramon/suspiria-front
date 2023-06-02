import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders } from "../../testUtils/testUtils";
import LoginForm from "./LoginForm";
import {
  passwordPlaceholder,
  validUserCredentials,
  usernamePlaceholder,
} from "../../mocks/mocks/userMocks";

beforeAll(() => {
  vi.clearAllMocks();
});

describe("Given a LoginForm component", () => {
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

      await userEvent.type(
        expectedUsernamePlaceholder,
        validUserCredentials.username
      );
      await userEvent.type(
        expectedPasswordPlaceholder,
        validUserCredentials.password
      );

      expect(expectedUsernamePlaceholder).toHaveValue(
        validUserCredentials.username
      );
      expect(expectedPasswordPlaceholder).toHaveValue(
        validUserCredentials.password
      );
    });
  });

  describe("When the user complete the fields and click on 'Log In' button", () => {
    test("Then it should call the handleOnSubmit function", async () => {
      renderWithProviders(<LoginForm actionOnClick={onClick} />);

      const usernamePlaceholderField =
        screen.getByPlaceholderText(usernamePlaceholder);
      const passwordPlaceholderField =
        screen.getByPlaceholderText(passwordPlaceholder);
      const loginButton = screen.getByRole("button", { name: "Log In" });

      await userEvent.type(
        usernamePlaceholderField,
        validUserCredentials.username
      );
      await userEvent.type(
        passwordPlaceholderField,
        validUserCredentials.password
      );
      await userEvent.click(loginButton);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
