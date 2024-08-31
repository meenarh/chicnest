"use client";

import Image from "next/image";
import { useState } from "react";
import { notFound } from "next/navigation";
import RelatedProducts from "@/app/components/RelatedProduct";
import Footer from "@/app/components/Footer";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: string;
    name: string;
  };
}

async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const product = await fetchProduct(params.id);

  const singleImage = product ? product.images[0] : "";

  if (!product) {
    console.log("Product not found", params.id);
    notFound();
  }

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

  return (
    <>
      <Head>
        <title>{product.title} - ChicNest</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={singleImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={singleImage} />
      </Head>
      <div className="bg-white pt-6 font-serif flex flex-col gap-8 p-10">
        <Navbar />
        <div className="flex flex-col lg:flex-row mt-5 md:ml-10 ml-5 lg:px-10">
          <div className="w-1/2 mt-6">
            <Image
              src={singleImage}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="w-full lg:pl-10 md:mt-[150px]">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-4">{product.description}.</p>
            <span className="capitalize">{product.category.name}</span>
            <div className="text-2xl font-semibold text-black mb-4">
              ${product.price.toFixed(2)}
            </div>
            <div className="mt-4">
              <Link
                href={`/manage/edit/${product.id}`}
                className="border border-black p-2"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 border border-red-500 text-white p-2 ml-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="lg:px-10 px-5">
          <RelatedProducts productId={params.id} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
