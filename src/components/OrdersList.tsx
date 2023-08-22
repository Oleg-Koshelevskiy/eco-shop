"use client";

import { OrderBlock, OrderProduct, UserId } from "@/types";
import { blurDataUrl } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchItems } from "@/utils/fetchItems";
import { useEffect, useRef } from "react";

const OrdersList = ({ userId }: UserId) => {
  const lastOrderRef = useRef(null);

  const { data, error, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    ["query"],
    async ({ pageParam = 1 }) => await fetchItems(pageParam, userId),

    {
      getNextPageParam: (_, pages) => pages.length + 1,
    }
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => fetchNextPage());
    });
    if (lastOrderRef.current) {
      observer.observe(lastOrderRef.current);
    }
  }, [lastOrderRef]);

  console.log(lastOrderRef);

  if (isFetchingNextPage)
    return <div className="flex justify-center">Loading...</div>;
  if (error) return <div className="flex justify-center">Failed to load!</div>;
  return (
    <div className="my-4 p-2">
      {data?.pages.map((page, i) => (
        <span key={i}>
          {page.map((order: OrderBlock) => {
            const values: number[] = order.products.map(
              (p: OrderProduct) => +p.amount * +p.price
            );
            const total: number =
              Math.round(values.reduce((a, b) => a + b, 0) * 100) / 100;
            return (
              <div
                key={order._id}
                className="border border-lime-500 rounded-md my-64 bg-slate-100 container max-w-md mx-auto"
              >
                <div className="bg-slate-200 px-2 rounded-md">
                  Date: {order.date}
                </div>
                <div className="px-2">
                  {order.products.map((product: OrderProduct) => (
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
        </span>
      ))}
      <div ref={lastOrderRef}>ref</div>

      {/* <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="secondary_btn flex mx-auto"
      >
        {isFetchingNextPage
          ? "Loading more..."
          : (data?.pages.length ?? 0) < 3
          ? "Load more"
          : "Nothing more to load"}
      </button> */}
    </div>
  );
};

export default OrdersList;
