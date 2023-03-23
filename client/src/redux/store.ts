import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";
import productDetailReducer from "./slices/productDetails";
import cartReducer from "./slices/cart";
import userReducer from "./slices/user";
import orderListReducer from "./slices/orderList";
import wishReducer from "./slices/wish";
// store
const store = configureStore({
  reducer: {
    productList: productReducer,
    productDetails: productDetailReducer,
    userDetail: userReducer,
    cartList: cartReducer,
    orderList: orderListReducer,
    wishList: wishReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
