export interface FeedbackStateStructure {
  text?: string;
  isError: boolean;
  modalActionText?: string;
}

export interface PaginationDataStructure {
  skip: number;
  limit: number;
}

export interface UiSliceStructure {
  isLoading: boolean;
  isVisible: boolean;
  modalState: FeedbackStateStructure;
  pagination: PaginationDataStructure;
}
