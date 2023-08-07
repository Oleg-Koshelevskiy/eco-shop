import ProductCard from "./ProductCard";
import { Product } from "@/types";
import { getProducts } from "@/utils/database";

const ProductsList = async () => {
  const product_list = await getProducts();

  return (
    <section className="container max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center sm:justify-between mt-8">
        {product_list.map((product: Product) => (
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

export default ProductsList;
