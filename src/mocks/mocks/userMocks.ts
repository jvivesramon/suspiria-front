import {
  UserCredentials,
  UserStateStructure,
  UserTokenStructure,
} from "../../components/types";

export const initialUserStateMock: UserStateStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

export const userDataTokenMock: UserTokenStructure = {
  id: "646327f6090a49faaee44db4",
  name: "Judit",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDYzMjdmNjA5MGE0OWZhYWVlNDRkYjQiLCJuYW1lIjoiSnVkaXQifQ.vwJN4mocEuK6u4SDT-Ydga4eZVRKkpPmo-W6pq7KW6k",
};

export const newUserDataTokenMock: UserStateStructure = {
  ...userDataTokenMock,
  isLogged: true,
};

export const userData: UserCredentials = {
  username: "Judit",
  password: "Judit",
};

export const tokenMock = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDYzMjdmNjA5MGE0OWZhYWVlNDRkYjQiLCJuYW1lIjoiSnVkaXQifQ.vwJN4mocEuK6u4SDT-Ydga4eZVRKkpPmo-W6pq7KW6k",
};
