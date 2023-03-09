import { TableRow, TableCell } from "@mui/material";
import { Fragment } from "react";
import { styled } from "@mui/material/styles";

import "./OrderItem.css";
import Cart from "../../../../../types/cart";

type Prop = {
  product: Cart;
};
const StyledTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: #eeeeee;
  }
  &:nth-of-type(even) {
    background-color: #000;
  }
`;
export default function OrderItem({ product }: Prop) {
  return (
    <Fragment>
      <StyledTableRow>
        <TableCell align="center">{product.VIN}</TableCell>
        <TableCell align="center">{product.make}</TableCell>
        <TableCell align="center">{product.cartItemQty}</TableCell>
        <TableCell align="center">{product.price}</TableCell>
        <TableCell align="center">
          <img src={product.image} height="50px" width="70px" alt="flag"></img>
        </TableCell>
      </StyledTableRow>
    </Fragment>
  );
}
