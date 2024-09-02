"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import RelatedProducts from "@/app/components/RelatedProduct";
import Footer from "@/app/components/Footer";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { useCart } from "@/app/context/cartContext";
import { Product } from "@/app/types/cart"; 
import Loader from "@/app/components/Loader";

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

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductData = async () => {
      const product = await fetchProduct(params.id);
      if (!product) {
        notFound();
        return;
      }
      setProduct(product);
      setLoading(false);
    };

    fetchProductData();
  }, [params.id]);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
        method: "DELETE",
      });
      // Ideally, navigate back to the product list or handle the UI accordingly
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      console.log("Product added to cart:", product);
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const singleImage = product.images[0] || "https://i.imgur.com/ae0AEYn.jpeg";

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
      <div className="bg-white pt-6 font-serif flex flex-col gap-8 md:p-10 p-5">
        <Navbar />
        <div className="flex flex-col lg:flex-row mt-5 md:ml-10 ml-5 lg:px-10">
          <div className="w-1/2 mt-6">
            <Image
              src={singleImage}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover w-full md:h-auto h-full"
            />
          </div>
          <div className="w-full lg:pl-10 md:mt-5">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-4">{product.description}.</p>
            <span className="capitalize">{product.category.name}</span>
            <div className="text-2xl font-semibold text-black mb-4">
              ${product.price.toFixed(2)}
            </div>
            <div className="mt-4">
              <button
                onClick={handleAddToCart}
                className="bg-black text-white p-3 mr-2 rounded-sm"
              >
                Add to Cart
              </button>
              <Link
                href={`/manage/edit/${product.id}`}
                className="border border-black p-3 rounded-sm"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className="bg-red-500 border border-red-500 text-white p-3 ml-2 rounded-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
        <div className="lg:px-10">
          <RelatedProducts productId={params.id} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;