import { renderHook } from "@testing-library/react";
import { picturesMock } from "../../mocks/mocks/picturesMock";
import useApi from "./useApi";
import { wrapperWithProvider } from "../../testUtils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

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
