import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  console.log(process.env.MONGODB_URI);

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "ecoshop",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    isConnected = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  const res = await fetch(
    "https://eco-shop-example-j755fxk8r-oleg-koshelevskiy.vercel.app/api/products"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
