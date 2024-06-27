import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});

  res.send({ users: users });
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.send({ user: user });
};

export const postUser = async (req, res) => {
  const { name, surname, userName, NIF, picture } = req.body;
  const user = new User({ name, surname, userName, NIF, picture });
  const newuser = await user.save();
  res.send({ newuser: newuser });
};
