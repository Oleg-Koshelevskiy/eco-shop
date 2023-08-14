import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("id");
  try {
    await connectToDB();

    const orders = await Order.find({ customer: userId });

    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all orders", { status: 500 });
  }
};
