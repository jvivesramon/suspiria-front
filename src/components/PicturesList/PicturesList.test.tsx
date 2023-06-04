import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import PicturesList from "./PicturesList";
import { picturesMock } from "../../mocks/mocks/picturesMock";

describe("Given a PicturesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show one picture card with its title", () => {
      const title = picturesMock.pictures[0].pictureData.title;

      renderWithProviders(<PicturesList />, { picturesStore: picturesMock });

      const expectedCard = screen.getByRole("heading", {
        name: title,
      });

      expect(expectedCard).toBeInTheDocument();
    });
  });
});