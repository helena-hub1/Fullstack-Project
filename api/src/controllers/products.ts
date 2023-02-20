// product controller
import { Request, Response } from "express";

import Product from "../models/Product";
import ProductServices from "../services/products";
// create product
const createProduct = async (request: Request, response: Response) => {
  try {
    const newProduct = new Product({
      vin: request.body.vin,
      make: request.body.make,
      model: request.body.model,
      //fueltype: request.body.fueltype,
      image: request.body.image,
      class: request.body.class,
      condition: request.body.condition,
      price: request.body.price,
      engine: request.body.engine,
      color: request.body.color,
      // year: request.body.year,
    });
    const product = await ProductServices.createProduct(newProduct);
    response.status(201).json(product);
  } catch (error) {
    console.log(error);
  }
};
// get a single product
const getProductByVin = async (request: Request, response: Response) => {
  try {
    const productVIN = request.params.productVIN;
    const foundProduct = await ProductServices.getProductByVin(productVIN);
    response.status(200).json(foundProduct);
  } catch (error) {
    console.log(error);
  }
};
// get product list
const getProductList = async (request: Request, response: Response) => {
  try {
    const productList = await ProductServices.getProductList();
    response.status(200).json(productList);
  } catch (error) {
    console.log(error);
  }
};
// update product info.
const updateProductDetail = async (request: Request, response: Response) => {
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
// delete product
const deleteProductById = async (request: Request, response: Response) => {
  try {
    const productId = request.params.productId;
    const product = await ProductServices.deleteProductById(productId);
    response.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
export {
  createProduct,
  getProductByVin,
  getProductList,
  updateProductDetail,
  deleteProductById,
};
