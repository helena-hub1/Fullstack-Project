import Router from "express";
import passport from "passport";

import { createOrder, getOrderListByUserId } from "../controllers/orders";

const router = Router();
// routes
router.post(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  createOrder
);
router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  getOrderListByUserId
);

export default router;
