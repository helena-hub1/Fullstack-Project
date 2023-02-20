import { Request, Response } from "express";

import Wish from "../models/Wish";
import WishServices from "../services/wishes";

// create wish
const createWish = async (request: Request, response: Response) => {
  try {
    const newWish = new Wish({
      userId: request.params.userId,
      productWish: request.body.productWish,
    });
    const wishProduct = await WishServices.createWish(newWish);
    response.status(201).json(wishProduct);
  } catch (error) {
    console.log(error);
  }
};
// get wish list by user Id
const getWishListByUserId = async (request: Request, response: Response) => {
  try {
    const userId = request.params.userId;
    const wishList = await WishServices.getWishListByUserId(userId);
    response.status(201).json(wishList);
  } catch (error) {
    console.log(error);
  }
};
// get wish product by id
const getWishProductById = async (request: Request, response: Response) => {
  try {
    const wishProductId = request.params.wishId;
    const foundWishProduct = await WishServices.getWishProductById(
      wishProductId
    );
    response.status(200).json(foundWishProduct);
  } catch (error) {
    console.log(error);
  }
};
// update wish
const updateWishProductDetail = async (
  request: Request,
  response: Response
) => {
  try {
    const wishId = request.params.wishId;
    const updateProduct = request.body;
    const wishProduct = await WishServices.updateWishProductDetail(
      wishId,
      updateProduct
    );
    response.status(200).json(wishProduct);
  } catch (error) {
    console.log(error);
  }
};
// delete wish
const deleteWishProductById = async (request: Request, response: Response) => {
  try {
    const wishProductId = request.params.wishId;
    const deleteProduct = await WishServices.deleteWishProductById(
      wishProductId
    );
    response.status(200).json(deleteProduct);
  } catch (error) {
    console.log(error);
  }
};
export {
  createWish,
  getWishListByUserId,
  getWishProductById,
  updateWishProductDetail,
  deleteWishProductById,
};
