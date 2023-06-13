import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { pictureTotalData, picturesMock } from "../../mocks/mocks/picturesMock";
import { renderWithProviders, wrapWithRouter } from "../../testUtils/testUtils";
import DetailPicturePage from "./DetailPicturePage";
import { vi } from "vitest";

describe("Given a DetailPicturePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a picture", () => {
      const expectedTitle = "Girl with Pearl Earring";

      const spyScrollTo = vi.fn();
      Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });

      renderWithProviders(wrapWithRouter(<DetailPicturePage />), {
        picturesStore: {
          ...pictureTotalData,
          pictureId: {
            ...picturesMock.pictures[0],
          },
        },
      });

      const expectedTitleImage = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(expectedTitleImage).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks the 'delete' button", () => {
    test("Then it should show the message beach deleted", async () => {
      const buttonText = "delete icon";

      const spyScrollTo = vi.fn();
      Object.defineProperty(global.window, "scrollTo", { value: spyScrollTo });

      renderWithProviders(wrapWithRouter(<DetailPicturePage />), {
        picturesStore: {
          ...pictureTotalData,
          pictureId: {
            ...picturesMock.pictures[0],
          },
        },
        userStore: { id: "1234", name: "", token: "", isLogged: false },
      });

      const deleteButton = screen.getByRole("button", { name: buttonText });

      await userEvent.click(deleteButton);

      waitFor(() => expect(deleteButton).not.toBeInTheDocument());
    });
  });
});
