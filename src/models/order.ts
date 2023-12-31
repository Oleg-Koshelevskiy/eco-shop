import { Schema, model, models } from "mongoose";

const OrderedItemSchema = new Schema({
  id: String,
  name: String,
  image: String,
  amount: Number,
  price: Number,
});

const OrderSchema = new Schema({
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  date: {
    type: Date,
  },
  status: {
    type: String,
  },
  products: {
    type: [OrderedItemSchema],
  },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
