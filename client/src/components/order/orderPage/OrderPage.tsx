import { Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { getOrderListThunk } from "../../../redux/thunks/orders";

import OrderList from "../orderList/OrderList";

export default function OrderPage() {
  // state
  const orderList = useSelector(
    (state: RootState) => state.orderList.orderList
  );
  const isLoggedInd = useSelector(
    (state: RootState) => state.userDetail.isLoggedind
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getOrderListThunk());
  }, [dispatch]);
  // no login
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
            fontStyle: "italic",
          }}
        >
          Access is denied! Please log in first.
        </Typography>
      </Card>
    );
  }

  return (
    <div className="orderlist-container">
      {orderList.map((order, id) => (
        <OrderList order={order} key={id} />
      ))}
    </div>
  );
}
