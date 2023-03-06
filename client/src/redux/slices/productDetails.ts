import { createSlice } from "@reduxjs/toolkit";

import Product from "../../../../types/product";
// type
type InitialState = {
  productDetails: Product;
};
// initial state
const initialState: InitialState = {
  productDetails: {
    VIN: "",
    make: "",
    model: "",
    image: "",
    fueltype: "",
    category: "",
    condtion: "",
    price: 1,
    engine: "",
    color: "",
    year: 1,
    quantity: 1,
    rating: 1,
    description: "",
  },
};
// slice
const productDetailsSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductDetail: (state, action) => {
      state.productDetails = action.payload;
    },
  },
});
//  actions and reducer
export const productDetailsAction = productDetailsSlice.actions;
const productDetailsReducer = productDetailsSlice.reducer;
export default productDetailsReducer;
