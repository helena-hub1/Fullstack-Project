import { createSlice } from "@reduxjs/toolkit";
import Order from "../../../../common/order";
import Product from "../../../../common/product";
// type
type InitialState = {
  order: {};
};
// initial state
const initialState: InitialState = {
  order: {
    productOrder: [],
    shippingAddress: {
      street: "",
      city: "",
      country: "",
      postalCode: 1,
    },
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
