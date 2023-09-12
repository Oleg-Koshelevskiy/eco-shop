import Product from "@/models/product";
import { connectToDB } from "@/utils/database";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  const productId = params.id;
  console.log(params);
  try {
    await connectToDB();

    const item = await Product.findById(productId);
    if (!item) return new Response("Product not found", { status: 404 });
    console.log(item);

    return new Response(JSON.stringify(item), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch current product", { status: 500 });
  }
};
