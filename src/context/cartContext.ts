import { CartContextType } from "@/types";
import { createContext } from "react";

export const CartContext = createContext<CartContextType>({
  cartState: {},
  addToCart: () => {},
  changeCartItem: () => {},
  removeCartItem: () => {},
  clearCart: () => {},
});
