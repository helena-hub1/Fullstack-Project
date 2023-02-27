import Router from "express";
import passport from "passport";

import {
  createCartProduct,
  getCartListByUserId,
  getCartItemById,
  updateCartItemDetail,
  deleteCartItemById,
} from "../controllers/carts";

const router = Router();

// routes
router.post(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  createCartProduct
);
router.get(
  "/:userId",
  //  passport.authenticate("jwt", { session: false }),
  getCartListByUserId
);
router.get(
  "/:userId/:cartId",
  passport.authenticate("jwt", { session: false }),
  getCartItemById
);
router.put(
  "/:cartId",
  passport.authenticate("jwt", { session: false }),
  updateCartItemDetail
);
router.delete(
  "/:cartId",
  passport.authenticate("jwt", { session: false }),
  deleteCartItemById
);
export default router;
