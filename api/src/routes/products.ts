import Router from "express";
import passport from "passport";

import {
  createNewProduct,
  getProduct,
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
router.get("/:productVIN", getProduct);

export default router;
