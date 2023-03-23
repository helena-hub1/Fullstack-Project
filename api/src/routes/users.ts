import Router from "express";
import passport from "passport";

import {
  registerUser,
  userLogin,
  updateUserInformation,
} from "../controllers/users";

const router = Router();
// routes
router.post("/", registerUser);
router.post("/login", userLogin);
router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateUserInformation
);

export default router;
