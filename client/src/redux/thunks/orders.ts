import axios from "axios";
import { AppDispatch } from "../store";
import { orderListAction } from "../slices/orderList";

// get userData from localstorage
const userData =
  localStorage.getItem("userDetail") !== null
    ? JSON.parse(localStorage.getItem("userDetail")!)
    : null;
const userId = userData._id;
const token = userData.token;
const getOrdersUrl = `http://localhost:8002/orders/${userId}`;

export const getOrderListThunk = () => {
  if (!userData) {
    console.log("No user data found");
    return;
  }
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(getOrdersUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.data;
    dispatch(orderListAction.getOrderList(data));
    console.log(data, "data from orders thunk");
  };
};
