"use client";

import React from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import { ProductForm } from "@/types";

const ProductForm = ({
  addProductHandler,
  product,
  setProduct,
  submitting,
}: ProductForm) => {
  return (
    <form
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism items-stretch mx-auto"
      onSubmit={addProductHandler}
    >
      <label className="flex gap-2 justify-between">
        <span>Product name</span>
        <Input
          type="text"
          value={product.name}
          className=""
          onChange={(e: any) =>
            setProduct({ ...product, name: e.target.value })
          }
        />
      </label>

      <label className="flex gap-2 justify-between">
        <span>Category</span>
        <Input
          type="text"
          value={product.category}
          className=""
          onChange={(e: any) =>
            setProduct({ ...product, category: e.target.value })
          }
        />
      </label>

      <label className="flex gap-2 justify-between">
        <span>Description</span>
        <textarea
          value={product.description}
          className="basis-3/4 border border-lime-600 rounded-md text-center font-semibold text-lime-800"
          onChange={(e: any) =>
            setProduct({ ...product, description: e.target.value })
          }
        />
      </label>

      <label className="flex gap-2 justify-between">
        <span>Image path: /images/products/</span>
        <Input
          type="text"
          value={product.image}
          className=""
          onChange={(e: any) =>
            setProduct({ ...product, image: e.target.value })
          }
        />
      </label>

      <label className="flex gap-2 justify-between">
        <span>Price</span>
        <Input
          type="number"
          min="0.01"
          max="9999.99"
          step="0.01"
          value={product.price}
          className=""
          onChange={(e: any) =>
            setProduct({ ...product, price: e.target.value })
          }
        />
      </label>

      <Button type="submit" className="main_btn w-40 self-center">
        Add product
      </Button>
      {submitting && (
        <div className="flex justify-center text-lg font-bold text-lime-700">
          Creating new product...
        </div>
      )}
    </form>
  );
};

export default ProductForm;
