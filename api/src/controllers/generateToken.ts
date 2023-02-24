// generate token
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const generateToken = (email: string, id: string) => {
  const JWT_SECRET = process.env.JWT_SECRET as string;
  return jwt.sign({ email, id }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

export default generateToken;
