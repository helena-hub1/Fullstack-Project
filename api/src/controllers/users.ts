import { getOrderList } from "./../../../client/src/redux/thunks/order";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User";
import UserServices from "../services/users";
import generateToken from "./generateToken";
import CartServices from "../services/carts";

// register user
const registerUser = async (request: Request, response: Response) => {
  try {
    const { email, password, firstName, lastName } = request.body;

    if (!email || !password || !firstName || !lastName) {
      throw new Error("Please enter all fields");
    }
    const userExists = await UserServices.getUserByEmail(email);
    if (userExists) {
      response.status(400);
      throw new Error(`User with email: ${email} is already in the system`);
    }
    // hash password
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedPassword,
    });
    const user = await UserServices.createUser(newUser);
    response.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};
// user login
const userLogin = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const user = await UserServices.getUserByEmail(email);
    if (!user) {
      throw new Error(" User does not exist in the system");
    }
    // compare password
    const passwordFromDatabase = user.password;
    const passwordFromForm = password;
    const matchPassword = await bcrypt.compare(
      passwordFromForm,
      passwordFromDatabase
    );
    if (!matchPassword) {
      response.status(401);
      throw new Error(`Invalid account`);
    }
    const userId = user._id;
    // generate token
    const token = generateToken(email, userId);
    const cartList = await CartServices.getCartListByUserId(userId);
    response.status(200).json({ user, token, cartList });
  } catch (error) {
    console.log(error);
  }
};
// get users
const getUsers = async (request: Request, response: Response) => {
  try {
    const userList = await UserServices.getUserList();
    response.status(200).json(userList);
  } catch (error) {
    console.log(error);
  }
};
// get user by id
const getUser = async (request: Request, response: Response) => {
  try {
    const { userId } = request.params;
    const foundUser = await UserServices.getUserById(userId);
    response.status(200).json(foundUser);
  } catch (error) {
    console.log(error);
  }
};
// update user detail
const updateUserInformation = async (request: Request, response: Response) => {
  try {
    const userId = request.params.userId;
    const newDetail = request.body;
    const updateUser = await UserServices.updateUserDetail(userId, newDetail);
    response.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
  }
};
//delete a user
const deleteUserById = async (request: Request, response: Response) => {
  try {
    const { userId } = request.params;
    const deleteUser = await UserServices.deleteUser(userId);
    response.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
  }
};
export {
  registerUser,
  userLogin,
  getUsers,
  getUser,
  updateUserInformation,
  deleteUserById,
};
