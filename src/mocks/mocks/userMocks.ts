import { DecodedUserDataStructure } from "../../components/types";
import { UserCredentials, UserDataStructure } from "../../components/types";

export const initialUserStateMock: UserDataStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

export const userStateMock: UserDataStructure = {
  id: "1234",
  name: "Judit",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDYzMjdmNjA5MGE0OWZhYWVlNDRkYjQiLCJuYW1lIjoiSnVkaXQifQ.vwJN4mocEuK6u4SDT-Ydga4eZVRKkpPmo-W6pq7KW6k",
  isLogged: true,
};

export const userDataTokenMock: DecodedUserDataStructure = {
  id: "646327f6090a49faaee44db4",
  name: "Judit",
};

export const tokenMock = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDYzMjdmNjA5MGE0OWZhYWVlNDRkYjQiLCJuYW1lIjoiSnVkaXQifQ.vwJN4mocEuK6u4SDT-Ydga4eZVRKkpPmo-W6pq7KW6k",
};

export const newUserDataTokenMock: UserDataStructure = {
  ...userDataTokenMock,
  ...tokenMock,
  isLogged: true,
};

export const userData: UserCredentials = {
  username: "Judit",
  password: "Judit",
};
