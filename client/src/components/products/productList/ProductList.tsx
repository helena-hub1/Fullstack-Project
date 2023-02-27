import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductList } from "../../../redux/thunks/product";
import { AppDispatch, RootState } from "../../../redux/store";
import ProductItem from "../productItem/ProductItem";
import "./ProductList.css";

export default function ProductList() {
  // state
  const productList = useSelector(
    (state: RootState) => state.productList.productList
  );
  // dispatch
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);
  console.log(productList);
  return (
    <div className="product-container">
      <div className="product-list">
        {productList.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
