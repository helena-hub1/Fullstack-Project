import { createSlice } from "@reduxjs/toolkit";
import Product from "../../../../common/product";

// type
type InitialState = {
  wishList: Product[];
};

const initialState: InitialState = {
  wishList: [],
};
// slice
const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    getWishList: (state, action) => {
      state.wishList = action.payload;
    },
    addToWish: (state, action) => {
      const index = state.wishList.findIndex(
        (wishItem) => wishItem.VIN === action.payload.VIN
      );
      if (index !== -1) {
        return;
      } else {
        state.wishList.push(action.payload);
      }
    },
    removeFromWish: (state, action) => {
      const isExists = state.wishList.some(
        (wishItem) => wishItem.VIN === action.payload.VIN
      );
      if (!isExists) {
        return;
      }
      const filteredWishList = state.wishList.filter(
        (product) => product.VIN != action.payload.VIN
      );
      state.wishList = filteredWishList;
    },
  },
});

export const wishAction = wishSlice.actions;
const wishReducer = wishSlice.reducer;
export default wishReducer;
