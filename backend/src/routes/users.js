import { Router } from "express";
import { getAllUsers, getUserById, postUser } from "../methods/user.js";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", postUser);
