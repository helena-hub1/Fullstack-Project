import axios from "axios";

import { AppDispatch } from "../../redux/store";
import { userAction } from "../slices/user";

const registerUrl = "http://localhost:8001/users";

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
