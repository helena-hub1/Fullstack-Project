import mongoose, { Document } from "mongoose";

import { ProductSchema } from "./Product";
import User from "./User";
import Wish from "../../../common/wish";
// TypeScript
export type WishDocument = Document & {
  WishDocument: Wish;
};
// schema
const WishSchema = new mongoose.Schema({
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
});

export default mongoose.model<WishDocument>("Wish", WishSchema);
