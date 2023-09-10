import User from "@/models/user";
import { connectToDB } from "@/utils/database";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const userEmail = searchParams.get("email");
  try {
    await connectToDB();

    const user = await User.find({ email: userEmail });

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user", { status: 500 });
  }
};

export const PATCH = async (request: Request) => {
  const rating = await request.json();
  const { searchParams } = new URL(request.url);
  const userEmail = searchParams.get("email");
  try {
    await connectToDB();

    const user: any = await User.find({ email: userEmail });
    console.log(rating);
    user[0].rating = rating;

    await user.save();
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to update user", { status: 500 });
  }
};
