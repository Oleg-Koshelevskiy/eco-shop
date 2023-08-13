"use client";

import { Button, ProductForm } from "@/components";
import { useUser } from "@/hooks/useUsers";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { user, isLoading, isError } = useUser(session?.user.email);
  const [submitting, setSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    image: "[...].jpg",
    price: "",
  });

  // if (!session?.user) {
  //   router.push("/login");
  //   return;
  // }

  // if (!user[0].isAdmin) {
  //   router.push("/profile");
  // }

  if (isLoading) return <div className="flex justify-center">Loading...</div>;
  if (isError)
    return <div className="flex justify-center">Failed to load!</div>;

  const showFormHandler = () => {
    setShowForm((state) => !state);
  };

  const addProductHandler = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    console.log(product);
    try {
      const response = await fetch("/api/products/new", {
        method: "POST",
        body: JSON.stringify({
          category: product.category,
          description: product.description,
          name: product.name,
          photo:
            product.image === ""
              ? "/images/eco-logo.png"
              : `/images/products/${product.image}`,
          price: +product.price,
        }),
      });

      if (response.ok) {
        setShowForm(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-14 sm:mt-18 md:mt-20 container max-w-7xl mx-auto">
      <h1 className="secondary_header">Admin dashboard</h1>
      <div className="flex justify-center">
        <Button
          onClick={showFormHandler}
          type="button"
          className={showForm ? "cancel_btn" : "main_btn"}
        >
          {!showForm ? "Add new product" : "Cancel adding"}
        </Button>
      </div>
      {showForm && (
        <ProductForm
          addProductHandler={addProductHandler}
          product={product}
          setProduct={setProduct}
          submitting={submitting}
        />
      )}
    </section>
  );
};

export default Dashboard;
