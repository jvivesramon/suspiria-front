import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../testUtils/testUtils";
import { pictureTotalData, picturesMock } from "../../mocks/mocks/picturesMock";
import PictureCard from "./PictureCard";

describe("Given a PictureCard component", () => {
  const title = picturesMock.pictures[0].pictureData.title;
  const id = "1234";

  describe("When it is rendered", () => {
    test("Then it should show picture card with its title", () => {
      renderWithProviders(
        <PictureCard picture={pictureTotalData.pictures[0]} userId={id} />,
        {
          picturesStore: pictureTotalData,
        }
      );

      const expectedCard = screen.getByRole("heading", {
        name: title,
      });

      expect(expectedCard).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the delete button", () => {
    test("Then it should delete the card", async () => {
      const buttonText = "delete icon";

      renderWithProviders(
        <PictureCard picture={pictureTotalData.pictures[0]} userId={id} />,
        {
          picturesStore: pictureTotalData,
        }
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.click(expectedButton);

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
