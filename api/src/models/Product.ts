// product model here
import mongoose, { Document } from "mongoose";

import Product from "../../../common/product";
// type
export type ProductDocument = Document & {
  ProductDocument: Product;
};
// schema
export const ProductSchema = new mongoose.Schema(
  {
    vin: {
      type: String,
      unique: true,
      Required: true,
    },
    make: {
      type: String,
    },
    model: {
      type: String,
    },
    image: {
      type: String,
    },
    fueltype: {
      type: String,
    },
    class: {
      type: String,
    },
    condtion: {
      type: String,
    },
    price: {
      type: String,
    },
    engine: {
      type: String,
    },
    color: {
      type: String,
    },
    year: {
      type: Number,
    },
  },
  { timestamps: true }
);
// model
export default mongoose.model<ProductDocument>("Product", ProductSchema);
