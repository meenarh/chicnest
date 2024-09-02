"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string[];
  rating: {
    rate: number;
    count: number;
  };
}

export default function EditProduct({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products/${params.id}`
        );
        const data = await response.json();
        setProduct(data);
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const updatedProduct = {
      title,
      price,
      description,
    };

    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );

      if (response.ok) {
        router.push("/products");
      } else {
        console.error("Error updating product:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  

  return (
    <>
      <div className="mx-auto p-5 md:p-10 font-serif">
      <Navbar />

        <h1 className="text-2xl font-bold my-6">Edit Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-black"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-black p-3 md:w-[30%] w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-lg font-medium text-black"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="border border-black p-3 md:w-[30%] w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-lg font-medium text-black"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-black p-3 md:w-[30%] w-full rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white border border-black p-3 md:w-[30%] w-full rounded-md"
          >
            Save Changes
          </button>
        </form>
      </div>
      <div className="mt-[42px] md:mt-[74px]">
      <Footer />

      </div>
    </>
  );
}
