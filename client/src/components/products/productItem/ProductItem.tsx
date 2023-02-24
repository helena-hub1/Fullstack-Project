import React from "react";
import { Link } from "react-router-dom";

import Product from "../../../../../common/product";
// type
type Prop = {
  product: Product;
};
export default function ProductItem({ product }: Prop) {
  // render
  return (
    <div>
      <Link to={`/products/${product.VIN}`}>
        <img
          src={product.image}
          alt="product"
          height="150px"
          width="250px"
        ></img>
      </Link>
      <p>{product.make}</p>
      <p>{product.price}</p>
      <p>{product.VIN}</p>
    </div>
  );
}
