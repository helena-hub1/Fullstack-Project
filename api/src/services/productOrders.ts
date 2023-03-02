import ProductOrder, { ProductOrderDocument } from "../models/ProductOrder";

// create product
const createProduct = async (
  product: ProductOrderDocument
): Promise<ProductOrderDocument> => {
  return product.save();
};
// get product by id
const getProductByVin = async (
  productVIN: string
): Promise<ProductOrderDocument | null> => {
  return ProductOrder.findOne({ VIN: productVIN });
};
// get products
const getProductList = async (): Promise<ProductOrderDocument[]> => {
  return ProductOrder.find();
};
// update product by id
const updateProductById = async (
  productId: string,
  product: Partial<ProductOrderDocument>
): Promise<ProductOrderDocument | null> => {
  return ProductOrder.findByIdAndUpdate(productId, product, { new: true });
};
// delete product by id
const deleteProductById = async (
  productId: string
): Promise<ProductOrderDocument | null> => {
  return ProductOrder.findByIdAndDelete(productId);
};
export default {
  createProduct,
  getProductByVin,
  getProductList,
  updateProductById,
  deleteProductById,
};
