import axios from "axios";

import { productDetailsAction } from "./../slices/productDetails";
import { AppDispatch } from "./../store";

export const getProductDetails = (url: string) => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(url);
    const data = await response.data;
    dispatch(productDetailsAction.getProductDetail(data));
  };
};
