import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import FormPage from "./FormPage";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import PicturesPage from "../PicturesPage/PicturesPage";
import path from "../../routers/paths/paths";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

describe("Given a FormPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Image* :' label and an 'Add story' button", () => {
      const buttonText = "Add story";
      const labelImageText = "Image* :";

      renderWithProviders(wrapWithRouter(<FormPage />));

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });
      const expectedLabel = screen.getByLabelText(labelImageText);

      expect(expectedButton).toBeInTheDocument();
      expect(expectedLabel).toBeInTheDocument();
    });
  });

  describe("When the user clicks in 'Add story' button", () => {
    test("Then it show should the Suspiria logo from the home page", async () => {
      server.resetHandlers(...handlers);

      const routes = [
        {
          path: "/",
          element: <FormPage />,
        },
        {
          path: path.homeCollection,
          element: <PicturesPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      const titleText = "Suspiria logo";
      const buttonText = "Add story";

      const imageInputText = "Image* :";
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
    });

    test("Then it should show a modal error", async () => {
      server.resetHandlers(...errorHandlers);

      const routes = [
        {
          path: "/",
          element: <FormPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      const buttonText = "Add story";
      const expectedMessage = "created";

      const imageInputText = "Image* :";
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

      renderWithProviders(<Layout />);

      const expectedModal = screen.getByText(expectedMessage);

      expect(expectedModal).toBeInTheDocument();
    });
  });
});
