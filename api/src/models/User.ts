// user model
import mongoose, { Document } from "mongoose";

// type
export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
// schema
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// collection name + schema
export default mongoose.model<UserDocument>("User", UserSchema);
