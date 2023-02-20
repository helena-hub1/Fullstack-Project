import mongoose, { Document } from "mongoose";

import { ProductSchema } from "./Product";
import User from "./User";
// type
export type WishDocument = Document & {
  date: Date;
  userId: string;
  productWish: [];
};
// schema
const WishSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      default: Date.now(),
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    productWish: {
      type: [{ type: ProductSchema }],
    },
  },
  { timestamps: true }
);

export default mongoose.model<WishDocument>("Wish", WishSchema);
