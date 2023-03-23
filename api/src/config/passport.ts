import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

import UserServices from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    const email = payload.email;
    const userExists = await UserServices.getUserByEmail(email);
    if (!userExists) {
      return "No user";
    }
    done(null, userExists);
  }
);
