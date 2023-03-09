import { Message } from "@mui/icons-material";
import axios from "axios";

import { AppDispatch } from "../../redux/store";
import { userAction } from "../slices/user";

const registerUrl = "http://localhost:8001/users";
// const loginUrl = "http://localhost:8001/users/login";
// register
export default function registerUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        registerUrl,
        { firstName, lastName, email, password },
        config
      );
      console.log(data, "data from register thunk");
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserInformation(url: string) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(url);
    const data = await response.data;
    dispatch(userAction.getUserDetail(data));
  };
}

// login
// export function loginUserThunk(email: string, password: string) {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const response = await axios.post(loginUrl, { email, password }, config);
//       const data = await response.data;
//       console.log(data, "data");

//       // invalid account
//       if (data.message) {
//         dispatch(userAction.accountValidationMsg(data.message));
//         return;
//       }
//       //  set localstorage
//       localStorage.setItem(
//         "userDetail",
//         JSON.stringify({
//           userEmail: data.userEmail,
//           firstName: data.firstName,
//           lastName: data.lastName,
//           userId: data.userId,
//           token: data.token,
//         })
//       );

//       const userData = JSON.parse(localStorage.getItem("userDetail")!);
//       //  const token = userData.token;
//       //  if (token) {
//       dispatch(
//         userAction.getUserDetail({
//           email: data.userEmail,
//           firstName: data.firstName,
//           lastName: data.lastName,
//         })
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }
