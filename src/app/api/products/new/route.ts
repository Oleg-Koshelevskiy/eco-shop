import Product from "@/models/product";
import { connectToDB } from "@/utils/database";

export const POST = async (req: Request) => {
  const { category, description, name, photo, price } = await req.json();

  try {
    await connectToDB();
    const newProduct = new Product({
      category,
      description,
      name,
      photo,
      price,
      rating: 0,
      votes: 0,
    });

    await newProduct.save();
    console.log(newProduct);
    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new product", { status: 500 });
  }
};
