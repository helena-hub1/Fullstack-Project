// product model here
import mongoose, { Document } from "mongoose";

import Product from "../../../common/product";

// TypeScript
export type ProductDocument = Document & {
  ProductDocument: Product;
};
// schema
export const ProductSchema = new mongoose.Schema({
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
  category: {
    type: String,
  },
  condtion: {
    type: String,
  },
  price: {
    type: Number,
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
  quantity: {
    type: Number,
    default: 1,
  },
  rating: {
    type: Number,
  },
  description: {
    type: String,
  },
});
// model
export default mongoose.model<ProductDocument>("Product", ProductSchema);
