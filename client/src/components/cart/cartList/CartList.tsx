import { Typography } from "@mui/material";
import React from "react";

import Cart from "../../../../../common/cart";
import Product from "../../../../../common/product";
import CartItem from "../cartItem/CartItem";
// type
// type
type Prop = {
  cartProduct: Cart;
};
export default function CartList({ cartProduct }: Prop) {
  // console.log(cartProduct, "product from item");
  return (
    <div>
      {cartProduct.productCart.map((cartItem: Product) => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
  );
}
