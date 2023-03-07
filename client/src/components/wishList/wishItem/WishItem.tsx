import {
  Badge,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

import "./WishItem.css";
import Product from "../../../../../types/product";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { wishAction } from "../../../redux/slices/wish";
// type
type Prop = {
  product: Product;
};
export default function WishItem({ product }: Prop) {
  // dispatch
  const dispatch = useDispatch<AppDispatch>();
  // add to wish
  const addToWishListHandler = () => {
    dispatch(wishAction.addToWish(product));
  };
  // remove from wish
  const removeWishProductHandler = () => {
    dispatch(wishAction.removeFromWish(product));
  };
  return (
    <div className="wish-container">
      <Card
        elevation={6}
        sx={{
          maxWidth: 400,
          height: 300,
          backgroundColor: "aliceblue",
          mt: 10,
          ml: 10,
          mb: 50,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="car image"
          />
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom>Make:{product.make}</Typography>
            <Typography gutterBottom>Price:${product.price}</Typography>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              size="small"
              precision={0.5}
              readOnly
            />
          </CardContent>
        </CardActionArea>
        <div className="icon-container">
          <IconButton color="inherit" onClick={addToWishListHandler}>
            <FavoriteIcon />
          </IconButton>
          <IconButton onClick={removeWishProductHandler} color="inherit">
            <DeleteIcon />
          </IconButton>
        </div>
      </Card>
    </div>
  );
}
