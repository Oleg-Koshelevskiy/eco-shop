import { CartItems } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
const { omit } = require("lodash");

interface State {
  cart: CartItems | {};
}

interface Actions {
  changeCart: (item: string, amount: number) => void;
  removeFromCart: (item: string) => void;
  clearCart: () => void;
}

const INITIAL_STATE: State = { cart: {} };

export const useCartStore = create(
  persist<State & Actions>(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      changeCart: (item, amount) => {
        const cart = get().cart;
        const updatedCart = {
          ...cart,
          // @ts-ignore
          [item]: (cart[item] || 0) + amount,
        };
        set(() => ({ cart: updatedCart }));
      },
      removeFromCart: (item) => {
        const cart = get().cart;
        const updatedCart = omit(cart, item);
        set(() => ({ cart: updatedCart }));
      },
      clearCart: () => {
        set(() => ({ cart: {} }));
      },
    }),
    { name: "cart-storage" }
  )
);
