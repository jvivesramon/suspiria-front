import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import FormPage from "./FormPage";

describe("Given a FormPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Image* :' label and an 'Add story' button", () => {
      const buttonText = "Add story";
      const labelImageText = "Image* :";

      renderWithProviders(<FormPage />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });
      const expectedLabel = screen.getByLabelText(labelImageText);

      expect(expectedButton).toBeInTheDocument();
      expect(expectedLabel).toBeInTheDocument();
    });
  });
});
