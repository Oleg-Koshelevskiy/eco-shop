"use client";

import { CartProductList } from "@/components";
import { useCartStore } from "@/context/cartStore";
import useFromStore from "@/hooks/useFromStore";

const page = () => {
  const cartItems = useFromStore(useCartStore, (state) => state.cart);
  const hasAddedProducts = cartItems ? Object.keys(cartItems).length : {};

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
