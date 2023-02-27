import axios from "axios";
import { cartAction } from "../slices/cart";
import { AppDispatch } from "../store";

const userData =
  localStorage.getItem("userDetail") !== null
    ? JSON.parse(localStorage.getItem("userDetail")!)
    : null;
const userId = userData.user._id;

const token = userData.token;
export const getCartDetailThunk = (url: string) => {
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
