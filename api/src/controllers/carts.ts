import { Request, Response } from "express";

import Cart from "../models/Cart";
import CartServices from "../services/carts";

// create cart
const createCartProduct = async (request: Request, response: Response) => {
  try {
    const newCart = new Cart({
      userId: request.params.userId,
      productCart: request.body.productCart,
    });
    const cartProduct = await CartServices.createCart(newCart);
    response.status(201).json(cartProduct);
  } catch (error) {
    console.log(error);
  }
};
// get cart list by user Id
const getCartListByUserId = async (request: Request, response: Response) => {
  try {
    const userId = request.params.userId;
    const cartList = await CartServices.getCartListByUserId(userId);
    response.status(201).json(cartList);
  } catch (error) {
    console.log(error);
  }
};
// get cart product by id
const getCartItemById = async (request: Request, response: Response) => {
  try {
    const cartProductId = request.params.cartProductId;
    const foundCartProduct = await CartServices.getCartProductById(
      cartProductId
    );
    response.status(200).json(foundCartProduct);
  } catch (error) {
    console.log(error);
  }
};
// update cart
const updateCartItemDetail = async (request: Request, response: Response) => {
  try {
    const cartId = request.params.wishId;
    const updateProduct = request.body;
    const cartProduct = await CartServices.updateCartProductDetail(
      cartId,
      updateProduct
    );
    response.status(200).json(cartProduct);
  } catch (error) {
    console.log(error);
  }
};
// delete cart item
const deleteCartItemById = async (request: Request, response: Response) => {
  try {
    const cartProductId = request.params.cartId;
    const deleteProduct = await CartServices.deleteCartProductById(
      cartProductId
    );
    response.status(200).json(deleteProduct);
  } catch (error) {
    console.log(error);
  }
};
export {
  createCartProduct,
  getCartListByUserId,
  getCartItemById,
  updateCartItemDetail,
  deleteCartItemById,
};
