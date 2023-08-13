import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const GET = async () => {
  try {
    await connectToDB();

    const orders = await Order.find({}).populate("customer");

    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all orders", { status: 500 });
  }
};