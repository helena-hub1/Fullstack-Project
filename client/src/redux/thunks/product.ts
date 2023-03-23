import axios from "axios";

import { AppDispatch } from "../store";
import { productSliceAction } from "../slices/product";

const url = "http://localhost:8001/products";

export const getProductList = () => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(url);
    const data = await response.data;
    dispatch(productSliceAction.getProductList(data));
  };
};
