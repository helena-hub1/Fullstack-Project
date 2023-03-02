// product controller
import { Request, Response } from "express";

import ProductOrder from "../models/Product";
import ProductOrderServices from "../services/products";
// create product
const createNewProduct = async (request: Request, response: Response) => {
  try {
    const { VIN, make, rating, price, image, cartItemQty } = request.body;
    const productExists = await ProductOrderServices.getProductByVin(VIN);
    if (!productExists) {
      throw new Error(" Product is does not exist in the system");
    }
    const newProduct = new ProductOrder({
      VIN: VIN,
      make: make,
      rating: rating,
      price: price,
      image: image,
      cartItemQty: cartItemQty,
    });
    const product = await ProductOrderServices.createProduct(newProduct);
    response.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};
// get a product by vehicle number
const getProduct = async (request: Request, response: Response) => {
  try {
    const productVIN = request.params.productVIN;
    const foundProduct = await ProductOrderServices.getProductByVin(productVIN);
    response.status(200).json(foundProduct);
  } catch (error) {
    console.log(error);
  }
};
// get product list
const getProducts = async (request: Request, response: Response) => {
  try {
    const productList = await ProductOrderServices.getProductList();
    response.status(200).json(productList);
  } catch (error) {
    console.log(error);
  }
};
// update product info.
const updateProductInformation = async (
  request: Request,
  response: Response
) => {
  try {
    const productId = request.params.productId;
    const updateProduct = request.body;
    const product = await ProductOrderServices.updateProductById(
      productId,
      updateProduct
    );
    response.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
// delete product by id
const deleteProduct = async (request: Request, response: Response) => {
  try {
    const productId = request.params.productId;
    const product = await ProductOrderServices.deleteProductById(productId);
    response.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
export {
  createNewProduct,
  getProduct,
  getProducts,
  updateProductInformation,
  deleteProduct,
};
