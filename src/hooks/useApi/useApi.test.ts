import { renderHook } from "@testing-library/react";
import { picturesMock } from "../../mocks/mocks/picturesMock";
import useApi from "./useApi";
import { wrapperWithProvider } from "../../testUtils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import { actionMessage } from "../../utils/feedbackMessages/feedbackMessages";

describe("Given a getPictures function", () => {
  describe("When it is called", () => {
    test("Then it should return a list of pictures", async () => {
      const { pictures } = picturesMock;

      const {
        result: {
          current: { getPictures },
        },
      } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

      const picturesList = await getPictures();

      expect(picturesList).toStrictEqual(pictures);
    });
  });

  describe("When it is called", () => {
    test("Then it should rejects and throw an 'Sorry, we couldn't get the stories' error message", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getPictures },
        },
      } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

      const thrownError = async () => await getPictures();

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

      expect(expectedMessage).toBe(actionMessage.deleted);
    });
  });

  describe("When it is called with an invalid picture id", () => {
    test("Then it should show a modal with the text 'Your new story couldn`t been deleted'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedMessage = "deleted";
      const id = "1";

      const {
        result: {
          current: { deletePicture },
        },
      } = renderHook(() => useApi(), { wrapper: wrapperWithProvider });

      await deletePicture(id);

      expect(expectedMessage).toBe(actionMessage.deleted);
    });
  });
});
