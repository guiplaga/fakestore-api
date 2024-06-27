import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  section: String,
  color: String,
  img: String,
  dimensions: Array,
});

export const Product = model("Product", productSchema);
