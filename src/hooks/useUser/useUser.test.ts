import { renderHook } from "@testing-library/react";
import { tokenMock, userData } from "../../mocks/mocks/userMocks";
import useUser from "./useUser";

describe("Given a getUserToken function,", () => {
  describe("When it is called,", () => {
    test("Then it should return the token", async () => {
      const { token } = tokenMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser());

      const expectedToken = await getUserToken(userData);

      expect(expectedToken).toStrictEqual(token);
    });
  });
});
