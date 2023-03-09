import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Card, Divider, Link, Typography } from "@mui/material";

import { RootState } from "../../../redux/store";
import WishItem from "../wishItem/WishItem";
import wishcart from "../../../assets/wishcart.png";
import "./WishList.css";
export default function WishList() {
  // state
  const wishList = useSelector((state: RootState) => state.wishList.wishList);
  let isLoggedInd = useSelector(
    (state: RootState) => state.userDetail.isLoggedind
  );

  if (wishList.length === 0) {
    return (
      <Card
        className="empty-wishlist"
        sx={{
          maxWidth: 400,
          height: 300,
          mt: 10,
          backgroundColor: "#eeeeee",
          mb: 50,
        }}
      >
        <img src={wishcart} height="70px" width="70px"></img>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "25px",
            color: "#002e5c",
          }}
        >
          is empty!
        </Typography>
      </Card>
    );
  }

  return (
    <div className="wish">
      <Typography variant="h4" sx={{ textAlign: "center", mt: 5 }}>
        Wish List
      </Typography>
      <div className="wish-wrapper">
        {wishList.map((product, id) => (
          <WishItem product={product} key={id} />
        ))}
        <Box sx={{ mb: 50 }}></Box>
      </div>
    </div>
  );
}
