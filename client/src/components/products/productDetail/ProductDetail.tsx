import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../../redux/thunks/productDetails";
import { AppDispatch, RootState } from "../../../redux/store";

import "./ProductDetail.css";
import { Box, Button, Rating, Typography } from "@mui/material";
import { cartAction } from "../../../redux/slices/cart";
import { wishAction } from "../../../redux/slices/wish";
import Product from "../../../../../common/product";
export default function ProductDetail() {
  // state
  const productDetails = useSelector(
    (state: RootState) => state.productDetails.productDetails
  );

  //   dispatch
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  // Add to cart

  const addToCartHandler = () => {
    let cartItem = {
      VIN: productDetails.VIN,
      make: productDetails.make,
      rating: productDetails.rating,
      price: productDetails.price,
      image: productDetails.image,
      cartItemQty: 1,
    };
    dispatch(cartAction.addToCart(cartItem));
    navigate("/cartlist");
  };

  // const addToCartHandler = () => {
  //   dispatch(cartAction.addToCart(productDetails));
  //   navigate("/cartlist");
  // };
  // add to wish
  const addToWishHandler = () => {
    dispatch(wishAction.addToWish(productDetails));
    navigate("/wishlist");
  };
  const { VIN } = useParams();
  const url = `http://localhost:8000/products/${VIN}`;
  //   side effect
  useEffect(() => {
    dispatch(getProductDetails(url));
  }, [dispatch]);
  //   render
  return (
    <div className="main-container">
      <div className="detail-container">
        <img
          src={productDetails.image}
          alt="lamborghini"
          width="300px"
          height="200px"
        ></img>
        <div className="product-detail">
          <Typography
            className="car-make"
            sx={{ fontSize: "18px", textAlign: "center" }}
          >
            {productDetails.make}
          </Typography>
          <Typography>
            <Box
              component="span"
              sx={{ fontWeight: "bold", fontSize: "14px", m: 2 }}
            >
              Price:
            </Box>
            {productDetails.price}
          </Typography>
          <Typography component="div">
            <Box
              component="span"
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                m: 2,
              }}
            >
              Description:
            </Box>
            <Typography sx={{ fontSize: "14px" }}>
              {productDetails.description}
            </Typography>
          </Typography>

          <div className="rate-btn">
            <Rating
              name="half-rating-read"
              defaultValue={productDetails.rating}
              size="small"
              precision={0.5}
              readOnly
              sx={{ mt: 2 }}
            />
            <div className="btn-container">
              <Button
                onClick={addToCartHandler}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  width: "180px",
                  borderRadius: 10,
                }}
              >
                Add to cart
              </Button>
              <Button
                onClick={addToWishHandler}
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  width: "180px",
                  borderRadius: 10,
                }}
              >
                Add to Wish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
