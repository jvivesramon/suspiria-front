import {
  emptyPicturesMock,
  picturesMock,
} from "../../mocks/mocks/picturesMock";
import {
  addPicturesActionCreator,
  deletePictureActionCreator,
  loadPicturesActionCreator,
  picturesReducer,
} from "./picturesSlice";

describe("Given a loadPictures reducer", () => {
  describe("When it is called with a current picture data and an action with a new pictures list", () => {
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
  describe("When it is called with a current picture data and an action with an id", () => {
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

describe("Given an addPicture reducer", () => {
  describe("When it is called with a current picture data and with a new picture", () => {
    test("Then it should return the current picture list with the new one included", () => {
      const currentState = picturesMock;
      const newStatePictureAdded = {
        ...picturesMock,
        pictures: [...currentState.pictures, { ...picturesMock.pictures[0] }],
      };

      const newPicturesState = picturesReducer(
        currentState,
        addPicturesActionCreator(picturesMock.pictures[0])
      );

      expect(newPicturesState).toStrictEqual(newStatePictureAdded);
      expect(newPicturesState.pictures).toHaveLength(2);
    });
  });
});
