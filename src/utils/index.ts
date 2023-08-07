import { Product } from "@/types";

export const links = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about",
  },
  {
    id: 3,
    name: "Products",
    link: "/products",
  },
  {
    id: 4,
    name: "Shipment",
    link: "/shipment",
  },
];

export const blurDataUrl: string =
  "data:image/png;base64,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";

export const products = [
  {
    id: 1,
    name: "Apple",
    price: 10.0,
    category: "fruits",
    description: "Fresh and crispy apples from the new harvest",
    rating: 4,
    photo: "/images/products/apple.jpg",
    new: true,
  },
  {
    id: 2,
    name: "Apricot",
    price: 60.0,
    category: "fruits",
    description: "Fresh and juicy apricot from the new harvest",
    rating: 4,
    photo: "/images/products/apricot.jpg",
    new: true,
  },
  {
    id: 3,
    name: "Cherry",
    price: 25.0,
    category: "fruits",
    description: "Fresh and juicy cherry from the new harvest",
    rating: 4,
    photo: "/images/products/cherry.jpg",
    new: false,
  },
  {
    id: 4,
    name: "Cucumber",
    price: 20.0,
    category: "vegetables",
    description: "Fresh and crispy cucubbers from the new harvest",
    rating: 4,
    photo: "/images/products/cucumber.jpg",
    new: false,
  },
  {
    id: 5,
    name: "Grape",
    price: 70.0,
    category: "fruits",
    description: "Fresh and juicy grape from the new harvest",
    rating: 5,
    photo: "/images/products/grape.jpg",
    new: true,
  },
  {
    id: 6,
    name: "Honey",
    price: 100.0,
    category: "other",
    description: "Fragrant amber honey collected this year",
    rating: 5,
    photo: "/images/products/honey.jpg",
    new: false,
  },
  {
    id: 7,
    name: "Peach",
    price: 50.0,
    category: "fruits",
    description: "Fresh and juicy peaches from the new harvest",
    rating: 5,
    photo: "/images/products/peach.jpg",
    new: false,
  },
  {
    id: 8,
    name: "Plum",
    price: 40.0,
    category: "fruits",
    description: "Fresh and juicy plums from the new harvest",
    rating: 4,
    photo: "/images/products/plum.jpg",
    new: true,
  },
  {
    id: 9,
    name: "Raspberry",
    price: 45.0,
    category: "fruits",
    description: "Fresh and juicy raspberry from the new harvest",
    rating: 5,
    photo: "/images/products/raspberry.jpg",
    new: false,
  },
  {
    id: 10,
    name: "Spinach",
    price: 120.0,
    category: "other",
    description: "Fresh and crispy spinach from the new harvest",
    rating: 3,
    photo: "/images/products/spinach.jpg",
    new: false,
  },
  {
    id: 11,
    name: "Strawberry",
    price: 65.0,
    category: "fruits",
    description: "Fresh and juicy strawberry from the new harvest",
    rating: 5,
    photo: "/images/products/strawberry.jpg",
    new: false,
  },
  {
    id: 12,
    name: "Tomato",
    price: 35.0,
    category: "vegetables",
    description: "Fresh and juicy tomatoes from the new harvest",
    rating: 4,
    photo: "/images/products/tomato.jpg",
    new: false,
  },
];

export const getProductsObject = (array: Product[]) =>
  array.reduce(
    (object, product) => ({
      ...object,
      [product._id]: product,
    }),
    {}
  );

export async function getProducts() {
  const res = await fetch("/api/products");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
