import { IconButton, Rating, TableRow } from "@mui/material";

import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import TableCell from "@mui/material/TableCell";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { ListItem } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";

import Product from "../../../../../common/product";
import "./OrderItem.css";
type Prop = {
  product: Product;
};
const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: grey;
  }
  &:nth-of-type(even) {
    background-color: darkgrey;
  }
`;
export default function OrderItem({ product }: Prop) {
  return (
    <Fragment>
      <StyledTableRow>
        <TableCell align="center">{product.VIN}</TableCell>
        <TableCell align="center">{product.make}</TableCell>
        <TableCell align="center">{product.model}</TableCell>
        <TableCell align="center">{product.quantity}</TableCell>
        <TableCell align="center">{product.price}</TableCell>
        <TableCell align="center">
          <img src={product.image} height="50px" width="70px" alt="flag"></img>
        </TableCell>
      </StyledTableRow>
    </Fragment>
    // <img src={product.image} alt="car" width="150px" height="150px" />
    // <p>{product.make}</p>
    // <Rating
    //   name="half-rating-read"
    //   defaultValue={product.rating}
    //   size="small"
    //   precision={0.5}
    //   readOnly
    // />
    // <p>${product.price}</p>
  );
}
