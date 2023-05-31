import {
  initialUserStateMock,
  newUserDataTokenMock,
  userDataTokenMock,
} from "../../mocks/mocks/userMocks";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a loginUser reducer", () => {
  describe("When it is called with a current user data and an action with new user data", () => {
    test("Then it should return the new user data", () => {
      const currentState = initialUserStateMock;

      const newUserState = userReducer(
        currentState,
        loginUserActionCreator(userDataTokenMock)
      );

      const expectedNewState = newUserDataTokenMock;

      expect(newUserState).toStrictEqual(expectedNewState);
    });
  });
});
