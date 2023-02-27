import { Rating } from "@mui/material";
import React from "react";

import Product from "../../../../../common/product";
import "./OrderItem.css";
type Prop = {
  product: Product;
};
export default function OrderItem({ product }: Prop) {
  return (
    <div className="order-item">
      <img src={product.image} alt="car" width="150px" height="150px" />
      <p>{product.make}</p>
      <Rating
        name="half-rating-read"
        defaultValue={product.rating}
        size="small"
        precision={0.5}
        readOnly
      />
      <p>${product.price}</p>
    </div>
  );
}
