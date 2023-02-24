import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import Cart from "../../../../../common/cart";
import Product from "../../../../../common/product";
import "./CartItem.css";

// type
type Prop = {
  cartItem: Product;
};
export default function CartItem({ cartItem }: Prop) {
  const [quantity, setQuantity] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setQuantity(event.target.value as string);
  };
  // console.log(cartItem, "product from item");
  return (
    <div>
      {
        <div>
          <Paper sx={{ height: "200px", width: "500px" }}>
            <div className="cartitem-container">
              <div>
                <img
                  src={cartItem.image}
                  alt="car"
                  height="150px"
                  width="150px"
                />
                <p>{cartItem.VIN}</p>
              </div>
              <div>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
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
            </div>
          </Paper>
        </div>
      }
    </div>
  );
}
