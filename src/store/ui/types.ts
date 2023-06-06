export interface FeedbackStateStructure {
  text?: string;
  isError: boolean;
  modalActionText?: string;
}

export interface UiSliceStructure {
  isLoading: boolean;
  isVisible: boolean;
  modalState: FeedbackStateStructure;
}
