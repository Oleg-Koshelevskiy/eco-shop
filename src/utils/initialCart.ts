import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartItems } from "@/types";

export function useInitialCart() {
  return useLocalStorage<CartItems>("cartItems", {});
}
