import axios from "axios";
import { AppDispatch } from "../store";
import { orderListAction } from "../slices/orderList";

export const getOrderListThunk = () => {
  // get userData from localstorage
  const userData = JSON.parse(localStorage.getItem("userDetail")!);
  const userId = userData.userId;
  const token = userData.token;
  console.log(userId, "userID");
  const getOrdersUrl = `http://localhost:8001/orders/${userId}`;
  console.log(getOrdersUrl, "orderul from thunk");
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
