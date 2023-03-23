import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

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

export default mongoose.model<UserDocument>("User", UserSchema);
