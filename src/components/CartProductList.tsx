"use client";

import { CartContext } from "@/context/cartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { getProductsObject } from "@/utils";
import { Product } from "@/types";
import { useProducts } from "@/hooks/useProducts";
import Button from "./UI/Button";
const { keys } = require("lodash");

const CartProductList = () => {
  const { products, isLoading, isError } = useProducts();
  const context = useContext(CartContext);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load!</div>;

  const productsObject: { [_id: string]: Product } =
    getProductsObject(products);
  const productsInCart = context.cartState;

  const clearCartHandler = () => {
    context.clearCart();
  };

  const values: number[] = keys(productsInCart).map(
    (productId: string) =>
      productsObject[productId].price * productsInCart[productId]
  );

  const total: number =
    Math.round(values.reduce((a, b) => a + b, 0) * 100) / 100;

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
            quantity={productsInCart[productId]}
          />
        ))}
        <div className="text-sm sm:text-base flex gap-2 justify-between align-middle rounded-md items-center bg-lime-100 font-medium p-1">
          <div>Total:</div>
          <div>${total}</div>
        </div>
      </div>
      <div className="flex gap-4 justify-center my-4">
        <Button type="button" onClick={clearCartHandler} className="cancel_btn">
          Clear cart
        </Button>
        <Button type="button" className="main_btn">
          Pay order
        </Button>
      </div>
    </div>
  );
};

export default CartProductList;
