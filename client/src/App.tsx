import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/navBar/NavBar";
import WishList from "./components/wishList/wishList/WishList";
import Home from "./pages/homePage/Home";
import Order from "./pages/orderPage/Order";
import Products from "./pages/productsPage/Products";
import UserInformationPage from "./pages/userInformationPage/UserInformationPage";
import LogOutPage from "./pages/logOutPage/LogOutPage";
import UserSignInPage from "./pages/userSignInPage/UserSignIn";
import UpdatePage from "./pages/updatePage/UpdatePage";
import SuccessMessage from "./components/users/update/successOnUpdate/SuccessMessage";
import ProductDetail from "./components/products/productDetail/ProductDetail";
import Cart from "./pages/CartPage/Cart";
import Footer from "./components/footer/Footer";
import OrderForm from "./components/order/orderForm/OrderForm";
import SuccessOnSignUp from "./components/users/userSignUp/successOnSignUp/SuccessOnSignUp";
import UserSignUpForm from "./components/users/userSignUp/userSignUp/UserSignUpForm";
function App() {
  // state
  const [userInput, setUserInput] = useState<string>("");

  return (
    <div>
      <NavBar setUserInput={setUserInput} />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route
          path="/products"
          element={<Products userInput={userInput} />}
        ></Route>
        <Route path="/products/:VIN" element={<ProductDetail />}></Route>
        <Route path="/signin" element={<UserSignInPage />}></Route>
        <Route path="/signup" element={<UserSignUpForm />}></Route>
        <Route path="/wishList" element={<WishList />}></Route>
        <Route path="/user" element={<UserInformationPage />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/logout" element={<LogOutPage />}></Route>
        <Route path="/update" element={<UpdatePage />}></Route>
        <Route path="/success" element={<SuccessMessage />}></Route>
        <Route path="/cartlist" element={<Cart />}></Route>
        <Route path="/orderschema" element={<OrderForm />}></Route>
        <Route path="/welcome" element={<SuccessOnSignUp />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
