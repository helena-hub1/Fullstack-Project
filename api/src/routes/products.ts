// product router here
import Router from "express";
import passport from "passport";

import {
  createProduct,
  getProductByVin,
  getProductList,
  updateProductDetail,
  deleteProductById,
} from "../controllers/products";

const router = Router();
// routes
router.get("/", getProductList);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createProduct
);
router.get(
  "/:productVIN",
  passport.authenticate("jwt", { session: false }),
  getProductByVin
);
router.put(
  "/:productId",
  passport.authenticate("jwt", { session: false }),
  updateProductDetail
);
router.delete(
  "/:productId",
  passport.authenticate("jwt", { session: false }),
  deleteProductById
);

export default router;
