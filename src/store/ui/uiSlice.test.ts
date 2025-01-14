import { uiStoreMock } from "../../mocks/mocks/uiMock";
import { actionMessage } from "../../utils/feedbackMessages/feedbackMessages";
import { feedbackMessages } from "../../utils/feedbackMessages/feedbackMessages";
import {
  hideLoadingActionCreator,
  hideModalActionCreator,
  paginationActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
  uiReducer,
} from "./uiSlice";

export const falseLoadingState = { ...uiStoreMock };
export const trueLoadingState = {
  ...uiStoreMock,
  isLoading: true,
};

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

describe("Given a showModal reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the new modal state set to true", () => {
      const actionPayload = {
        isError: true,
        modalActionText: actionMessage.deleted,
        text: feedbackMessages.errorLoggin,
      };

      const newModalState = {
        ...uiStoreMock,
        isVisible: true,
        modalState: actionPayload,
      };

      const newExpectedModalState = uiReducer(
        falseLoadingState,
        showModalActionCreator(actionPayload)
      );

      expect(newExpectedModalState).toStrictEqual(newModalState);
    });
  });
});

describe("Given a hideModal reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the new modal state set to false", () => {
      const newModalState = {
        ...uiStoreMock,
      };

      const newExpectedModalState = uiReducer(
        falseLoadingState,
        hideModalActionCreator()
      );

      expect(newExpectedModalState).toStrictEqual(newModalState);
    });
  });
});

describe("Given a pagination reducer", () => {
  describe("When it is called", () => {
    test("Then it should return the new pagination state", () => {
      const newPaginationState = {
        ...uiStoreMock,
        pagination: {
          ...uiStoreMock.pagination,
          skip: 2,
        },
      };

      const newExpectedPaginationState = uiReducer(
        uiStoreMock,
        paginationActionCreator(2)
      );

      expect(newExpectedPaginationState).toStrictEqual(newPaginationState);
    });
  });
});
