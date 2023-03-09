import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductList } from "../../../redux/thunks/product";
import { AppDispatch, RootState } from "../../../redux/store";
import ProductItem from "../productItem/ProductItem";
import "./ProductList.css";
import { Box } from "@mui/material";
// type
type Prop = { userInput: string };
export default function ProductList({ userInput }: Prop) {
  // state
  const productList = useSelector(
    (state: RootState) => state.productList.productList
  );
  // dispatch
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  // Search handler
  const filteredProduct = productList.filter((product) =>
    product.make.toLocaleLowerCase().includes(userInput.toLocaleLowerCase())
  );

  return (
    <div className="product-container">
      <div className="product-list">
        {filteredProduct
          ? filteredProduct.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))
          : productList.map((product, index) => (
              <ProductItem key={index} product={product} />
            ))}
      </div>
      <Box sx={{ mb: 30 }}></Box>
    </div>
  );
}
