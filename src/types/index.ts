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

export interface InputProps {
  type: "text" | "number";
  id?: string;
  onChange?: (e: any) => void;
  disabled?: boolean;
  className: string;
  value: string;
  step?: string;
  min?: string;
  max?: string;
  readOnly?: boolean;
  placeholder?: string;
}

export interface Mark {
  rating: number;
  product: string;
}

export interface Rate {
  rating: number;
}

export interface RatingStar {
  color?: string;
}

export interface CartItem {
  quantity: number;
  product: Product;
}

export interface CartProduct {
  quantity: number;
  id: string;
}

export interface Props {
  children: ReactNode;
}

export interface CartItems {
  [key: string]: number;
}

export interface Order {
  arg: {
    userId: string | undefined;
    userName: string | undefined;
    userEmail: string | undefined;
    date: Date;
    products: CartItems;
  };
}

export interface OrderProduct {
  name: string;
  _id: string;
  image: string;
  amount: number;
  price: number;
}

export interface OrderBlock {
  _id: string;
  userId: string | undefined;
  userName: string | undefined;
  userEmail: string | undefined;
  date: string;
  products: OrderProduct[];
}

export interface UserId {
  userId: string | null;
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

export interface ProductForm {
  addProductHandler: (e: any) => void;
  product: {
    name: string;
    category: string;
    description: string;
    image: string;
    price: string;
  };
  setProduct: (e: any) => void;
  submitting: Boolean;
}
