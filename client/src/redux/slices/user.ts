import { orderAction } from "./order";
import { createSlice } from "@reduxjs/toolkit";

import User from "../../../../common/user";
// type
type InitialState = {
  userDetail: User;
};
// initial state
const initialState: InitialState = {
  userDetail: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
};

// slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.userDetail = action.payload;
    },
    // loginUser: (state, action) => {
    //   state.userDetail = action.payload;
    // },
    getUserDetail: (state, action) => {
      state.userDetail.firstName = action.payload.firstName;
      state.userDetail.lastName = action.payload.lastName;
      state.userDetail.email = action.payload.email;
    },
  },
});
// actions and reducers
export const userAction = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
