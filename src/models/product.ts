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
  },
  new: {
    type: Boolean,
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
});

const Product = models.Product || model("Product", ProductSchema);

export default Product;
