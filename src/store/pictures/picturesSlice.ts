import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PictureCardStructure, PictureTotalList } from "../../types";

const initialUserState: PictureTotalList = {
  pictures: [],
  totalPictures: 0,
};

const picturesSlice = createSlice({
  name: "pictures",
  initialState: initialUserState,
  reducers: {
    loadPictures: (
      _currentState: PictureTotalList,
      action: PayloadAction<PictureTotalList>
    ) => ({
      ...action.payload,
      pictures: [...action.payload.pictures],
    }),
    deletePicture: (
      currentState: PictureTotalList,
      action: PayloadAction<string>
    ) => ({
      ...currentState,
      pictures: currentState.pictures.filter(
        (picture) => picture.id !== action.payload
      ),
    }),
    addPictures: (
      currentState: PictureTotalList,
      action: PayloadAction<PictureCardStructure>
    ) => ({
      ...currentState,
      pictures: [...currentState.pictures, { ...action.payload }],
    }),
  },
});

export const {
  loadPictures: loadPicturesActionCreator,
  deletePicture: deletePictureActionCreator,
  addPictures: addPicturesActionCreator,
} = picturesSlice.actions;
export const picturesReducer = picturesSlice.reducer;
