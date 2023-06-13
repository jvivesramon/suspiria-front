import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FeedbackStateStructure, UiSliceStructure } from "./types";

const uiState: UiSliceStructure = {
  isLoading: false,
  isVisible: false,
  modalState: {
    isError: false,
    modalActionText: "",
    text: "",
  },
  pagination: {
    limit: 6,
    skip: 0,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiState,
  reducers: {
    showLoading: (currentState: UiSliceStructure) => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoading: (currentState: UiSliceStructure) => ({
      ...currentState,
      isLoading: false,
    }),
    showModal: (
      currentState: UiSliceStructure,
      action: PayloadAction<FeedbackStateStructure>
    ) => ({
      ...currentState,
      isVisible: true,
      modalState: { ...action.payload },
    }),
    hideModal: (currentState: UiSliceStructure) => ({
      ...currentState,
      isVisible: false,
      modalState: uiState.modalState,
    }),
    pagination: (
      currentState: UiSliceStructure,
      action: PayloadAction<number>
    ) => ({
      ...currentState,
      pagination: {
        ...currentState.pagination,
        skip: action.payload,
      },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
  pagination: paginationActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
