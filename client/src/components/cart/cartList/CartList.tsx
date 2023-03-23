import { Button, Typography, Card, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { AppDispatch, RootState } from "../../../redux/store";
import "./CartList.css";
import CartItem from "../cartItem/CartItem";
import emptycart from "../../../assets/emptycart.png";

export default function CartList() {
  // state
  const cartList = useSelector((state: RootState) => state.cartList.cartList);
  //  dispatch
  const dispatch = useDispatch<AppDispatch>();
  const totalPrice = Math.round(
    cartList.reduce(
      (accum, product) => accum + product.price * product.cartItemQty,
      0
    )
  );
  if (cartList.length === 0) {
    return (
      <Card
        className="empty-cartlist"
        sx={{
          maxWidth: 400,
          height: 300,
          mt: 10,
          backgroundColor: "#eeeeee",
          mb: 50,
        }}
      >
        <img src={emptycart} height="70px" width="70px"></img>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "25px",
            color: "#002e5c",
          }}
        >
          is empty!
        </Typography>
      </Card>
    );
  }
  return (
    <div className="cart-page">
      <Typography variant="h4" sx={{ textAlign: "center", mt: 8 }}>
        Shopping Bag
      </Typography>
      <div className="cart-container">
        {cartList.map((product, id) => (
          <CartItem product={product} key={id} />
        ))}
      </div>
      <Typography component="div" sx={{ mt: 2, fontFamily: "bold" }}>
        <Box
          component="span"
          sx={{ m: 2, fontWeight: "bold", fontSize: "20px" }}
        >
          Total Price:
        </Box>
        ${totalPrice}
      </Typography>
      <Button
        component={Link}
        to="/orderschema"
        type="submit"
        sx={{
          width: "400px",
          height: "40px",
          mt: 3,
          borderRadius: "5",
          backgroundColor: "#000",
          color: "#fff",
          mb: 50,
        }}
        variant="outlined"
      >
        Continue to Checkout
      </Button>
    </div>
  );
}
