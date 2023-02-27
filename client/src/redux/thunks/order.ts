import axios from "axios";
import { AppDispatch } from "../store";
import { orderAction } from "../slices/order";
import Product from "../../../../common/product";
import Cart from "../../../../common/cart";
const userData =
  localStorage.getItem("userDetail") !== null
    ? JSON.parse(localStorage.getItem("userDetail")!)
    : null;
const userId = userData.user._id;

const token = userData.token;
const createOrderUrl = `http://localhost:8000/orders/${userId}`;

// export default function createOrderThunk(
//   productOrder: Cart[],
//   quantity: number,
//   totalPrice: number,
//   street: string,
//   city: string,
//   country: string,
//   postalCode: number,
//   email: string,
//   phoneNumber: number,
//   isDelivered: boolean
// ) {

//   return async (dispatch: AppDispatch) => {
//     try {
//       {
//         const config = {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const { data } = await axios.post(
//           createOrderUrl,
//           {
//             productOrder,
//             street,
//             city,
//             postalCode,
//             country,
//             quantity,
//             totalPrice,
//             isDelivered,
//             phoneNumber,
//             email,
//           },
//           config
//         );
//         dispatch(orderAction.getOrder(data));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
