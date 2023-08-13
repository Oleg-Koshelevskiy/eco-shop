import { Schema, model, models } from "mongoose";

const OrderedItemSchema = new Schema({
  id: String,
  name: String,
  image: String,
  amount: Number,
  price: Number,
});

const OrderSchema = new Schema({
  customer: {
    type: String,
  },
  date: {
    type: Date,
  },
  products: {
    type: [OrderedItemSchema],
  },
});

const Order = models.Order || model("Order", OrderSchema);

export default Order;
