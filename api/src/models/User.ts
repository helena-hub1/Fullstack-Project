// user model
import mongoose, { Document } from "mongoose";

// type
export type UserDocument = Document & {
  name: string;
  email: string;
  password: string;
  gender: string;
  age: number;
  image: string;
  DOB: Date;
  city: string;
  state: string;
  country: string;
  postcode: string;
  martialStatus: string;
  SSN: string;
};
// schema
const UserSchema = new mongoose.Schema(
  {
    name: {
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
    },
    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    image: {
      type: String,
    },
    DOB: {
      type: Date,
    },
    martialStatus: {
      type: String,
    },

    city: {
      type: String,
    },
    state: {
      type: String,
    },

    country: {
      type: String,
    },
    postcode: {
      type: String,
    },

    SSN: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);
// collection name + schema
export default mongoose.model<UserDocument>("User", UserSchema);
