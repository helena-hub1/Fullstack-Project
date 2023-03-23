import mongoose, { Document } from "mongoose";
// TypeScript
export type ProductOrderDocument = Document & {
  VIN: string;
  make: string;
  image: string;
  rating: number;
  price: number;
  cartItemQty: number;
};
// schema
export const ProductOrderSchema = new mongoose.Schema({
  VIN: {
    type: String,
    unique: true,
    Required: true,
  },
  make: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
  },
  price: {
    type: Number,
  },
  cartItemQty: {
    type: Number,
    default: 1,
  },
});
// model
export default mongoose.model<ProductOrderDocument>(
  "ProductOrder",
  ProductOrderSchema
);
