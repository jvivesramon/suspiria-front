import {
  emptyPicturesMock,
  picturesMock,
} from "../../mocks/mocks/picturesMock";
import { loadPicturesActionCreator, picturesReducer } from "./picturesSlice";

describe("Given a loadPictures reducer", () => {
  describe("When it is called with a current user data and an action with a new pictures list", () => {
    test("Then it should return the new pictures list", () => {
      const currentState = emptyPicturesMock;

      const newPicturesState = picturesReducer(
        currentState,
        loadPicturesActionCreator(picturesMock.pictures)
      );

      expect(newPicturesState).toStrictEqual(picturesMock);
    });
  });
});
