import Wish from "../models/Wish";
import { WishDocument } from "../models/Wish";

// create wish
const createWish = async (wish: WishDocument): Promise<WishDocument> => {
  return wish.save();
};
// get wish list by user id
const getWishListByUserId = async (userId: string): Promise<WishDocument[]> => {
  return Wish.find({ userId: userId });
};
// get wish by id
const getWishProductById = async (
  wishId: string
): Promise<WishDocument | null> => {
  return Wish.findOne({ _id: wishId });
};
// update wish
const updateWishProductDetail = async (
  wishProductId: string,
  wishProduct: Partial<WishDocument>
): Promise<WishDocument | null> => {
  return Wish.findByIdAndUpdate(wishProductId, wishProduct, { new: true });
};
// delete wish
const deleteWishProductById = async (
  wishId: string
): Promise<WishDocument | null> => {
  return Wish.findByIdAndDelete(wishId);
};
export default {
  createWish,
  getWishListByUserId,
  getWishProductById,
  updateWishProductDetail,
  deleteWishProductById,
};
