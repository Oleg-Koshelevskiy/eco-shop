import { Schema, model, models } from "mongoose";

const ProductSchema = new Schema({
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  name: {
    type: String,
    unique: [true, "Name already exists!"],
    requred: [true, "Name is required!"],
  },
  photo: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  votes: {
    type: Number,
  },
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
