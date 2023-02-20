// store here
import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/product";
import productDetailReducer from "./slices/productDetails";

// store
const store = configureStore({
  reducer: {
    productList: productReducer,
    productDetails: productDetailReducer,
  },
});
// type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
