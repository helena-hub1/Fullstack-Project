// product services
import Product, { ProductDocument } from "../models/Product";

// create product
const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};
// get product by id
const getProductByVin = async (
  productVIN: string
): Promise<ProductDocument | null> => {
  return Product.findOne({ VIN: productVIN });
};
// get products
const getProductList = async (): Promise<ProductDocument[]> => {
  return Product.find();
};
// update product by id
const updateProductById = async (
  productId: string,
  product: Partial<ProductDocument>
): Promise<ProductDocument | null> => {
  return Product.findByIdAndUpdate(productId, product, { new: true });
};
// delete product by id
const deleteProductById = async (
  productId: string
): Promise<ProductDocument | null> => {
  return Product.findByIdAndDelete(productId);
};
export default {
  createProduct,
  getProductByVin,
  getProductList,
  updateProductById,
  deleteProductById,
};
