import { Button, Typography, Card } from "@mui/material";
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

  if (cartList.length === 0) {
    return (
      <Card
        className="empty-cartlist"
        sx={{
          maxWidth: 400,
          height: 300,
          mt: 10,
          backgroundColor: "aliceblue",
          mb: 50,
        }}
      >
        <img src={emptycart} height="150px" width="150px"></img>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "monospace",
            fontSize: "20px",
            fontStyle: "italic",
          }}
        >
          is empty!
        </Typography>
      </Card>
    );
  }
  return (
    <div className="cart-page">
      <div className="cart-container">
        {cartList.map((product, id) => (
          <CartItem product={product} key={id} />
        ))}
      </div>
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
        }}
        variant="outlined"
      >
        Continue to Checkout
      </Button>
    </div>
  );
}
