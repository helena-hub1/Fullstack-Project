import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../../redux/thunks/productDetails";
import { AppDispatch, RootState } from "../../../redux/store";

export default function ProductDetail() {
  // state
  const productDetails = useSelector(
    (state: RootState) => state.productDetails.productDetails
  );
  //   dispatch
  const dispatch = useDispatch<AppDispatch>();
  const { VIN } = useParams();
  const url = `http://localhost:8000/products/${VIN}`;
  //   side effect
  useEffect(() => {
    dispatch(getProductDetails(url));
  }, [dispatch]);
  //   render
  console.log(productDetails);
  return <div>{productDetails.model}</div>;
}
