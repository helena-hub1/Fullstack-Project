import { useSelector } from "react-redux";
import React from "react";

import { RootState } from "../../../redux/store";
import WishItem from "../wishItem/WishItem";
import "./WishList.css";
import { Card, Typography } from "@mui/material";

import wishcart from "../../../assets/wishcart.png";

export default function WishList() {
  // state
  const wishList = useSelector((state: RootState) => state.wishList.wishList);
  const isLoggedInd = useSelector(
    (state: RootState) => state.userDetail.isLoggedind
  );
  if (!isLoggedInd) {
    return (
      <Card
        className="order-login"
        sx={{
          width: 600,
          height: 100,
          my: 10,
          backgroundColor: "aliceblue",
          mb: 50,
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "20px",
          }}
        >
          Access is denied! Please log in first.
        </Typography>
      </Card>
    );
  }

  if (wishList.length === 0) {
    return (
      <Card
        className="empty-wishlist"
        sx={{
          maxWidth: 400,
          height: 300,
          mt: 10,
          backgroundColor: "aliceblue",
          mb: 50,
        }}
      >
        <img src={wishcart} height="150px" width="150px"></img>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          is empty!
        </Typography>
      </Card>
    );
  }
  return (
    <div className="wish-container">
      {wishList.map((product, id) => (
        <WishItem product={product} key={id} />
      ))}
    </div>
  );
}
