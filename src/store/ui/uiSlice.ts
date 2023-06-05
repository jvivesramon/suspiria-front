import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FeedbackStateStructure {
  text?: string;
  isError: boolean;
  modalActionText?: string;
}

export interface UiSliceStructure {
  isLoading: boolean;
  isVisible: boolean;
  state: FeedbackStateStructure;
}

const uiState: UiSliceStructure = {
  isLoading: false,
  isVisible: false,
  state: {
    isError: false,
    modalActionText: "",
    text: "",
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
      state: { ...action.payload },
    }),
    hideModal: (currentState: UiSliceStructure) => ({
      ...currentState,
      isVisible: false,
      state: uiState.state,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
