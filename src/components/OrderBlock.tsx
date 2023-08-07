import { ItemId } from "@/types";
import OrderForm from "./OrderForm";
import Link from "next/link";

const OrderBlock = ({ id, productPage, name }: ItemId) => {
  return (
    <div>
      <div className="flex gap-4 justify-center my-4">
        <Link
          href={`/products/${productPage ? "" : name.toLowerCase()}`}
          className="secondary_btn"
        >
          {productPage ? "Return" : "Details"}
        </Link>
      </div>
      <OrderForm id={id} />
    </div>
  );
};

export default OrderBlock;
