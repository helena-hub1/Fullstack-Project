// server here
import Express from "express";
import cors from "cors";
import passport from "passport";

import productRouter from "./routes/products";
import userRouter from "./routes/users";
import orderRouter from "./routes/orders";
import wishRouter from "./routes/wishes";
import cartRouter from "./routes/carts";
// import productOrdersRouter from "./routes/productOrders";
import { jwtStrategy } from "./config/passport";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(passport.initialize());
passport.use(jwtStrategy);
// routes
app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/orders", orderRouter);
app.use("/wishes", wishRouter);
app.use("/carts", cartRouter);
// app.use("/productOrders", productOrdersRouter);

export default app;
