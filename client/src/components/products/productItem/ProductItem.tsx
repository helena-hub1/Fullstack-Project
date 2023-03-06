import { Rating, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Product from "../../../../../types/product";
import "./ProductItem.css";
// type
type Prop = {
  product: Product;
};
export default function ProductItem({ product }: Prop) {
  // render
  return (
    <div className="product-items">
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
      <Typography className="pragraph-two" sx={{ mb: 10 }}>
        ${product.price}
      </Typography>
    </div>
  );
}
