import {
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./WishItem.css";
import Product from "../../../../../types/product";
import { useDispatch } from "react-redux";
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
    // <div className="wish-item">
    //   <Card
    //     elevation={6}
    //     sx={{
    //       height: 300,
    //       maxWidth: 500,
    //       backgroundColor: "aliceblue",
    //     }}
    //   >
    //     <div className="wish-container">
    //       <Box
    //         sx={{
    //           dispaly: "flex",
    //           flexDirection: "column",
    //           backgroundColor: "red",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <CardActionArea>
    //           <CardMedia
    //             component="img"
    //             height="140"
    //             image={product.image}
    //             alt="car image"
    //             sx={{ m: 0 }}
    //           />
    //           <CardContent
    //             sx={{
    //               dispay: "flex",
    //               flexDirection: "column",
    //               justifyContent: "center",
    //             }}
    //           >
    //             <Typography gutterBottom>{product.make}</Typography>
    //             <Rating
    //               name="half-rating-read"
    //               defaultValue={product.rating}
    //               size="small"
    //               precision={0.5}
    //               readOnly
    //             />
    //             <Typography gutterBottom>Price:${product.price}</Typography>
    //           </CardContent>
    //         </CardActionArea>
    //       </Box>
    //       {/* <div className="icon-container"> */}
    //       <IconButton color="inherit" onClick={addToCartListHandler}>
    //         <ShoppingCartIcon />
    //       </IconButton>
    //       <IconButton onClick={removeWishProductHandler} color="inherit">
    //         <DeleteIcon />
    //       </IconButton>
    //     </div>
    //   </Card>
    // </div>
  );
}
