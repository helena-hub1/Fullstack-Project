import mongoose, { Document, ObjectId } from "mongoose";

import { ProductSchema } from "./Product";
import User from "./User";
import Cart from "../../../common/cart";
// type
export type CartDocument = Document & {
  // date: Date;
  // userId: string;
  // productCart: [];
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
});

export default mongoose.model<CartDocument>("Cart", CartSchema);
