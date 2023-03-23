import { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/User";
import UserServices from "../services/users";
import generateToken from "../utils/generateToken";

const registerUser = async (request: Request, response: Response) => {
  try {
    const { email, password, firstName, lastName } = request.body;

    const userExists = await UserServices.getUserByEmail(email);
    if (userExists) {
      response.status(400);
      response.json({
        message: `User with email: ${email} is already in the system`,
      });
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
      response.json({ message: `Invalide email` });
      return;
    }
    // compare password
    const passwordFromDatabase = user.password;
    const passwordFromForm = password;
    const matchPassword = await bcrypt.compare(
      passwordFromForm,
      passwordFromDatabase
    );
    if (!matchPassword) {
      response.json({ message: `Invalid password` });
      return;
    }
    const userId = user._id;
    // generate token
    const token = generateToken(email, userId);
    response.json({
      userEmail: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      userId: userId,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (request: Request, response: Response) => {
  try {
    const { userId } = request.params;
    const foundUser = await UserServices.getUserById(userId);
    if (!foundUser) {
      response
        .status(404)
        .json({ message: "User with ID ${userId} not found" });
      return;
    }
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

export { registerUser, userLogin, getUserById, updateUserInformation };
