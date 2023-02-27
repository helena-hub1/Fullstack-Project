import Router from "express";
import passport from "passport";
import {
  createOrder,
  deleteOrderById,
  getOrderById,
  getOrderListByUserId,
  updateOrderDetail,
} from "../controllers/orders";

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
router.get(
  "/:userId/:orderId",
  passport.authenticate("jwt", { session: false }),
  getOrderById
);
router.put(
  "/:orderId",
  passport.authenticate("jwt", { session: false }),
  updateOrderDetail
);
router.delete(
  "/:orderId",
  passport.authenticate("jwt", { session: false }),
  deleteOrderById
);
export default router;
