import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const userEmail = searchParams.get("email");
  try {
    await connectToDB();

    const users = await User.find({ email: userEmail });

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user", { status: 500 });
  }
};
