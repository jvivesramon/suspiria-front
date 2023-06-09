import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import PictureForm from "./PictureForm";

describe("Given a CardForm component", () => {
  describe("When it rendered", () => {
    test("Then it should show a 'Image* :' label and an 'Add story' button", () => {
      const buttonText = "Add story";
      const labelImageText = "Image* :";

      renderWithProviders(<PictureForm />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });
      const expectedLabel = screen.getByLabelText(labelImageText);

      expect(expectedButton).toBeInTheDocument();
      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
