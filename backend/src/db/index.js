import express from "express";
import { connect } from "./connect.js";
import { productRouter } from "../routes/products.js";
import { userRouter } from "../routes/users.js";

connect();

const app = express();

app.use(express.json());

app.use("/products", productRouter);
app.use("/users", userRouter);

app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});
