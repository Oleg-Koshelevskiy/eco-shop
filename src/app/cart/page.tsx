"use client";

import { CartProductList } from "@/components";
import { CartContext } from "@/context/cartContext";
import { useContext } from "react";

const page = () => {
  const context = useContext(CartContext);
  const hasAddedProducts = Object.keys(context.cartState).length;

  return (
    <div className="text-center">
      <h2 className="secondary_header">Items in cart</h2>
      <section className="px-1 sm:px-2">
        {hasAddedProducts ? (
          <CartProductList />
        ) : (
          <div className="text-xl">Your cart is empty!</div>
        )}
      </section>
    </div>
  );
};

export default page;
