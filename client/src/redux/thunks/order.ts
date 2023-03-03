import axios from "axios";
import { AppDispatch } from "../store";
import { orderAction } from "../slices/order";
import Product from "../../../../common/product";
import Cart from "../../../../common/cart";

const userData = JSON.parse(localStorage.getItem("userDetail")!);
const userId = userData.userId;
const token = userData.token;
const createOrderUrl = `http://localhost:8002/orders/${userId}`;

export default function createOrderThunk(
  userId: string,
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
            userId,
            productOrder,
            street,
            city,
            postalCode,
            country,
            totalPrice,
            quantity,
            isDelivered,
            email,
            phoneNumber,
          },
          config
        );
        dispatch(orderAction.getOrder(data));
      }
    } catch (error) {
      console.log(error);
    }
  };
}
