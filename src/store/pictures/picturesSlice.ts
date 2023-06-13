import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  PictureActionDataStructure,
  PictureCardStructure,
  PictureTotalList,
} from "../../types";
import { emptyPicturesData } from "../../mocks/mocks/picturesMock";

const initialUserState: PictureActionDataStructure = {
  pictures: [],
  totalPictures: 0,
  filterData: "",
  pictureId: emptyPicturesData,
};

const picturesSlice = createSlice({
  name: "pictures",
  initialState: initialUserState,
  reducers: {
    loadPictures: (
      currentState: PictureActionDataStructure,
      action: PayloadAction<PictureTotalList>
    ) => ({
      ...currentState,
      pictures: [...action.payload.pictures],
      totalPictures: action.payload.totalPictures,
    }),
    deletePicture: (
      currentState: PictureActionDataStructure,
      action: PayloadAction<string>
    ) => ({
      ...currentState,
      pictures: currentState.pictures.filter(
        (picture) => picture.id !== action.payload
      ),
    }),
    addPictures: (
      currentState: PictureActionDataStructure,
      action: PayloadAction<PictureCardStructure>
    ) => ({
      ...currentState,
      pictures: [...currentState.pictures, { ...action.payload }],
    }),
    addFilter: (
      currentState: PictureActionDataStructure,
      action: PayloadAction<string>
    ) => ({
      ...currentState,
      filterData: action.payload,
    }),
    loadPictureId: (
      currentState: PictureActionDataStructure,
      action: PayloadAction<PictureCardStructure>
    ) => ({
      ...currentState,
      pictureId: { ...action.payload },
    }),
  },
});

export const {
  loadPictures: loadPicturesActionCreator,
  deletePicture: deletePictureActionCreator,
  addPictures: addPicturesActionCreator,
  addFilter: addFilterActionCreator,
  loadPictureId: loadPictureIdActionCreator,
} = picturesSlice.actions;
export const picturesReducer = picturesSlice.reducer;
