import { useOrders } from "@/hooks/useOrders";
import { blurDataUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OrdersList = ({ email }) => {
  const { orders, isLoading, isError } = useOrders(email);

  if (isLoading) return <div className="flex justify-center">Loading...</div>;
  if (isError)
    return <div className="flex justify-center">Failed to load!</div>;

  return (
    <div className="my-4 p-2">
      {orders.map((order) => {
        const values: number[] = order.products.map(
          (p) => +p.amount * +p.price
        );
        const total: number =
          Math.round(values.reduce((a, b) => a + b, 0) * 100) / 100;
        return (
          <div
            key={order._id}
            className="border border-lime-500 rounded-md my-4 bg-slate-100 container max-w-md mx-auto"
          >
            <div className="bg-slate-200 px-2 rounded-md">
              Date: {order.date}
            </div>
            <div className="px-2">
              {order.products.map((product) => (
                <Link
                  href={`/products/${product.name.toLowerCase()}`}
                  key={product._id}
                  className="flex gap-5 align-middle justify-between m-1"
                >
                  <div className="relative w-6 h-6 flex">
                    <Image
                      src={product.image}
                      alt={product.name}
                      placeholder="blur"
                      blurDataURL={blurDataUrl}
                      fill
                      quality={5}
                      className="object-cover self-center"
                      sizes="(max-width: 768px) 5vw, (max-width: 1200px) 4vw, 2vw"
                    />
                  </div>
                  <div>{product.name}</div>
                  <div>{product.amount}</div>
                  <div>${product.price}</div>
                  <div>Value: ${+product.price * +product.amount}</div>
                </Link>
              ))}
            </div>
            <div className="bg-lime-200 flex justify-between px-2 rounded-md">
              <div>Status: pocessing</div>
              <div> Total cost: ${total}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersList;
