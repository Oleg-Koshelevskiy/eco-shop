import { OrderBlock } from "@/components";
import RatingBlock from "@/components/RatingBlock";
import { Product } from "@/types";
import { blurDataUrl } from "@/utils";
import { getProducts } from "@/utils/database";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const product_list = await getProducts();

  const filteredProducts = product_list.filter(
    (p: Product) => p.name.toLowerCase() === params.product
  );

  if (filteredProducts.length > 1) return <div>Found more than one item!</div>;
  if (filteredProducts.length < 1) return <div>Found no items!</div>;

  const filteredProduct = filteredProducts[0];

  const productPage: boolean = true;

  let price = Math.round(filteredProduct.price * 100) / 100;
  let priceStr: String;
  if (Number.isInteger(price)) {
    priceStr = price + ".00";
  } else priceStr = `${price}`;

  return (
    <>
      <h1 className="main_header mt-8">{filteredProduct.name.toUpperCase()}</h1>
      <div className="container max-w-7xl mx-auto ">
        <div className="border border-solid rounded-md text-center my-2 bg-lime-50 shadow mx-2 md:flex md:flex-row-reverse">
          <div className="m-0.5 relative h-80 sm:h-96 md:h-[480px] md:basis-1/2">
            <Image
              src={filteredProduct.photo}
              fill
              alt={filteredProduct.name}
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 80vw, 40vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              quality={60}
            />
          </div>
          <div className="md:basis-1/2 md:self-center">
            <div className="text-xl font-bold text-slate-700">
              {filteredProduct.category}
            </div>
            <div className="flex justify-around align-middle items-center mb-4">
              <div>
                <div className="text-sm font-bold text-slate-700">
                  <RatingBlock
                    rating={filteredProduct.rating}
                    productId={filteredProduct._id}
                  />
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-700">
                <span className="text-sm">$ </span>
                {priceStr}
              </div>
            </div>
            <div className="text-lg sm:text-xl text-slate-700 mx-2">
              {filteredProduct.description}
            </div>
            <OrderBlock
              id={filteredProduct._id}
              productPage={productPage}
              name={filteredProduct.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}
