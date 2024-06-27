import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    surname: String,
    userName: String,
    NIF: String,
    picture: String,
  },
  {
    timestamps: true,
  }
);

export const User = model("User", userSchema);
