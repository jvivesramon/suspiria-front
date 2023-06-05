import { UiSliceStructure } from "../../store/ui/uiSlice";

export const uiStoreMock: UiSliceStructure = {
  isLoading: false,
  isVisible: false,
  state: {
    isError: false,
    modalActionText: "",
    text: "",
  },
};
