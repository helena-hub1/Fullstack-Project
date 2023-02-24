import { createSlice } from "@reduxjs/toolkit";
import Order from "../../../../common/order";
// type
type InitialState = {
  orderList: Order[];
};
// initial state
const initialState: InitialState = {
  orderList: [],
};
// slice
const orderSlice = createSlice({
  name: "Order",
  initialState,
  reducers: {
    getOrderList: (state, action) => {
      state.orderList = action.payload;
    },
  },
});

export const orderAction = orderSlice.actions;
const orderReducer = orderSlice.reducer;
export default orderReducer;
