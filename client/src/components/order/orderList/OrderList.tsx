import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../../../../common/cart";
import Order from "../../../../../common/order";
import Product from "../../../../../common/product";
import { RootState } from "../../../redux/store";
import OrderItem from "../orderItem/OrderItem";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";

import "./OrderList.css";
type Prop = {
  product: Order;
};

export default function OrderList({ product }: Prop) {
  return (
    <div className="order-container">
      <Paper sx={{ width: 300, height: 200 }}>
        <Typography>email: {product.email}</Typography>
        <Typography>{product.shippingAddress.city}</Typography>
        <Typography>{product.shippingAddress.street}</Typography>
        <Typography>{product.shippingAddress.postalCode}</Typography>
        <Typography>{product.shippingAddress.country}</Typography>
      </Paper>
      <TableContainer component={Paper} sx={{ width: 600 }}>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ProductID</TableCell>
              <TableCell align="left">Make</TableCell>
              <TableCell align="left">Model</TableCell>
              <TableCell align="left">Quantity</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {product.productOrder.map((product, id) => (
              <OrderItem key={id} product={product} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography>Total Price:${product.totalPrice}</Typography>
    </div>
  );
}
