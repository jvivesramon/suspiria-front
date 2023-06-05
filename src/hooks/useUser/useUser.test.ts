import { renderHook } from "@testing-library/react";
import {
  invalidUserCredentials,
  tokenMock,
  validUserCredentials,
} from "../../mocks/mocks/userMocks";
import useUser from "./useUser";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { wrapperWithProvider } from "../../testUtils/testUtils";

beforeAll(() => {
  server.restoreHandlers();
});

describe("Given a getUserToken function,", () => {
  describe("When it is called,", () => {
    test("Then it should return the token", async () => {
      const { token } = tokenMock;

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapperWithProvider });

      const expectedToken = await getUserToken(validUserCredentials);

      expect(expectedToken).toStrictEqual(token);
    });
  });

  describe("When it receives invalid user credentials", () => {
    test("Then it should return throw 'Wrong credentials' error message", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getUserToken },
        },
      } = renderHook(() => useUser(), { wrapper: wrapperWithProvider });

      const thrownError = getUserToken(invalidUserCredentials);

      expect(thrownError).rejects.toThrowError();
    });
  });
});
