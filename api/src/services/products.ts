import Product, { ProductDocument } from "../models/Product";

const createProduct = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return product.save();
};

const getProductByVin = async (
  productVIN: string
): Promise<ProductDocument | null> => {
  return Product.findOne({ VIN: productVIN });
};

const getProductList = async (): Promise<ProductDocument[]> => {
  return Product.find();
};

export default {
  createProduct,
  getProductByVin,
  getProductList,
};
