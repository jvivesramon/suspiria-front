import {
  emptyPicturesMock,
  picturesMock,
} from "../../mocks/mocks/picturesMock";
import {
  deletePictureActionCreator,
  loadPicturesActionCreator,
  picturesReducer,
} from "./picturesSlice";

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

describe("Given a deletePicture reducer", () => {
  describe("When it is called with a current user data and an action with an id", () => {
    test("Then it should return the new pictures list without the picture with the passed id", () => {
      const currentState = picturesMock;
      const newStatePictureDeleted = { ...picturesMock, pictures: [] };

      const newPicturesState = picturesReducer(
        currentState,
        deletePictureActionCreator(currentState.pictures[0].id)
      );

      expect(newPicturesState).toStrictEqual(newStatePictureDeleted);
    });
  });
});
