import { createSlice } from "@reduxjs/toolkit";

interface UiSliceStructure {
  isLoading: boolean;
}

const uiState: UiSliceStructure = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    showLoading: () => ({
      isLoading: true,
    }),
  },
});

export const { showLoading: showLoadingActionCreator } = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
