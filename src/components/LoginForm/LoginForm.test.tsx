import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { renderWithProviders } from "../../testUtils/testUtils";
import LoginForm from "./LoginForm";
import { userData } from "../../mocks/mocks/userMocks";

beforeAll(() => {
  vi.clearAllMocks();
});

describe("Given a LoginForm component", () => {
  const usernamePlaceholder = "Username:";
  const passwordPlaceholder = "Password:";

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

      await userEvent.type(expectedUsernamePlaceholder, userData.username);
      await userEvent.type(expectedPasswordPlaceholder, userData.password);

      expect(expectedUsernamePlaceholder).toHaveValue(userData.username);
      expect(expectedPasswordPlaceholder).toHaveValue(userData.password);
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

      await userEvent.type(usernamePlaceholderField, userData.username);
      await userEvent.type(passwordPlaceholderField, userData.password);
      await userEvent.click(loginButton);

      expect(onClick).toHaveBeenCalled();
    });
  });
});
