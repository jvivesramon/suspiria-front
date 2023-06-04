import { showLoadingActionCreator, uiReducer } from "./UiSlice";

describe("Given a showLoading reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the new loading state", () => {
      const currentState = { isLoading: false };
      const newLoadingState = { isLoading: true };

      const newExpectedLoadingState = uiReducer(
        currentState,
        showLoadingActionCreator()
      );

      expect(newExpectedLoadingState).toStrictEqual(newLoadingState);
    });
  });
});
