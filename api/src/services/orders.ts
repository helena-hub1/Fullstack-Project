import Order, { OrderDocument } from "../models/Order";

// create order
const createOrder = async (order: OrderDocument): Promise<OrderDocument> => {
  return order.save();
};

// get order list
const getOrderListByUserId = async (
  userId: string
): Promise<OrderDocument[]> => {
  return Order.find({ userId: userId });
};
// get order by id
const getOrderById = async (orderId: string): Promise<OrderDocument | null> => {
  return Order.findOne({ _id: orderId });
};
// update order
const updateOrderDetail = async (
  orderId: string,
  order: Partial<OrderDocument>
): Promise<OrderDocument | null> => {
  return Order.findByIdAndUpdate(orderId, order, { new: true });
};
// delete order
const deleteOrderById = async (
  orderId: string
): Promise<OrderDocument | null> => {
  return Order.findByIdAndDelete(orderId);
};
export default {
  createOrder,
  getOrderListByUserId,
  getOrderById,
  updateOrderDetail,
  deleteOrderById,
};
