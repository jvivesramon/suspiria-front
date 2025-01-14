import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import { pictureTotalData, picturesMock } from "../../mocks/mocks/picturesMock";
import PictureCard from "./PictureCard";

describe("Given a PictureCard component", () => {
  const title = picturesMock.pictures[0].pictureData.title;
  const id = "1234";

  describe("When it is rendered", () => {
    test("Then it should show picture card with its title", () => {
      renderWithProviders(
        wrapWithRouter(
          <PictureCard
            picture={pictureTotalData.pictures[0]}
            userId={id}
            position={0}
          />
        ),
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

  describe("When the user clicks on the cards", () => {
    test("Then it should show the picture card with its details", async () => {
      renderWithProviders(
        wrapWithRouter(
          <PictureCard
            picture={pictureTotalData.pictures[0]}
            userId={id}
            position={0}
          />
        ),
        {
          picturesStore: pictureTotalData,
        }
      );

      const expectedCard = screen.getByLabelText("detail-card");

      await userEvent.click(expectedCard);

      expect(expectedCard).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the delete button", () => {
    test("Then it should delete the card", async () => {
      const buttonText = "delete icon";

      renderWithProviders(
        wrapWithRouter(
          <PictureCard
            picture={pictureTotalData.pictures[0]}
            userId={id}
            position={0}
          />
        ),
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

  describe("When the user clicks on the modify button", () => {
    test("Then it should redirect to the modify form", async () => {
      const buttonText = "modify icon";

      renderWithProviders(
        wrapWithRouter(
          <PictureCard
            picture={pictureTotalData.pictures[0]}
            userId={id}
            position={0}
          />
        ),
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
