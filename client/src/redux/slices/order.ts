import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../../../types/cart";
// type
type InitialState = {
  order: {
    productOrder: Cart[];

    street: string;
    city: string;
    country: string;
    postalCode: number;

    quantity: number;
    totalPrice: number;
    email: string;
    phoneNumber: number;
    isDelivered: false;
  };
};
// initial state
const initialState: InitialState = {
  order: {
    productOrder: [],
    street: "",
    city: "",
    country: "",
    postalCode: 1,

    quantity: 1,
    totalPrice: 1,
    email: "",
    phoneNumber: 1,
    isDelivered: false,
  },
};
// slice
const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    getOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const orderAction = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
