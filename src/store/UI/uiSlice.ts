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
    hideLoading: () => ({
      isLoading: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
