import Router from "express";

import passport from "passport";
import {
  registerUser,
  userLogin,
  getUsers,
  getUserByEmail,
  updateUserInformation,
  deleteUserById,
} from "../controllers/users";

const router = Router();
// routes
router.post("/", registerUser);
router.get("/", passport.authenticate("jwt", { session: false }), getUsers);
router.get(
  "/:email",
  passport.authenticate("jwt", { session: false }),
  getUserByEmail
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
