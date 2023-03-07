import React from "react";
import { useSelector } from "react-redux";
import { Button, Card, Link, Typography } from "@mui/material";

import { RootState } from "../../../redux/store";
import WishItem from "../wishItem/WishItem";
import wishcart from "../../../assets/wishcart.png";
import "./WishList.css";
export default function WishList() {
  // state
  const wishList = useSelector((state: RootState) => state.wishList.wishList);

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
      <div className="wish-wrapper">
        {wishList.map((product, id) => (
          <WishItem product={product} key={id} />
        ))}
      </div>
    </div>
  );
}
