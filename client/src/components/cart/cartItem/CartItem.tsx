import React, { useState } from "react";
import {
  Box,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import DeleteIcon from "@mui/icons-material/Delete";
import Cart from "../../../../../types/cart";
import { cartAction } from "../../../redux/slices/cart";
import "./CartItem.css";

// type
type Prop = {
  product: Cart;
};
export default function CartItem({ product }: Prop) {
  // state
  const [quantity, setQuantity] = useState("");

  // dispatch
  const dispatch = useDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value as string);

    dispatch(cartAction.takeQuantity(quantity));

    // dispatch(cartAction.decrementQty(product));
  };
  const removeCartProductHandler = () => {
    dispatch(cartAction.removeFromCart(product));
  };

  return (
    <div>
      {
        <div>
          <Paper
            sx={{
              height: "250px",
              width: "400px",
              backgroundColor: "aliceblue",
            }}
          >
            <div className="cartitem-container">
              <Box sx={{ mt: 2 }}>
                <img
                  src={product.image}
                  alt="car"
                  height="150px"
                  width="150px"
                />
                <p>{product.make}</p>
                <p>Price:${product.price}</p>
              </Box>
              <div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">
                      Quantity
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={quantity}
                      label="Quantity"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <IconButton onClick={removeCartProductHandler} color="inherit">
                <DeleteIcon />
              </IconButton>
            </div>
          </Paper>
        </div>
      }
    </div>
  );
}
