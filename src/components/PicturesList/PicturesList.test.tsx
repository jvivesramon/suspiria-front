import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import PicturesList from "./PicturesList";
import { pictureTotalData } from "../../mocks/mocks/picturesMock";

describe("Given a PicturesList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show one picture card with its title", () => {
      const title = pictureTotalData.pictures[0].pictureData.title;

      renderWithProviders(wrapWithRouter(<PicturesList />), {
        picturesStore: pictureTotalData,
      });

      const expectedCard = screen.getByRole("heading", {
        name: title,
      });

      expect(expectedCard).toBeInTheDocument();
    });
  });
});
