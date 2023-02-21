import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
export default function NavBar() {
  const user = localStorage.getItem("userDetail");
  // if (!user) {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
      <Link to="/wishList">wishlist</Link>
      <Link to="/user">User Information</Link>
      <Link to="/order">order</Link>
    </div>
  );
}
// return (
//   <div className="navbar">
//     <Link to="/wishList">wishlist</Link>
//     <Link to="/userInformation">User Information</Link>
//     <Link to="/order">order</Link>
//   </div>
// );
// }
