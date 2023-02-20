import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import ProductDetail from "./components/products/productDetail/ProductDetail";
import WishList from "./components/wishList/WishList";
import HomePage from "./pages/homePage/HomePage";
import Order from "./pages/orderPage/Order";
import Products from "./pages/productsPage/Products";
import UserInformation from "./pages/userInformationPage/UserInformation";
import UserLogInPage from "./pages/userLogInPage/UserLogInPage";
import Register from "./pages/userRegisterPage/Register";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/login" element={<UserLogInPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/wishList" element={<WishList />}></Route>
        <Route path="/userInformation" element={<UserInformation />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
    </div>
  );
}

export default App;
