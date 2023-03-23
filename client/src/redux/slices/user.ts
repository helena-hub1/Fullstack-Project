// import { orderAction } from "./order";
import { createSlice } from "@reduxjs/toolkit";

import User from "../../../../types/user";

// type
type InitialState = {
  userDetail: User;
  accountValidationMsg: string;
  isLoggedind: boolean;
};
// initial state
const initialState: InitialState = {
  userDetail: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  accountValidationMsg: "",
  isLoggedind: false,
};

// slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.userDetail = action.payload;
    },
    getUserDetail: (state, action) => {
      state.userDetail.firstName = action.payload.firstName;
      state.userDetail.lastName = action.payload.lastName;
      state.userDetail.email = action.payload.email;
      state.userDetail.password = action.payload.password;
      state.isLoggedind = true;
    },
    accountValidationMsg: (state, action) => {
      state.accountValidationMsg = action.payload;
      state.isLoggedind = false;
    },
    userLogout: (state) => {
      state.isLoggedind = false;
    },
    userLogIn: (state) => {
      state.isLoggedind = true;
      localStorage.setItem("userLoggedInd", JSON.stringify(state.isLoggedind));
    },
  },
});
// actions and reducers
export const userAction = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
