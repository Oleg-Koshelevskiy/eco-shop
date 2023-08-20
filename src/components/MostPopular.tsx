import { Product } from "@/types";
import ProductCard from "./ProductCard";
import { getProducts } from "@/utils/database";

const MostPopular = async () => {
  const product_list = await getProducts();

  return (
    <section className="mt-14 sm:mt-18 md:mt-20 container mx-auto">
      <h2 className="text-center secondary_header">Most Popular</h2>
      <div className="flex flex-wrap snap-x">
        {product_list
          .filter((p: Product) => p.rating === 5)
          .filter((p: Product, i: number) => i <= 3)
          .map((product: Product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              name={product.name}
              price={product.price}
              category={product.category}
              description={product.description}
              rating={product.rating}
              photo={product.photo}
              new={product.new}
            />
          ))}
      </div>
    </section>
  );
};

export default MostPopular;
