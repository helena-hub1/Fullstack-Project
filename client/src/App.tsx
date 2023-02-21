import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import WishList from "./components/wishList/WishList";
import HomePage from "./pages/homePage/HomePage";
import Order from "./pages/orderPage/Order";
import Products from "./pages/productsPage/Products";
import UserInformationPage from "./pages/userInformationPage/UserInformationPage";
import UserLogOut from "./components/userLogOut/UserLogOut";
import Register from "./pages/userRegisterPage/Register";
import LogOutPage from "./pages/logOutPage/LogOutPage";
import UserLogInPage from "./pages/userLogInPage/UserLogInPage";
import UpdatePage from "./pages/updatePage/UpdatePage";
import SuccessMessage from "./components/users/update/successOnUpdate/SuccessMessage";
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
        <Route path="/user" element={<UserInformationPage />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/logout" element={<LogOutPage />}></Route>
        <Route path="/update" element={<UpdatePage />}></Route>
        <Route path="/success" element={<SuccessMessage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
