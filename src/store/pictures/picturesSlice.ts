import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PictureCardStructure, PicturesListStructure } from "../../types";

const initialUserState: PicturesListStructure = {
  pictures: [],
};

const userSlice = createSlice({
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
  },
});

export const { loadPictures: loadPicturesActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
