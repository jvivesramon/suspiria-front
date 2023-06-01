import { tokenMock, userDataTokenMock } from "../../mocks/mocks/userMocks";
import useToken from "./useToken";

describe("Given a useToken function", () => {
  describe("When it receives a token", () => {
    test("Then it should call the getTokenData and return the decode token", () => {
      const { token } = tokenMock;
      const decodeToken = userDataTokenMock;

      const { getTokenUserData } = useToken();

      const expectedToken = getTokenUserData(token);

      expect(expectedToken).toStrictEqual(decodeToken);
    });
  });
});
