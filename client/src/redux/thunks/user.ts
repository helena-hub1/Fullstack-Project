import axios from "axios";

import { AppDispatch } from "../../redux/store";
import { userAction } from "../slices/user";
// get id from localStorage
// const userData =
//   localStorage.getItem("userDetail") !== null
//     ? JSON.parse(localStorage.getItem("userDetail")!)
//     : null;
// console.log(userData.user, "user");
// const userId = userData.user._id;
// console.log(userId, "userid");
// const token = userData.token;
// const url = `http://localhost:8002/users/${userId}`;
// console.log(token, "token");
// export default function getUserDetail() {
//   return async (dispatch: AppDispatch) => {
//     const response = await axios.get(url, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.data;
//     dispatch(userAction.getUser(data));
//   };
// }
