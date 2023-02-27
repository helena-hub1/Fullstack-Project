import { cartAction } from "./../slices/cart";
import axios from "axios";

import { AppDispatch } from "./../store";
// get id and token  from localStorage
const userData =
  localStorage.getItem("userDetail") !== null
    ? JSON.parse(localStorage.getItem("userDetail")!)
    : null;

const userId = userData.user._id;
const token = userData?.token;
const url = `http://localhost:8002/carts/${userId}`;
console.log(userId, "userId");
console.log(token, "token");

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

// Get cart by cart id
// export const getCartByIdThunk = (url: string) => {
//   return async (dispatch: AppDispatch) => {
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.data;
//     dispatch(cartAction.getCartList(data));
//     console.log(data, "data from cart thunk");
//   };
// };
