import { UserStateStructure, UserTokenStructure } from "../../components/types";

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

export const tokenMock = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDYzMjdmNjA5MGE0OWZhYWVlNDRkYjQiLCJuYW1lIjoiSnVkaXQiLCJpYXQiOjE2ODQyNjEwNTQsImV4cCI6MTY4NDQzMzg1NH0.frmwLkTjCzIvfZlbIBN7aAfjKqdjXiQkCuIO4M_blQQ",
};
