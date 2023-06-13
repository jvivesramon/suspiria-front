import {
  emptyPicturesMock,
  initialPictureIdState,
  pictureDeletedOne,
  pictureTotalData,
} from "../../mocks/mocks/picturesMock";
import {
  addFilterActionCreator,
  addPicturesActionCreator,
  deletePictureActionCreator,
  loadPictureIdActionCreator,
  loadPicturesActionCreator,
  picturesReducer,
} from "./picturesSlice";

describe("Given a loadPictures reducer", () => {
  describe("When it is called with a current picture data and an action with a new pictures list", () => {
    test("Then it should return the new pictures list", () => {
      const currentState = emptyPicturesMock;

      const newPicturesState = picturesReducer(
        currentState,
        loadPicturesActionCreator(pictureTotalData)
      );

      expect(newPicturesState).toStrictEqual(pictureTotalData);
    });
  });
});

describe("Given a deletePicture reducer", () => {
  describe("When it is called with a current picture data and an action with an id", () => {
    test("Then it should return the new pictures list without the picture with the passed id", () => {
      const currentState = pictureTotalData;
      const newStatePictureDeleted = {
        ...pictureTotalData,
        pictures: pictureDeletedOne,
      };

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
      const currentState = pictureTotalData;
      const newStatePictureAdded = {
        ...pictureTotalData,
        pictures: [
          ...currentState.pictures,
          { ...pictureTotalData.pictures[0] },
        ],
      };

      const newPicturesState = picturesReducer(
        currentState,
        addPicturesActionCreator(pictureTotalData.pictures[0])
      );

      expect(newPicturesState).toStrictEqual(newStatePictureAdded);
      expect(newPicturesState.pictures).toHaveLength(
        newPicturesState.pictures.length
      );
    });
  });
});

describe("Given an addFilter reducer", () => {
  describe("When it is called with a 'warm' key word", () => {
    test("Then it should return the 'warm' word as the value of filterData", () => {
      const currentState = pictureTotalData;
      const newFilterState = {
        ...pictureTotalData,
        filterData: "warm",
      };

      const newPicturesState = picturesReducer(
        currentState,
        addFilterActionCreator("warm")
      );

      expect(newPicturesState).toStrictEqual(newFilterState);
    });
  });
});

describe("Given an loadPictureId reducer", () => {
  describe("When it is called with a picture", () => {
    test("Then it should return the picture", () => {
      const currentState = pictureTotalData;
      const newPictureIdState = {
        ...pictureTotalData,
        pictureId: initialPictureIdState,
      };

      const newPicturesState = picturesReducer(
        currentState,
        loadPictureIdActionCreator(initialPictureIdState)
      );

      expect(newPicturesState).toStrictEqual(newPictureIdState);
    });
  });
});
