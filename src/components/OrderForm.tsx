"use client";

import { CartContext } from "@/context/cartContext";
import { OrderItem } from "@/types";
import { useContext, useState } from "react";
import Button from "./UI/Button";

const OrderForm = (props: OrderItem) => {
  const [value, setValue] = useState("1");
  const context = useContext(CartContext);

  const addItemHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    context.addToCart(props.id, +value);
  };

  return (
    <div className="my-4 flex gap-2 justify-center">
      <form className="flex gap-2 justify-center" onSubmit={addItemHandler}>
        <input
          type="number"
          className="w-12 border border-lime-600 rounded-md text-center font-semibold text-lime-800"
          placeholder="1"
          min="1"
          max="99"
          step="1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit" className="main_btn">
          Add
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;
