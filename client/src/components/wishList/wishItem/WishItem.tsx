import { Box, IconButton, Paper, Rating } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";

import "./WishItem.css";
import Product from "../../../../../types/product";
import { AppDispatch } from "../../../redux/store";
import { wishAction } from "../../../redux/slices/wish";
import { cartAction } from "../../../redux/slices/cart";
// type
type Prop = {
  product: Product;
};
export default function WishItem({ product }: Prop) {
  // dispatch
  const dispatch = useDispatch<AppDispatch>();
  // add to cart
  const addToCartListHandler = () => {
    dispatch(cartAction.addToCart(product));
    dispatch(wishAction.removeFromWish(product));
  };
  // remove from wish
  const removeWishProductHandler = () => {
    dispatch(wishAction.removeFromWish(product));
  };
  return (
    <div className="wish-item">
      <div>
        <Paper
          sx={{
            height: "180px",
            minWidth: "400px",
            backgroundColor: "#eeeeee",
          }}
        >
          <div className="wishitem-container">
            <Box sx={{ mt: 2 }}>
              <img src={product.image} alt="car" height="70px" width="70px" />
              <p>{product.make}</p>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                size="small"
                precision={0.5}
                readOnly
              />
              <p>${product.price}</p>
            </Box>

            <IconButton
              onClick={addToCartListHandler}
              sx={{ color: "#002e5c" }}
            >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton
              onClick={removeWishProductHandler}
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
