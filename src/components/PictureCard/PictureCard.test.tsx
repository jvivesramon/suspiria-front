import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import { picturesMock } from "../../mocks/mocks/picturesMock";
import PictureCard from "./PictureCard";

describe("Given a PictureCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show picture card with its title", () => {
      const title = picturesMock.pictures[0].pictureData.title;

      renderWithProviders(<PictureCard picture={picturesMock.pictures[0]} />, {
        picturesStore: picturesMock,
      });

      const expectedCard = screen.getByRole("heading", {
        name: title,
      });

      expect(expectedCard).toBeInTheDocument();
    });
  });
});
