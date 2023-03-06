import mongoose, { Document, ObjectId } from "mongoose";

import { ProductSchema } from "./Product";
import User from "./User";
import Cart from "../../../types/cart";
// TypeScript
export type CartDocument = Document & {
  CartDocument: Cart;
};
// schema
const CartSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  productCart: {
    type: [{ type: ProductSchema }],
  },
  quantity: {
    type: Number,
    default: 1,
    required: true,
  },
});

export default mongoose.model<CartDocument>("Cart", CartSchema);
