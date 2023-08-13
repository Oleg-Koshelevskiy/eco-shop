"use client";

import { motion } from "framer-motion";
import { CartContext } from "@/context/cartContext";
import { CartItem } from "@/types";
import { blurDataUrl } from "@/utils";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";

const CartItem = ({ quantity, ...product }: CartItem) => {
  const { _id, price, photo, name } = product.product;
  const context = useContext(CartContext);

  let nameStr: string = "";
  if (name.length > 12) {
    nameStr = name.slice(0, 10) + "...";
  } else nameStr = name;

  const addItemHandler = () => {
    context.changeCartItem(_id, quantity + 1);
  };

  const removeItemHandler = () => {
    if (quantity === 1) {
      context.removeCartItem(_id);
    } else {
      context.changeCartItem(_id, quantity - 1);
    }
  };

  let fixedPrice = Math.round(price * 100) / 100;
  let priceStr: String;
  if (Number.isInteger(fixedPrice)) {
    priceStr = fixedPrice + ".00";
  } else priceStr = `${fixedPrice}`;

  return (
    <div className="text-sm sm:text-base flex gap-1 sm:gap-2 m-1 justify-between align-middle items-center">
      <Link
        href={`/products/${name.toLowerCase()}`}
        className="h-12 w-12 relative"
      >
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover rounded-md"
          sizes="(max-width: 768px) 20vw, (max-width: 1200px) 10vw, 5vw"
          placeholder="blur"
          blurDataURL={blurDataUrl}
          quality={20}
        />
      </Link>
      <div className="flex-1">{nameStr}</div>
      <div className="hidden sm:block flex-none w-16 sm:w-20">{priceStr}</div>
      <div className="flex-none w-8 sm:w-10">{quantity}</div>
      <div className="flex flex-none w-16 sm:w-18">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addItemHandler}
          className="bg-lime-600 px-2 py-1 rounded-md text-lime-50 font-bold hover:bg-lime-500 text-sm m-1 hover:cursor-pointer"
        >
          +
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={removeItemHandler}
          className="bg-orange-600 px-2.5 py-1 rounded-md text-lime-50 font-bold hover:bg-orange-500 text-sm m-1 hover:cursor-pointer"
        >
          -
        </motion.div>
      </div>
      <div className="flex-none w-16 sm:w-20">
        {fixedPrice * quantity + ".00"}
      </div>
    </div>
  );
};

export default CartItem;
