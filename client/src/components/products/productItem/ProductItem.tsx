import { Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import Product from "../../../../../common/product";
import "./ProductItem.css";
// type
type Prop = {
  product: Product;
};
export default function ProductItem({ product }: Prop) {
  // render
  return (
    <div className="product-items">
      {/* <div> */}
      <Link to={`/products/${product.VIN}`}>
        <img
          src={product.image}
          alt="product"
          height="150px"
          width="250px"
        ></img>
      </Link>
      <Typography className="pragraph-one">{product.make}</Typography>
      <Rating
        name="half-rating-read"
        defaultValue={product.rating}
        size="small"
        precision={0.5}
        readOnly
      />
      <Typography className="pragraph-two">{product.price}</Typography>
    </div>
  );
}
