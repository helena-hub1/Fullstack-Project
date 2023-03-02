// order model
import mongoose, { Document } from "mongoose";

import { ProductOrderSchema } from "./ProductOrder";
// import { ProductSchema } from "./Product";
import User from "./User";
import Order from "../../../common/order";
// TypeScript
export type OrderDocument = Document & {
  OrderDocument: Order;
};
const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  // ref to other document
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  // embed
  productOrder: [{ type: ProductOrderSchema }],
  shippingAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  isDelivered: {
    type: Boolean,
    required: true,
  },
});
// name of collection + schema
export default mongoose.model<OrderDocument>("Order2", OrderSchema);
