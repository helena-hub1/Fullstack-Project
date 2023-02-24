import { Request, Response } from "express";

import Order from "../models/Order";
import OrderServices from "../services/orders";
import CartServices from "../services/carts";
// create order
const createOrder = async (request: Request, response: Response) => {
  try {
    const {
      street,
      city,
      postalCode,
      country,
      totalPrice,
      quantity,
      isDelivered,
    } = request.body;
    const userId = request.params.userId;
    const productsFromCart = CartServices.getCartListByUserId(userId);
    const newOrder = new Order({
      userId: userId,
      //  productOrder: request.body.productOrder,
      productOrder: productsFromCart,
      street: street,
      city: city,
      postalCode: postalCode,
      totalPrice: totalPrice,
      quantity: quantity,
      country: country,
      isDelivered: isDelivered,
    });
    const order = await OrderServices.createOrder(newOrder);
    // response.status(201).json({ ...order, productOrder: productsFromCart });
    response.status(201).json(order);
    // response.json(productInCart);
  } catch (error) {
    console.log(error);
  }
};
// get order list by user id
const getOrderListByUserId = async (request: Request, response: Response) => {
  try {
    const userId = request.params.userId;
    const orderList = await OrderServices.getOrderListByUserId(userId);
    response.status(200).json(orderList);
  } catch (error) {
    console.log(error);
  }
};
// get order by id
const getOrderById = async (request: Request, response: Response) => {
  try {
    const orderId = request.params.orderId;
    const foundOrder = await OrderServices.getOrderById(orderId);
    response.status(200).json(foundOrder);
  } catch (error) {
    console.log(error);
  }
};
// update order
const updateOrderDetail = async (request: Request, response: Response) => {
  try {
    const orderId = request.params.orderId;
    const updateOrder = request.body;
    const order = await OrderServices.updateOrderDetail(orderId, updateOrder);
    response.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};
// delete order
const deleteOrderById = async (request: Request, response: Response) => {
  try {
    const orderId = request.params.orderId;
    const deleteProduct = await OrderServices.deleteOrderById(orderId);
    response.status(200).json(deleteProduct);
  } catch (error) {
    console.log(error);
  }
};
export {
  createOrder,
  getOrderListByUserId,
  getOrderById,
  updateOrderDetail,
  deleteOrderById,
};
