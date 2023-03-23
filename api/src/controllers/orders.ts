import { Request, Response } from "express";

import Order from "../models/Order";
import OrderServices from "../services/orders";

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
      email,
      phoneNumber,
    } = request.body;
    const userId = request.params.userId;
    if (!userId) {
      response.json({ message: "Please sign in first" });
    }
    const newOrder = new Order({
      userId: userId,
      productOrder: request.body.productOrder,
      shippingAddress: {
        street: street,
        city: city,
        postalCode: postalCode,
        country: country,
      },
      totalPrice: totalPrice,
      quantity: quantity,
      isDelivered: isDelivered,
      email: email,
      phoneNumber: phoneNumber,
    });
    const order = await OrderServices.createOrder(newOrder);
    response.status(201).json(order);
  } catch (error) {
    console.log(error);
  }
};
const getOrderListByUserId = async (request: Request, response: Response) => {
  try {
    const userId = request.params.userId;
    const orderList = await OrderServices.getOrderListByUserId(userId);
    response.status(200).json(orderList);
  } catch (error) {
    console.log(error);
  }
};

export { createOrder, getOrderListByUserId };
