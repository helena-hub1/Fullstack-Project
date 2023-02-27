import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
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
            alt="green iguana"
          />
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography gutterBottom textAlign="center">
              ${product.price}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              size="small"
              precision={0.5}
              readOnly
            />
            <Typography gutterBottom textAlign="center">
              {product.make}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
