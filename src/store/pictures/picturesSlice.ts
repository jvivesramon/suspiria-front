import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PictureCardStructure, PicturesListStructure } from "../../types";

const initialUserState: PicturesListStructure = {
  pictures: [],
};

const picturesSlice = createSlice({
  name: "pictures",
  initialState: initialUserState,
  reducers: {
    loadPictures: (
      currentState: PicturesListStructure,
      action: PayloadAction<PictureCardStructure[]>
    ) => ({
      ...currentState,
      pictures: [...action.payload],
    }),
    deletePicture: (
      currentState: PicturesListStructure,
      action: PayloadAction<string>
    ) => ({
      ...currentState,
      pictures: currentState.pictures.filter(
        (picture) => picture.id !== action.payload
      ),
    }),
  },
});

export const {
  loadPictures: loadPicturesActionCreator,
  deletePicture: deletePictureActionCreator,
} = picturesSlice.actions;
export const picturesReducer = picturesSlice.reducer;
