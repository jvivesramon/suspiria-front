import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../testUtils/testUtils";
import Feedback from "./Feedback";
import { actionMessage } from "../../../utils/feedbackMessages/feedbackMessages";

describe("Given a Feedback component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Something went wrong. Your story couldn't been created' error message and a error icon", () => {
      const feedbackMessage = "Your story couldn't been";
      const errorIconText = "icon for error";

      renderWithProviders(
        <Feedback
          isError={true}
          actionOnClick={() => ""}
          text={feedbackMessage}
          modalActionText={actionMessage.deleted}
        />
      );

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

      renderWithProviders(
        <Feedback
          isError={false}
          actionOnClick={() => ""}
          text={feedbackMessage}
          modalActionText={actionMessage.created}
        />
      );

      const expectedText = screen.getByText(feedbackMessage);
      const expectedIconText = screen.getByRole("img", {
        name: iconText,
      });

      expect(expectedText).toBeInTheDocument();
      expect(expectedIconText).toBeInTheDocument();
    });
  });
});
