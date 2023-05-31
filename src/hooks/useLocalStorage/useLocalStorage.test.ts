import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { tokenMock } from "../../mocks/mocks/userMocks";

describe("Given the useLocalStorage function", () => {
  describe("When it is called", () => {
    test("Then it should be able to save the token and access to the token from localStorage", () => {
      const key = "token";
      const { token: value } = tokenMock;

      const {
        result: {
          current: { setToken, getToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);
      const expectedResult = getToken(key);

      expect(expectedResult).toStrictEqual(value);
    });
  });
});
