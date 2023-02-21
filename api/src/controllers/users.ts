import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User";
import UserServices from "../services/users";

// create user
const createUser = async (request: Request, response: Response) => {
  try {
    const newUser = new User({
      name: request.body.name,
      email: request.body.email,
      password: request.body.password,
      image: request.body.image,
      gender: request.body.gender,
      age: request.body.age,
      city: request.body.city,
      state: request.body.state,
      country: request.body.country,
      postcode: request.body.postcode,
      dob: request.body.dob,
      SSN: request.body.ssn,
      martialStatus: request.body.martialStatus,
    });
    const user = await UserServices.createUser(newUser);
    response.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
};
dotenv.config();
// user login
const userLogin = async (request: Request, response: Response) => {
  try {
    const JWT_SECRET = process.env.JWT_SECRET as string;
    const { email, password } = request.body;
    const user = await UserServices.userLogin(email);
    if (user && user.password === password) {
      // generate token
      const token = jwt.sign({ email: request.body.email }, JWT_SECRET, {
        expiresIn: "1hr",
      });
      response.status(200).json({ user, token });
    } else {
      response.status(401).json(`Invalid account`);
    }
  } catch (error) {
    console.log(error);
  }
};
// get users
const getUserList = async (request: Request, response: Response) => {
  try {
    const userList = await UserServices.getUserList();
    response.status(200).json(userList);
  } catch (error) {
    console.log(error);
  }
};
// get user by id
const getUserById = async (request: Request, response: Response) => {
  try {
    const userId = request.params.userId;
    const foundUser = await UserServices.getUserById(userId);
    response.status(200).json(foundUser);
  } catch (error) {
    console.log(error);
  }
};
// update user detail
const updateUserDetail = async (request: Request, response: Response) => {
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
    const userId = request.params.userId;
    const deleteUser = UserServices.deleteUser(userId);
    response.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
  }
};
export {
  createUser,
  userLogin,
  getUserList,
  getUserById,
  updateUserDetail,
  deleteUserById,
};
