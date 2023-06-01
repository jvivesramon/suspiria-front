import {
  initialUserStateMock,
  newUserDataTokenMock,
} from "../../mocks/mocks/userMocks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it is called with a current user data and an action with new user data", () => {
    test("Then it should return the new user data", () => {
      const currentState = initialUserStateMock;

      const newUserState = userReducer(
        currentState,
        loginUserActionCreator(newUserDataTokenMock)
      );

      expect(newUserState).toStrictEqual(newUserDataTokenMock);
    });
  });
});

describe("Given a logoutUser reducer", () => {
  describe("When it is called with an empty action", () => {
    test("Then it should return an empty list of user data", () => {
      const currentState = initialUserStateMock;

      const newUserState = userReducer(currentState, logoutUserActionCreator());

      const expectedNewState = currentState;

      expect(newUserState).toStrictEqual(expectedNewState);
    });
  });
});
