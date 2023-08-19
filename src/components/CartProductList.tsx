"use client";

import CartItem from "./CartItem";
import { getProductsObject } from "@/utils";
import { Order, Product } from "@/types";
import { useProducts } from "@/hooks/useProducts";
import Button from "./UI/Button";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { useCartStore } from "@/context/cartStore";
import useFromStore from "@/hooks/useFromStore";
const { keys } = require("lodash");

async function sendRequest(url: string, { arg }: Order) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  });
}

const CartProductList = () => {
  const { products, isLoading, isError } = useProducts();
  const productsInCart = useFromStore(useCartStore, (state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const { data: session } = useSession();
  const router = useRouter();
  const { trigger, isMutating } = useSWRMutation(
    "/api/orders/new",
    sendRequest
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load!</div>;

  const productsObject: { [_id: string]: Product } =
    getProductsObject(products);

  const values: number[] = keys(productsInCart).map(
    (productId: string) =>
      // @ts-ignore
      productsObject[productId].price * productsInCart[productId]
  );

  const total: number =
    Math.round(values.reduce((a, b) => a + b, 0) * 100) / 100;

  const orderedProducts = keys(productsInCart).map((productId: string) => {
    return {
      id: productId,
      // @ts-ignore
      amount: productsInCart[productId],
      price: productsObject[productId].price,
      name: productsObject[productId].name,
      image: productsObject[productId].photo,
    };
  });

  const orderHandler = async () => {
    await trigger({
      userId: session?.user.id,
      date: new Date(),
      products: orderedProducts,
    });

    clearCart();
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto flex flex-col border border-green-600 bg-slate-100 rounded-md">
        <div className="text-sm sm:text-base flex gap-1 sm:gap-2 justify-between align-middle rounded-md items-center bg-lime-100 font-medium p-1">
          <div>Image</div>
          <div className="flex-1">Name</div>
          <div className="hidden sm:block flex-none w-16 sm:w-20">Price, $</div>
          <div className="flex-none w-8 sm:w-10">Am.</div>
          <div className="flex flex-none w-16 sm:w-18">Chаnge</div>
          <div className="flex-none w-16 sm:w-20">Value, $</div>
        </div>
        {keys(productsInCart).map((productId: string) => (
          <CartItem
            key={productId}
            product={productsObject[productId]}
            // @ts-ignore
            quantity={productsInCart[productId]}
          />
        ))}
        <div className="text-sm sm:text-base flex gap-2 justify-between align-middle rounded-md items-center bg-lime-100 font-medium p-1">
          <div>Total:</div>
          <div>${total}</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center my-4">
        <Button
          type="button"
          onClick={() => setTimeout(() => clearCart(), 300)}
          className="cancel_btn"
        >
          Clear cart
        </Button>
        <Button
          disabled={isMutating ? true : false}
          type="button"
          className="main_btn"
          onClick={
            session?.user ? () => orderHandler() : () => router.push("/login")
          }
        >
          {session?.user ? "Pay order" : "Log in and pay"}
        </Button>
      </div>
      {isMutating && (
        <div className="flex justify-center font-bold text-xl text-lime-700">
          Sending order...
        </div>
      )}
    </div>
  );
};

export default CartProductList;
