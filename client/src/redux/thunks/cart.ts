import axios from "axios";

import { cartAction } from "./../slices/cart";
import { AppDispatch } from "./../store";

const userData = JSON.parse(localStorage.getItem("userDetail")!);
const userId = userData.userId;
const token = userData.token;
const url = `http://localhost:8001/carts/${userId}`;

export const getCartListThunk = () => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    dispatch(cartAction.getCartList(data));
    console.log(data, "data from cart thunk");
  };
};
