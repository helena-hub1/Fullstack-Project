import { createSlice } from "@reduxjs/toolkit";

import Product from "../../../../common/product";
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
    price: "",
    engine: "",
    color: "",
    year: 1,
    quantity: 1,
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
