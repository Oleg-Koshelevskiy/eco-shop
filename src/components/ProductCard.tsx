import { Product } from "@/types";
import Image from "next/image";
import Rating from "./Rating";
import OrderBlock from "./OrderBlock";
import { blurDataUrl } from "@/utils";

const ProductCard = (props: Product) => {
  let price = Math.round(props.price * 100) / 100;
  let priceStr: String;

  const productPage: boolean = false;

  if (Number.isInteger(price)) {
    priceStr = price + ".00";
  } else priceStr = `${price}`;

  return (
    <div className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-4 sm:px-0">
      <div className="border border-solid rounded-md max-w-[350px] text-center mx-auto my-2 sm:m-2 bg-white shadow hover:shadow-md hover:scale-105 transition-all duration-200">
        <div className="m-0.5 relative h-60">
          <Image
            src={props.photo}
            fill
            placeholder="blur"
            blurDataURL={blurDataUrl}
            quality={10}
            alt={props.name}
            className="object-cover rounded-md"
            sizes="(max-width: 768px) 70vw, (max-width: 1200px) 30vw, 20vw"
          />
        </div>
        <h3 className="text-lg font-bold text-lime-700">{props.name}</h3>
        <div className="flex justify-around align-middle items-center mb-4">
          <div>
            <div className="text-sm font-bold text-slate-700">
              {props.category}
            </div>
            <div className="text-sm font-bold text-slate-700">
              <Rating rating={props.rating} />
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-700">
            <span className="text-sm">$ </span>
            {priceStr}
          </div>
        </div>
        <OrderBlock
          id={props._id}
          productPage={productPage}
          name={props.name}
        />
      </div>
    </div>
  );
};

export default ProductCard;
