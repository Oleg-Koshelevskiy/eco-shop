import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const revalidate = 5;

export const GET = async () => {
  try {
    await connectToDB();

    const orders = await Order.find();

    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all orders", { status: 500 });
  }
};

export const PATCH = async (
  request: Request,
  { params }: { params: { orderId: string } }
) => {
  const { status } = await request.json();
  console.log(status);
  const orderId = params.orderId;
  try {
    await connectToDB();

    const order = await Order.findById(orderId);
    console.log(order);
    order.status = status;

    await order.save();
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new Response("Failed to update user", { status: 500 });
  }
};
