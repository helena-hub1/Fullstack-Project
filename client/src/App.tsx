import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import WishList from "./components/wishList/WishList";
import Home from "./pages/homePage/Home";
import Order from "./pages/orderPage/Order";
import Products from "./pages/productsPage/Products";
import UserInformationPage from "./pages/userInformationPage/UserInformationPage";
import UserLogOut from "./components/users/userLogOut/UserLogOut";
import SignUp from "./pages/userSignUpPage/SignUp";
import LogOutPage from "./pages/logOutPage/LogOutPage";
import UserSignInPage from "./pages/userSignInPage/UserSignIn";
import UpdatePage from "./pages/updatePage/UpdatePage";
import SuccessMessage from "./components/users/update/successOnUpdate/SuccessMessage";
import UserSignUp from "./components/users/userSignUp/UserSignUp";
import ProductDetail from "./components/products/productDetail/ProductDetail";
import Cart from "./pages/CartPage/Cart";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:VIN" element={<ProductDetail />}></Route>
        <Route path="/signin" element={<UserSignInPage />}></Route>
        <Route path="/signup" element={<UserSignUp />}></Route>
        <Route path="/wishList" element={<WishList />}></Route>
        <Route path="/user" element={<UserInformationPage />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/logout" element={<LogOutPage />}></Route>
        <Route path="/update" element={<UpdatePage />}></Route>
        <Route path="/success" element={<SuccessMessage />}></Route>
        <Route path="/cartList" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
