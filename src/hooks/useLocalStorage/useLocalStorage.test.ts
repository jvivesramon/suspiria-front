import { renderHook } from "@testing-library/react";
import useLocalStorage from "./useLocalStorage";
import { tokenMock } from "../../mocks/mocks/userMocks";

describe("Given the useLocalStorage function", () => {
  describe("When it is called", () => {
    const { token: value } = tokenMock;
    const key = "token";

    test("Then it should be able to save the token and access to the token from localStorage", () => {
      const {
        result: {
          current: { setToken, getToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);
      const expectedResult = getToken(key);

      expect(expectedResult).toStrictEqual(value);
    });

    test("Then it should call the removeToken function and remove the token from local storage", () => {
      const {
        result: {
          current: { setToken, removeToken },
        },
      } = renderHook(() => useLocalStorage());

      setToken(key, value);
      const removedToken = removeToken(key);

      expect(removedToken).toBe(undefined);
    });
  });
});
