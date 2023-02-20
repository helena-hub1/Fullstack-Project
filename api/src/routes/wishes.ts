import Router from "express";
import passport from "passport";

import {
  createWish,
  deleteWishProductById,
  getWishListByUserId,
  getWishProductById,
  updateWishProductDetail,
} from "../controllers/wishes";

const router = Router();

// routes
router.post(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  createWish
);
router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  getWishListByUserId
);
router.get(
  "/:userId/:wishId",
  passport.authenticate("jwt", { session: false }),
  getWishProductById
);
router.put(
  "/:wishId",
  passport.authenticate("jwt", { session: false }),
  updateWishProductDetail
);
router.delete(
  "/:wishId",
  passport.authenticate("jwt", { session: false }),
  deleteWishProductById
);
export default router;
