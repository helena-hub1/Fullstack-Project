import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
// import { getOrderListThunk } from "../../../redux/thunks/orders";

import OrderList from "../orderList/OrderList";

export default function OrderPage() {
  const orderList = useSelector(
    (state: RootState) => state.orderList.orderList
  );
  console.log(orderList, " from orderList");
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch(getOrderListThunk());
  }, [dispatch]);
  return (
    <div className="orderlist-container">
      {orderList.map((product, id) => (
        <OrderList product={product} key={id} />
      ))}
    </div>
  );
}
