import axios from "axios";

import { AppDispatch } from "../../redux/store";
import { userAction } from "../slices/user";

const registerUrl = "http://localhost:8002/users/";
const loginUrl = "http://localhost:8002/users/login";

export default function registerUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  return async (dispatch: AppDispatch) => {
    try {
      {
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
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function loginUserThunk(email: string, password: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(loginUrl, { email, password }, config);

      const data = await response.data;
      localStorage.setItem(
        "userDetail",
        JSON.stringify({
          email: data.user.email,
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          token: data.token,
        })
      );
      dispatch(userAction.getUserDetail(data.user));
      console.log(data.user, "from user thunk");
    } catch (error) {
      console.log(error);
    }
  };
}
