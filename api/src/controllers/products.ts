// product controller
import { Request, Response } from "express";

import Product from "../models/Product";
import ProductServices from "../services/products";
// create product
const createNewProduct = async (request: Request, response: Response) => {
  try {
    const {
      VIN,
      make,
      model,
      image,
      category,
      condition,
      price,
      engine,
      color,
    } = request.body;
    const productExists = await ProductServices.getProductByVin(VIN);
    if (!productExists) {
      throw new Error(" Product is does not exist in the system");
    }
    const newProduct = new Product({
      vin: VIN,
      make: make,
      model: model,
      image: image,
      category: category,
      condition: condition,
      price: price,
      engine: engine,
      color: color,
    });
    const product = await ProductServices.createProduct(newProduct);
    response.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};
// get a product by vehicle number
const getProduct = async (request: Request, response: Response) => {
  try {
    const productVIN = request.params.productVIN;
    const foundProduct = await ProductServices.getProductByVin(productVIN);
    response.status(200).json(foundProduct);
  } catch (error) {
    console.log(error);
  }
};
// get product list
const getProducts = async (request: Request, response: Response) => {
  try {
    const productList = await ProductServices.getProductList();
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
    const product = await ProductServices.updateProductById(
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
    const product = await ProductServices.deleteProductById(productId);
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
