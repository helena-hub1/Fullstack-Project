import Router from "express";

import passport from "passport";
import {
  registerUser,
  userLogin,
  getUsers,
  getUser,
  updateUserInformation,
  deleteUserById,
} from "../controllers/users";

const router = Router();
// routes
router.post("/", registerUser);
router.get("/", passport.authenticate("jwt", { session: false }), getUsers);
router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  getUser
);
router.post("/login", userLogin);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUserInformation
);
router.delete(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  deleteUserById
);

export default router;
