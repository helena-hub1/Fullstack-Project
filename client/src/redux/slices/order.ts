import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../../../common/cart";
// type
type InitialState = {
  order: {};
};
// initial state
const initialState: InitialState = {
  order: {
    productCart: [],
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
