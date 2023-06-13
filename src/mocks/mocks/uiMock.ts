import { UiSliceStructure } from "../../store/ui/types";

export const uiStoreMock: UiSliceStructure = {
  isLoading: false,
  isVisible: false,

  modalState: {
    isError: false,
    modalActionText: "",
    text: "",
  },

  pagination: {
    skip: 0,
    limit: 0,
  },
};
