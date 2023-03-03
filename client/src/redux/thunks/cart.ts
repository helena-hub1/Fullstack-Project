import { cartAction } from "./../slices/cart";
import axios from "axios";

import { AppDispatch } from "./../store";
// get id and token  from localStorage
const userData = JSON.parse(localStorage.getItem("userDetail")!);
// localStorage.getItem("userDetail") !== null
//   ? JSON.parse(localStorage.getItem("userDetail")!)
//   : null;

const userId = userData.userId;
const token = userData.token;
const url = `http://localhost:8002/carts/${userId}`;

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
