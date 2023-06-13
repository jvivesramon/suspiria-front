import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { picturesMock } from "../../mocks/mocks/picturesMock";
import { renderWithProviders } from "../../testUtils/testUtils";
import DetailPictureCard from "./DetailPictureCard";

describe("Given a DetailPicturePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a picture", () => {
      const store = {
        pictureId: {
          ...picturesMock.pictures[0],
        },
      };

      const userId = "1";

      const expectedTitle = "Girl with Pearl Earring";

      renderWithProviders(
        <DetailPictureCard userId={userId} picture={store.pictureId} />
      );

      const expectedTitleImage = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedTitleImage).toBeInTheDocument();
    });

    test("Then it should show a 'Warm' text", () => {
      const store = {
        ...picturesMock.pictures[0],
        temperatureColor: {
          warm: true,
          cold: false,
          mixed: false,
        },
      };

      const userId = "1";

      const expectedText = "Warm";

      renderWithProviders(
        <DetailPictureCard userId={userId} picture={store} />
      );

      const expectedTemperatureText = screen.getByText(expectedText);

      expect(expectedTemperatureText).toBeInTheDocument();
    });

    test("Then it should show a 'Cold' text", () => {
      const store = {
        ...picturesMock.pictures[0],
        temperatureColor: {
          warm: false,
          cold: true,
          mixed: false,
        },
      };

      const userId = "1";

      const expectedText = "Cold";

      renderWithProviders(
        <DetailPictureCard userId={userId} picture={store} />
      );

      const expectedTemperatureText = screen.getByText(expectedText);

      expect(expectedTemperatureText).toBeInTheDocument();
    });

    test("Then it should show a 'Mixed' text", () => {
      const store = {
        ...picturesMock.pictures[0],
        temperatureColor: {
          warm: false,
          cold: false,
          mixed: true,
        },
      };

      const userId = "1";

      const expectedText = "Mixed";

      renderWithProviders(
        <DetailPictureCard userId={userId} picture={store} />
      );

      const expectedTemperatureText = screen.getByText(expectedText);

      expect(expectedTemperatureText).toBeInTheDocument();
    });
  });

  describe("When the user clicks on the button", () => {
    test("Then it should delete the picture", async () => {
      const store = {
        pictureId: {
          ...picturesMock.pictures[0],
        },
      };

      const userId = "1234";

      const expectedButton = "delete icon";

      renderWithProviders(
        <DetailPictureCard userId={userId} picture={store.pictureId} />
      );

      const expectedDeleteButton = screen.getByRole("button", {
        name: expectedButton,
      });

      await userEvent.click(expectedDeleteButton);

      expect(expectedDeleteButton).toBeInTheDocument();
    });
  });
});
