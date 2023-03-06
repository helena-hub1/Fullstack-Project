// product thunk here
import axios from "axios";
import { AppDispatch } from "../store";
import { productSliceAction } from "../slices/product";

const url = "http://localhost:8001/products";

export const getProductList = () => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(url);
    console.log(response);
    const data = await response.data;
    dispatch(productSliceAction.getProductList(data));
  };
};
