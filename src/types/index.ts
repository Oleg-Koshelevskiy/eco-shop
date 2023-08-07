import { ReactNode } from "react";

export interface Product {
  _id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  rating: number;
  photo: string;
  new: boolean;
}

export interface BtnProps {
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  key?: string;
}

export interface Rating {
  rating: number;
}

export interface RatingStar {
  color?: string;
}

export interface CartItem {
  quantity: number;
  product: Product;
}

export interface Props {
  children: ReactNode;
}

export interface CartItems {
  [id: string]: number;
}

export interface ItemId {
  id: string;
  name: string;
  productPage: boolean;
}

export interface OrderItem {
  id: string;
}

export interface OrderPage {
  onShowOrder: () => void;
  name: string;
}

export interface OrderBtns extends OrderPage {
  productPage: boolean;
}

interface Change {
  type: "ADD" | "CHANGE";
  id: string;
  quantity: number;
}
interface Remove {
  type: "REMOVE";
  id: string;
}
interface Clear {
  type: "CLEAR";
}

export type CartAction = Change | Remove | Clear;

export type CartContextType = {
  cartState: CartItems;
  addToCart: (id: string, quantity: number) => void;
  changeCartItem: (id: string, quantity: number) => void;
  removeCartItem: (id: string) => void;
  clearCart: () => void;
};

export interface ProcessEnv {
  [key: string]: string | undefined;
}
