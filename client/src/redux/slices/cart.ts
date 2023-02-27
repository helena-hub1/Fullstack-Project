import { createSlice } from "@reduxjs/toolkit";
import Product from "../../../../common/product";
import Cart from "../../../../common/cart";
// type
type InitialState = {
  cartList: Product[];
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
    addToCart: (state, action) => {
      const index = state.cartList.findIndex(
        (cartItem) => cartItem.VIN === action.payload.VIN
      );
      if (index !== -1) {
        state.cartList[index].quantity += 1;
      } else {
        state.cartList.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const isInCart = state.cartList.some(
        (cartItem) => cartItem.VIN === action.payload.VIN
      );
      if (!isInCart) {
        return;
      }
      const filteredCartList = state.cartList.filter(
        (product) => product.VIN != action.payload.VIN
      );
      state.cartList = filteredCartList;
    },
    // INCREMENT
    incrementQty: (state, action) => {
      const index = state.cartList.findIndex(
        (product) => product.make === action.payload.make
      );
      if (index !== -1) {
        state.cartList[index].quantity += 1;
      }
    },
    // DECREMENT
    decrementQty: (state, action) => {
      const index = state.cartList.findIndex(
        (product) => product.VIN === action.payload.VIN
      );
      if (index !== -1) {
        if (state.cartList[index].quantity > 1) {
          state.cartList[index].quantity -= 1;
        }
      }
    },
  },
});

export const cartAction = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
