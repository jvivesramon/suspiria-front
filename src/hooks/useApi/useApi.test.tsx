import { renderHook, screen } from "@testing-library/react";
import {
  addPictureMock,
  pictureTotalData,
  picturesMock,
} from "../../mocks/mocks/picturesMock";
import useApi from "./useApi";
import {
  renderWithProviders,
  wrapperWithProvider,
} from "../../testUtils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import Layout from "../../components/Layout/Layout";

describe("Given a getPictures function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of pictures", async () => {
      const pictures = pictureTotalData;
      const skip = 3;

      const {
        result: {
          current: { getPictures },
        },
      } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

      const picturesList = await getPictures(skip);

      expect(picturesList).toStrictEqual(pictures);
    });
  });

  describe("When it is called", () => {
    test("Then it should rejects and throw an 'Sorry, we couldn't get the stories' error message", () => {
      server.resetHandlers(...errorHandlers);

      const skip = 1;

      const {
        result: {
          current: { getPictures },
        },
      } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

      const thrownError = async () => await getPictures(skip);

      expect(thrownError).rejects.toThrowError();
    });
  });
});

describe("Given a deletePicture function", () => {
  describe("When it is called with a valid picture id", () => {
    test("Then it should show a modal with the text 'Your new story has been succesfully deleted'", async () => {
      server.resetHandlers(...handlers);

      const expectedMessage = "deleted";
      const id = "1";

      const {
        result: {
          current: { deletePicture },
        },
      } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

      await deletePicture(id);

      renderWithProviders(<Layout />);

      const expectedModal = screen.getByText(expectedMessage);

      expect(expectedModal).toBeInTheDocument();
    });
  });

  describe("When it is called with an invalid picture id", () => {
    test("Then it should show a modal with the text 'Your new story couldn`t been deleted'", async () => {
      server.resetHandlers(...errorHandlers);

      const id = "1";

      const {
        result: {
          current: { deletePicture },
        },
      } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

      const expectedReject = await deletePicture(id);

      expect(expectedReject).toBeFalsy();
    });
  });
});

describe("Given an addPicture function", () => {
  describe("When it is called with a valid picture", () => {
    test("Then it should return the new picture", async () => {
      server.resetHandlers(...handlers);

      const {
        result: {
          current: { addPicture },
        },
      } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

      const expectedPicture = await addPicture({ ...addPictureMock });

      expect(expectedPicture).toStrictEqual({
        picture: picturesMock.pictures[0],
      });
    });

    describe("When it is called with an invalid picture", () => {
      test("Then it should a modal with the message error 'Your story couldn't been created'", async () => {
        server.resetHandlers(...errorHandlers);

        const {
          result: {
            current: { addPicture },
          },
        } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

        const thrownError = async () => await addPicture({ ...addPictureMock });

        expect(thrownError).rejects.toThrowError();
      });
    });
  });
});
