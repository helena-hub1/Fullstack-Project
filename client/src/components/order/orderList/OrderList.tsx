import Order from "../../../../../types/order";
import OrderItem from "../orderItem/OrderItem";
import {
  Box,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import "./OrderList.css";
// type
type Prop = {
  order: Order;
};

export default function OrderList({ order }: Prop) {
  return (
    <div className="order-container">
      <div className="paper-wrapper">
        <Paper sx={{ width: 600, height: 400 }}>
          <div className="order-logo">
            <div className="logo-container">
              <IconButton sx={{ color: "inherit" }}>
                <StarBorderIcon sx={{ fontSize: "50px", size: "small" }} />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ fontSize: "25px", display: { xs: "none", sm: "block" } }}
              >
                <Box component="span" sx={{ color: "darkblue" }}>
                  C
                </Box>
                ar's e
                <Box component="span" sx={{ color: "darkblue" }}>
                  S
                </Box>
                hop
              </Typography>
            </div>
            <div className="logo-text">
              <Typography component="div">
                <Box component="span" sx={{ fontWeight: "bold" }}>
                  CVR no:
                </Box>
                DK43567889
              </Typography>
              <Typography component="div">Copenhagen</Typography>
              <Typography component="div">Denmark</Typography>
            </div>
          </div>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "20px",
              fontFamily: "bold",
              mt: 4,
              backgroundColor: "aliceblue",
            }}
          >
            Order Detail
          </Typography>
          <Divider></Divider>
          <Typography sx={{ fontSize: "14px" }}>
            <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
              Date:
            </Box>
            {order.date.toLocaleString()}
            {/* // "/" +
              // order.date.getMonth.toString +
              // "/" +
              // order.date.getUTCDate.toString} */}
          </Typography>
          <Typography sx={{ fontSize: "14px" }}>
            <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
              email:
            </Box>
            {order.email}
          </Typography>

          <Divider></Divider>
          <Typography
            textAlign="center"
            sx={{ backgroundColor: "aliceblue", fontSize: "16px" }}
          >
            Shipping Address
          </Typography>
          <Divider></Divider>
          <Typography component="div" sx={{ fontSize: "14px" }}>
            <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
              Street:
            </Box>
            {order.shippingAddress.street}
          </Typography>
          <Typography component="div" sx={{ fontSize: "14px" }}>
            <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
              Postal code:
            </Box>
            {order.shippingAddress.postalCode}
          </Typography>
          <Typography component="div" sx={{ fontSize: "14px" }}>
            <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
              City:
            </Box>
            {order.shippingAddress.city}
          </Typography>
          <Typography component="div" sx={{ fontSize: "14px" }}>
            <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
              Country:
            </Box>
            {order.shippingAddress.country}
          </Typography>
        </Paper>
      </div>
      <div className="table-container">
        <TableContainer component={Paper} sx={{ width: 600 }}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">orderID</TableCell>
                <TableCell align="left">Make</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.productOrder.map((product, id) => (
                <OrderItem key={id} product={product} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="total-price">
        <Typography component="div" sx={{ mt: 2, fontFamily: "bold" }}>
          <Box component="span" sx={{ m: 2, fontWeight: "bold" }}>
            Total Price:
          </Box>
          ${order.totalPrice}
        </Typography>
      </div>
    </div>
  );
}
