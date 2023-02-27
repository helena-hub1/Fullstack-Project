import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../../../../common/cart";
import Order from "../../../../../common/order";
import Product from "../../../../../common/product";
import { RootState } from "../../../redux/store";
import OrderItem from "../orderItem/OrderItem";

import "./OrderList.css";
type Prop = {
  product: Order;
};
export default function OrderList({ product }: Prop) {
  return (
    <div className="order-container">
      {product.productOrder.map((product, id) => (
        <OrderItem product={product} key={id} />
      ))}
    </div>
  );
}
