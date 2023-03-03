import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import "./WishItem.css";
import Product from "../../../../../common/product";
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
  // remove from cart
  const removeWishProductHandler = () => {
    dispatch(wishAction.removeFromWish(product));
  };
  return (
    <div className="wish-container">
      <Card
        elevation={6}
        sx={{ maxWidth: 400, height: 300, backgroundColor: "aliceblue" }}
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
        <IconButton
          sx={{ ml: 30 }}
          onClick={removeWishProductHandler}
          color="inherit"
        >
          <DeleteIcon />
        </IconButton>
      </Card>
    </div>
  );
}
