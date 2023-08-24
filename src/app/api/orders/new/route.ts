import Order from "@/models/order";
import { connectToDB } from "@/utils/database";

export const POST = async (req: any) => {
  const { userId, userName, userEmail, date, products } = await req.json();

  try {
    await connectToDB();
    const newOrder = new Order({
      userId,
      userName,
      userEmail,
      date,
      products,
    });

    await newOrder.save();

    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
