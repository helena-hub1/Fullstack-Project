import axios from "axios";
import { AppDispatch } from "../store";
import { orderAction } from "../slices/order";
const userData =
  localStorage.getItem("userDetail") !== null
    ? JSON.parse(localStorage.getItem("userDetail")!)
    : null;
// const userId = userData.user._id;

const token = userData.token;
const url = `http://localhost:8002/orders/63f092c5e0cae816ba3ba58a`;
// console.log(url, "url from order thunk");
// console.log(userId, "userId");
// console.log(token, "token");

export const getOrderList = () => {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    const data = await response.data;
    dispatch(orderAction.getOrderList(data));
  };
};
