import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import UpdatePicturePage from "./UpdatePicturePage";
import { pictureTotalData } from "../../mocks/mocks/picturesMock";
import { handlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import path from "../../routers/paths/paths";
import PicturesPage from "../PicturesPage/PicturesPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given an UpdatePicturePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'modify story' button", () => {
      const buttonText = "Modify story";
      const labelImageText = "Image URL* :";

      renderWithProviders(wrapWithRouter(<UpdatePicturePage />), {
        picturesStore: pictureTotalData,
      });

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });
      const expectedLabel = screen.getByLabelText(labelImageText);

      expect(expectedButton).toBeInTheDocument();
      expect(expectedLabel).toBeInTheDocument();
    });
  });

  describe("When the user types in", () => {
    test("Then it should show a 'modify story' button enabled and has to be clicked", async () => {
      server.resetHandlers(...handlers);

      const routes = [
        {
          path: "/",
          element: <UpdatePicturePage />,
        },
        {
          path: path.homeCollection,
          element: <PicturesPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      const titleText = "Suspiria logo";
      const buttonText = "Modify story";

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

      renderWithProviders(<RouterProvider router={router} />);

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

      await userEvent.click(expectedButton);

      const expectedLogo = screen.getByRole("img", {
        name: titleText,
      });

      expect(expectedLogo).toBeInTheDocument();
    }, 10000);
  });
});
