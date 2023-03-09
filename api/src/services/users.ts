import User, { UserDocument } from "../models/User";

// create a user
const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

// get users
const getUserList = async (): Promise<UserDocument[]> => {
  return User.find();
};

// get user by Id
const getUserById = async (userId: string): Promise<UserDocument | null> => {
  return User.findById({ _id: userId });
};
// get user by email
const getUserByEmail = async (email: string): Promise<UserDocument | null> => {
  return User.findOne({ email: email });
};

// update user info
const updateUserDetail = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  return User.findByIdAndUpdate(userId, update, { new: true });
};
// delete user
const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  return User.findByIdAndDelete(userId);
};

export default {
  createUser,
  getUserList,
  getUserById,
  getUserByEmail,
  updateUserDetail,
  deleteUser,
};
