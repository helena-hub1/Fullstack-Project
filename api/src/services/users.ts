import User, { UserDocument } from "../models/User";

// create a user
const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

// get users
const getUserList = async (): Promise<UserDocument[]> => {
  return User.find();
};
// user login
const userLogin = async (email: string): Promise<UserDocument | null> => {
  return User.findOne({ email: email });
};

// get user by Id
const getUserById = async (userId: string): Promise<UserDocument | null> => {
  return User.findById({ _id: userId });
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
  userLogin,
  getUserList,
  getUserById,
  updateUserDetail,
  deleteUser,
};
