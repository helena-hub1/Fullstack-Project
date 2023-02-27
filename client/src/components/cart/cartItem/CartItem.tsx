import React, { useState } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Cart from "../../../../../common/cart";
import Product from "../../../../../common/product";
import "./CartItem.css";
import productDetail from "../../../pages/productDetailsPage/productDetail";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../redux/slices/cart";

// type
type Prop = {
  product: Product;
};
export default function CartItem({ product }: Prop) {
  const [quantity, setQuantity] = useState("");
  // dispatch
  const dispatch = useDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value as string);

    dispatch(cartAction.incrementQty(product));

    // dispatch(cartAction.decrementQty(product));
  };
  const removeCartProductHandler = () => {
    dispatch(cartAction.removeFromCart(product));
  };
  // console.log(cartItem, "product from item");
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
              <IconButton onClick={removeCartProductHandler}>
                <DeleteOutlineIcon />
              </IconButton>
            </div>
          </Paper>
        </div>
      }
    </div>
  );
}
