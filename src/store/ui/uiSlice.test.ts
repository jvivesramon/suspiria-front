import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

export const falseLoadingState = { isLoading: false };
export const trueLoadingState = { isLoading: true };

describe("Given a showLoading reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the new loading state set to true", () => {
      const newExpectedLoadingState = uiReducer(
        falseLoadingState,
        showLoadingActionCreator()
      );

      expect(newExpectedLoadingState).toStrictEqual(trueLoadingState);
    });
  });
});

describe("Given a hideLoading reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the new loading state set to false", () => {
      const newExpectedLoadingState = uiReducer(
        trueLoadingState,
        hideLoadingActionCreator()
      );

      expect(newExpectedLoadingState).toStrictEqual(falseLoadingState);
    });
  });
});
