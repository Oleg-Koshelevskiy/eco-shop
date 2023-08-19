"use client";

import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "next/link";
import { useCartStore } from "@/context/cartStore";
import useFromStore from "@/hooks/useFromStore";

const Cart = () => {
  const cartItems = useFromStore(useCartStore, (state) => state.cart);
  const itemTypes = cartItems ? Object.keys(cartItems).length : "";
  console.log(cartItems);
  return (
    <Link
      href={"/cart"}
      className="hover:cursor-pointer relative hover:scale-110"
    >
      <ShoppingCartIcon className="h-8 w-8 sm:h-10 sm:w-10  hover:text-lime-500 " />
      <div className="text-red-500 absolute -top-1 sm:top-0 left-3 sm:left-4 bg-white/60 rounded-full text-lg sm:text-xl">
        {itemTypes ? itemTypes : ""}
      </div>
    </Link>
  );
};

export default Cart;
