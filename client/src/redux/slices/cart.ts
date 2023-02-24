import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../../../common/cart";
// type
type InitialState = {
  cartList: Cart[];
};
// initial state
const initialState: InitialState = {
  cartList: [],
};
// slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartList: (state, action) => {
      state.cartList = action.payload;
    },
  },
});

export const cartAction = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
