import { UserStateStructure, UserTokenStructure } from "../components/types";

export const initialUserStateMock: UserStateStructure = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

export const userDataTokenMock: UserTokenStructure = {
  id: "12345",
  username: "admin",
  token: "token",
};

export const newUserDataTokenMock: UserStateStructure = {
  id: "12345",
  username: "admin",
  token: "token",
  isLogged: true,
};
