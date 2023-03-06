//  product slice here
import { createSlice } from "@reduxjs/toolkit";

import Product from "../../../../types/product";

// type
type InitialState = {
  productList: Product[];
};
// initialState
const initialState: InitialState = {
  productList: [],
};
// slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getProductList: (state, action) => {
      state.productList = action.payload;
    },
  },
});
export const productSliceAction = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
