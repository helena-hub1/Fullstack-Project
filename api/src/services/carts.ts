import Cart from "../models/Cart";
import { CartDocument } from "../models/Cart";

// create cart
const createCart = async (cart: CartDocument): Promise<CartDocument> => {
  return cart.save();
};
// get cart list by user id
const getCartListByUserId = async (userId: string): Promise<CartDocument[]> => {
  return Cart.find({ userId: userId });
};
// get cart by id
const getCartProductById = async (
  cartId: string
): Promise<CartDocument | null> => {
  return Cart.findOne({ _id: cartId });
};
// update cart
const updateCartProductDetail = async (
  cartProductId: string,
  cartProduct: Partial<CartDocument>
): Promise<CartDocument | null> => {
  return Cart.findByIdAndUpdate(cartProductId, cartProduct, { new: true });
};
// delete cart
const deleteCartProductById = async (
  cartId: string
): Promise<CartDocument | null> => {
  return Cart.findByIdAndDelete(cartId);
};
export default {
  createCart,
  getCartListByUserId,
  getCartProductById,
  updateCartProductDetail,
  deleteCartProductById,
};
