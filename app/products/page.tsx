"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
  category: {
    id: string;
    name: string;
  };
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=45")
      .then((response) => response.json())
      .then((data: Product[]) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

 
  if (loading) {
    return <Loader />;
  }


  return (
    <div className="min-h-screen items-center justify-between p-8">
        <Navbar />
      <div className="font-serif md:p-10 p-5">
        <h1 className="text-center text-2xl font-semibold text-black underline m-8">
          Shop
        </h1>
        <section className="flex justify-end mb-7">
          <Link
            href="/manage"
            className="border border-black p-3 text-end justify-end rounded-md hover:bg-black hover:text-white"
          >
            Add New Product
          </Link>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white pt-5"
            >
              {product.images && product.images.length > 0 && (
                <img
                  src={product.images[0] ?? 'https://i.imgur.com/BZrIEmb.jpeg'}
                  alt={product.title}
                  className="w-full h-auto"
                />
              )}
              <div className="pt-3 px-3 border-t text-center">
                <h3 className="text-lg font-medium">{product.title}</h3>
                <span className="capitalize">{product.category.name}</span>
                <p className="text-lg font-normal text-black">
                  ${product.price}
                </p>
              </div>

              <div className="m-4 flex flex-row gap-3 justify-between">
                <Link href={`/product/${product.id}`} passHref>
                <button className="mt-4 text-center font-medium bg-black text-white py-2 w-[140px] h-[48px] rounded-md hover:bg-white hover:text-black hover:border hover:border-black">
                    View Product
                  </button>
                </Link>
                <div className="flex flex-row gap-4">
                  <Link
                    href={`/manage/edit/${product.id}`}
                    className="border border-black p-3 mt-4 rounded-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 border border-red-500 text-white p-2 mt-4 rounded-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
