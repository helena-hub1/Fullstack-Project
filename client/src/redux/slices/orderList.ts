import { createSlice } from "@reduxjs/toolkit";
import Order from "../../../../types/order";
// type
type InitialState = {
  orderList: Order[];
};
// initial state
const initialState: InitialState = {
  orderList: [],
};
// slice
const orderListSlice = createSlice({
  name: "orderList",
  initialState,
  reducers: {
    getOrderList: (state, action) => {
      state.orderList = action.payload;
    },
  },
});

export const orderListAction = orderListSlice.actions;
const orderListReducer = orderListSlice.reducer;
export default orderListReducer;
