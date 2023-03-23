import axios from "axios";

import { AppDispatch } from "../store";
// import { orderAction } from "../slices/order";
import Cart from "../../../../types/cart";

export default function createOrderThunk(
  productOrder: Cart[],
  quantity: number,
  totalPrice: number,
  street: string,
  city: string,
  country: string,
  postalCode: number,
  email: string,
  phoneNumber: number,
  isDelivered: boolean
) {
  const userData = JSON.parse(localStorage.getItem("userDetail")!);
  const userId = userData.userId;
  console.log(userId, "userId");
  const token = userData.token;
  const createOrderUrl = `http://localhost:8001/orders/${userId}`;
  return async (dispatch: AppDispatch) => {
    try {
      {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.post(
          createOrderUrl,
          {
            userId: userId,
            productOrder: productOrder,
            street: street,
            city: city,
            postalCode: postalCode,
            country: country,
            totalPrice: totalPrice,
            quantity: quantity,
            isDelivered: isDelivered,
            email: email,
            phoneNumber: phoneNumber,
          },
          config
        );
        // dispatch(orderAction.getOrder(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
