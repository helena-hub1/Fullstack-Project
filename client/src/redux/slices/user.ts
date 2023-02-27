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
    // gender: "",
    // name: "",
    // email: "",
    // image: "",
    // password: "",
    // city: "",
    // state: "",
    // country: "",
    // postcode: "",
    // age: 1,
    // martialStatus: "",
    // SSN: "",
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
    loginUser: (state, action) => {
      state.userDetail = action.payload;
    },
    getUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});
// actions and reducers
export const userAction = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
