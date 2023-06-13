import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import PictureForm from "./PictureForm";
import { vi } from "vitest";

describe("Given a CardForm component", () => {
  const onClick = vi.fn();

  describe("When it is rendered", () => {
    test("Then it should show a 'Image* :' label and an 'Add story' button", () => {
      const buttonText = "Add story";
      const labelImageText = "Image URL* :";

      renderWithProviders(wrapWithRouter(<PictureForm onSubmit={onClick} />));

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });
      const expectedLabel = screen.getByLabelText(labelImageText);

      expect(expectedButton).toBeInTheDocument();
      expect(expectedLabel).toBeInTheDocument();
    });

    test("Then it should show an 'Add story' button disabled", () => {
      const buttonText = "Add story";

      renderWithProviders(wrapWithRouter(<PictureForm onSubmit={onClick} />));

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeDisabled();
    });
  });

  describe("When the user complete the fields", () => {
    test("Then it should show an 'Add story' button enabled and it should be clicked", async () => {
      const buttonText = "Add story";
      const imageInputText = "Image URL* :";
      const titleInputText = "Title* :";
      const authorInputText = "Author* :";
      const yearInputText = "Year* :";
      const selectInputText = "Color temperature* :";
      const movementInputText = "Movement* :";
      const firstColorInputText = "First color* :";
      const secondColorInputText = "Second color* :";
      const thirdColorInputText = "Third color* :";
      const fourthColorInputText = "Fourth color:";
      const fifthColorInputText = "Fifth color:";
      const sixthColorInputText = "Sixth color:";
      const descriptionInputText = "Description* :";
      const inputText =
        "https://cdn.discordapp.com/attachments/1094550845909114921/1107441064509448243/bb.jpg";

      renderWithProviders(wrapWithRouter(<PictureForm onSubmit={onClick} />));

      await userEvent.type(screen.getByLabelText(imageInputText), inputText);
      await userEvent.type(screen.getByLabelText(titleInputText), "Judit");
      await userEvent.type(screen.getByLabelText(authorInputText), "Judit");
      await userEvent.type(screen.getByLabelText(yearInputText), "1993");
      await userEvent.selectOptions(screen.getByLabelText(selectInputText), [
        "Warm",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(selectInputText), [
        "Cold",
      ]);
      await userEvent.selectOptions(screen.getByLabelText(selectInputText), [
        "Mixed",
      ]);
      await userEvent.type(screen.getByLabelText(movementInputText), inputText);
      await userEvent.type(
        screen.getByLabelText(firstColorInputText),
        "ffffff"
      );
      await userEvent.type(
        screen.getByLabelText(secondColorInputText),
        "ffffff"
      );
      await userEvent.type(
        screen.getByLabelText(thirdColorInputText),
        "ffffff"
      );

      await userEvent.type(
        screen.getByLabelText(fourthColorInputText),
        "ffffff"
      );
      await userEvent.type(
        screen.getByLabelText(fifthColorInputText),
        "ffffff"
      );
      await userEvent.type(
        screen.getByLabelText(sixthColorInputText),
        "ffffff"
      );
      await userEvent.type(
        screen.getByLabelText(descriptionInputText),
        "Judit"
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeEnabled();

      await userEvent.click(expectedButton);

      expect(onClick).toHaveBeenCalled();
    }, 10000);
  });
});
