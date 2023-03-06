import { createSlice } from "@reduxjs/toolkit";
import Cart from "../../../../types/cart";
import ShippingAddress from "../../../../types/shippingAddress";
import ContactInformation from "../../.../../../../types/contactInformation";
// type
type InitialState = {
  cartList: Cart[];
  shippingAddress: ShippingAddress;
  totalPrice: number;
  contactInformation: ContactInformation;
};
// GET ITEM
const cartItems: Cart[] =
  localStorage.getItem("cartlist") !== null
    ? JSON.parse(localStorage.getItem("cartlist")!)
    : [];
// initial state
const initialState: InitialState = {
  cartList: cartItems,
  shippingAddress: {
    street: "",
    city: "",
    country: "",
    postalCode: 1,
  },
  contactInformation: {
    email: "",
    phoneNumber: 1,
  },
  totalPrice: 1,
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
        state.cartList[index].cartItemQty += 1;
      } else {
        state.cartList.push(action.payload);
        localStorage.setItem(
          "cartlist",
          JSON.stringify(state.cartList.map((item) => item))
        );
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
      localStorage.setItem(
        "cartlist",
        JSON.stringify(state.cartList.map((item) => item))
      );
    },
    // INCREMENT
    incrementQty: (state, action) => {
      const index = state.cartList.findIndex(
        (product) => product.make === action.payload.make
      );
      if (index !== -1) {
        state.cartList[index].cartItemQty += 1;
      }
    },
    // DECREMENT
    decrementQty: (state, action) => {
      const index = state.cartList.findIndex(
        (product) => product.VIN === action.payload.VIN
      );
      if (index !== -1) {
        if (state.cartList[index].cartItemQty > 1) {
          state.cartList[index].cartItemQty -= 1;
        }
      }
    },
    takeQuantity: (state, action) => {
      const index = state.cartList.findIndex(
        (product) => product.VIN === action.payload.VIN
      );
      if (index !== -1) {
        // if (state.cartList[index].cartItemQty > 1) {
        state.cartList[index].cartItemQty = action.payload;
        // }
      }
    },
  },
});

export const cartAction = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;
