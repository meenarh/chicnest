"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductForm({
  onAddProduct,
}: {
  onAddProduct: (product: any) => void;
}) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImages(Array.from(event.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert images to FormData
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price.toString());
    formData.append("description", description);
    formData.append("category", category);

    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        onAddProduct(await response.json());
        // Clear form
        setTitle("");
        setPrice(0);
        setDescription("");
        setCategory("");
        setImages([]);
      } else {
        console.error("Error adding product:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <>
      <div className="font-serif p-10">
        <Navbar />
        <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-3 p-5">
          <h3 className="text-2xl ">Add Product Details</h3>
          <label htmlFor="">Product Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="border border-black p-3 md:w-[30%] w-full"
            required
          />
          <label htmlFor="">Product Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(parseFloat(e.target.value))}
            placeholder="Price"
            className="border border-black p-3 md:w-[30%] w-full"
            required
          />
          <label htmlFor="">Product Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border border-black p-3 md:w-[30%] w-full"
            required
          />
          <label htmlFor="">Product Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            className="border border-black p-3 md:w-[30%] w-full"
            required
          />
          <label htmlFor="">Product Image</label>
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="border border-black p-3 md:w-[30%] w-full"
          />
          <button type="submit" className="bg-black md:w-[30%] w-full text-white p-4">
            Add Product
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
