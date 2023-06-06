import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../testUtils/testUtils";
import Modal from "./Modal";
import { actionMessage } from "../../utils/feedbackMessages/feedbackMessages";
import { uiStoreMock } from "../../mocks/mocks/uiMock";

describe("Given a Feedback component", () => {
  const feedbackMessage = "Your story couldn't been";

  const { state } = {
    ...uiStoreMock,
    state: {
      isError: true,
      modalActionText: actionMessage.deleted,
      text: feedbackMessage,
    },
  };

  describe("When it is rendered", () => {
    test("Then it should show a 'Something went wrong. Your story couldn't been created' error message and a error icon", () => {
      const errorIconText = "icon for error";

      renderWithProviders(<Modal state={state} />);

      const expectedText = screen.getByText(feedbackMessage);
      const expectedIconText = screen.getByRole("img", {
        name: errorIconText,
      });

      expect(expectedText).toBeInTheDocument();
      expect(expectedIconText).toBeInTheDocument();
    });

    test("Then it should show a '¡Congratulations! Your new story has been succesfully created' message and a success icon", () => {
      const feedbackMessage = "Your new story has been succesfully";
      const iconText = "icon for everything ok";

      const { state } = {
        ...uiStoreMock,
        state: {
          isError: false,
          modalActionText: actionMessage.created,
          text: feedbackMessage,
        },
      };

      renderWithProviders(<Modal state={state} />);

      const expectedText = screen.getByText(feedbackMessage);
      const expectedIconText = screen.getByRole("img", {
        name: iconText,
      });

      expect(expectedText).toBeInTheDocument();
      expect(expectedIconText).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the button", () => {
    test("Then the modal has to disapear", async () => {
      const buttonText = "button to close the feedback";

      renderWithProviders(<Modal state={state} />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(expectedButton);

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
