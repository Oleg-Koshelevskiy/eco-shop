"use client";

import { OrderItem } from "@/types";
import { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";
import { useCartStore } from "@/context/cartStore";

const OrderForm = (props: OrderItem) => {
  const [value, setValue] = useState("1");

  const addtoCart = useCartStore((state) => state.changeCart);

  const addItemHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    addtoCart(props.id, +value);
  };

  return (
    <div className="my-4 flex gap-2 justify-center">
      <form className="flex gap-2 justify-center" onSubmit={addItemHandler}>
        <Input
          type="number"
          className="w-12"
          placeholder="1"
          min="1"
          max="99"
          step="1"
          value={value}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <Button type="submit" className="main_btn">
          Add
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;
