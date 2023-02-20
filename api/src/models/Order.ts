// order model
import mongoose, { Document } from "mongoose";

import { ProductSchema } from "./Product";
import User from "./User";
// type
export type OrderDocument = Document & {
  date: Date;
  userId: string;
  productOrder: [];
};
const OrderSchema = new mongoose.Schema(
  {
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
    productOrder: [{ type: ProductSchema }],
  },
  { timestamps: true }
);
// name of collection + schema
export default mongoose.model<OrderDocument>("Order", OrderSchema);
