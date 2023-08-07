"use client";

import { useReducer } from "react";
import { Props, CartAction, CartItems } from "@/types";
import { CartContext } from "./cartContext";
const { omit } = require("lodash");

const initialCart: CartItems = {};

const cartReducer = (state = initialCart, action: CartAction) => {
  if (action.type === "ADD") {
    return {
      ...state,
      [action.id]: (state[action.id] || 0) + action.quantity,
    };
  }
  if (action.type === "CHANGE") {
    return {
      ...state,
      [action.id]: action.quantity,
    };
  }
  if (action.type === "REMOVE") {
    return omit(state, [action.id]);
  }
  if (action.type === "CLEAR") {
    return initialCart;
  }

  return state;
};

const CartContextProvider = (props: Props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, initialCart);

  const addToCart = (id: string, quantity: number) => {
    dispatchCartState({ type: "ADD", id: id, quantity: quantity });
  };

  const changeCartItem = (id: string, quantity: number) => {
    dispatchCartState({ type: "CHANGE", id: id, quantity: quantity });
  };

  const removeCartItem = (id: string) => {
    dispatchCartState({ type: "REMOVE", id: id });
  };

  const clearCart = () => {
    setTimeout(() => dispatchCartState({ type: "CLEAR" }), 300);
  };

  const cartContext = {
    cartState: cartState,
    addToCart: addToCart,
    changeCartItem: changeCartItem,
    removeCartItem: removeCartItem,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
