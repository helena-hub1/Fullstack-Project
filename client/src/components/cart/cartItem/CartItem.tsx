import { Box, IconButton, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import DeleteIcon from "@mui/icons-material/Delete";
import Cart from "../../../../../types/cart";
import { cartAction } from "../../../redux/slices/cart";
import "./CartItem.css";

// type
type Prop = {
  product: Cart;
};
export default function CartItem({ product }: Prop) {
  // dispatch
  const dispatch = useDispatch();
  // Increase qty
  const increaseQuantityHandler = () => {
    dispatch(cartAction.incrementQty(product));
  };
  // decrease qty
  const decreaseQuantityHandler = () => {
    dispatch(cartAction.decrementQty(product));
  };
  // remove product
  const removeCartProductHandler = () => {
    dispatch(cartAction.removeFromCart(product));
  };

  return (
    <div className="cart-item">
      <div>
        <Paper
          sx={{
            height: "150px",
            minWidth: "400px",
            backgroundColor: "#eeeeee",
          }}
        >
          <div className="cartitem-container">
            <Box sx={{ mt: 2 }}>
              <img src={product.image} alt="car" height="70px" width="70px" />
              <p>{product.make}</p>
              <p>${product.price}</p>
            </Box>
            <div className="qty-btn">
              <IconButton
                onClick={decreaseQuantityHandler}
                sx={{ color: "#002e5c" }}
              >
                <RemoveCircleIcon />
              </IconButton>
              <p>{product.cartItemQty}</p>
              <IconButton
                onClick={increaseQuantityHandler}
                sx={{ color: "#002e5c" }}
              >
                <AddCircleIcon />
              </IconButton>
            </div>
            <IconButton
              onClick={removeCartProductHandler}
              sx={{ color: "#002e5c" }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        </Paper>
      </div>
    </div>
  );
}
