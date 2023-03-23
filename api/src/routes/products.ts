import Router from "express";
import passport from "passport";

import {
  createNewProduct,
  getProductByVin,
  getProducts,
} from "../controllers/products";

const router = Router();
// routes
router.get("/", getProducts);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  createNewProduct
);
router.get("/:productVIN", getProductByVin);

export default router;
