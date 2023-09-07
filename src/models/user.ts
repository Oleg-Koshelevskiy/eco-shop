import { Schema, model, models } from "mongoose";

const ProductsRatingSchema = new Schema({
  productId: String,
  rating: Number,
});

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    requred: [true, "Email is required!"],
  },
  username: {
    type: String,
    requred: [true, "Username is required!"],
    // match: [
    //   /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[\-a-zA-Z\u0410-\u044F\']+(?<![_.]')$/,
    //   "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    // ],
  },
  image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
  },
  rating: {
    type: [ProductsRatingSchema],
  },
});

const User = models.User || model("User", UserSchema);

export default User;
