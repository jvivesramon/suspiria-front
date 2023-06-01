import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserDataStructure, UserTokenStructure } from "../../components/types";

const initialUserState: UserDataStructure = {
  id: "",
  name: "",
  token: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      _currentState: UserDataStructure,
      action: PayloadAction<UserTokenStructure>
    ) => ({
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (): UserDataStructure => ({
      ...initialUserState,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
