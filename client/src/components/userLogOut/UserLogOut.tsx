import React from "react";
import { useNavigate } from "react-router-dom";

export default function UserLogOut() {
  // navigate
  const navigate = useNavigate();
  localStorage.removeItem("userDetail");

  return <div>UserLogOut</div>;
}
