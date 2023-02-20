import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
export default function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">register</Link>
      <Link to="/wishList">wishlist</Link>
      <Link to="/userInformation">User Information</Link>
      <Link to="/order">order</Link>
    </div>
  );
}
