import { useSelector } from "react-redux";
import React from "react";

import { RootState } from "../../../redux/store";
import WishItem from "../wishItem/WishItem";
import "./WishList.css";
import { Card, Typography } from "@mui/material";

import wishcart from "../../../assets/wishcart.png";

export default function WishList() {
  const wishList = useSelector((state: RootState) => state.wishList.wishList);
  if (wishList.length === 0) {
    return (
      <Card
        className="empty-wishlist"
        sx={{
          maxWidth: 400,
          height: 300,
          my: 10,
          backgroundColor: "aliceblue",
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
