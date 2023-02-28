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
// type
type Prop = {
  product: Product;
};
export default function WishItem({ product }: Prop) {
  return (
    <div className="wish-container">
      <Card elevation={6} sx={{ maxWidth: 345, backgroundColor: "aliceblue" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={product.image}
            alt="car image"
          />
          <CardContent>
            {/* <div className="text-container"> */}
            <Typography gutterBottom>{product.make}</Typography>
            <Typography gutterBottom>${product.price}</Typography>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              size="small"
              precision={0.5}
              readOnly
            />
            {/* </div> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
