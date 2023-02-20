import Router from "express";

import passport from "passport";
import {
  createUser,
  deleteUserById,
  getUserById,
  getUserList,
  updateUserDetail,
  userLogin,
} from "../controllers/users";

const router = Router();
// routes
router.post("/", createUser);
router.get("/", passport.authenticate("jwt", { session: false }), getUserList);
router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  getUserById
);
router.post("/login", userLogin);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUserDetail
);
router.delete(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  deleteUserById
);

export default router;
