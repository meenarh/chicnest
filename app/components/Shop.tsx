'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "./Loader";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: {
    id: string;
    name: string;
  }
}

interface ShopProps {
  products: Product[];
}

const Shop: React.FC<ShopProps> = ({ products }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <section className="font-serif p-16 " id="shop">
      <h2 className="text-3xl font-medium mb-4 text-center">
        Shop from Our Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative w-[400px] h-[600px] ${
                index === products.length - 1 ? "col-span-1 row-span-2" : ""
              } bg-white pt-5`}
            >
              <Image
                src={product.images?.[0] ?? 'https://i.imgur.com/BZrIEmb.jpeg'}
                alt={product.title}
                width={100}
                height={100}
                className="w-full h-auto m-auto"
                priority
              />
              <div className="pt-3 border-t text-left">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-lg font-normal text-black">${product.price}</p>
                <Link href={`/product/${product.id}`} passHref>
                <button className="mt-4 text-center font-medium bg-black text-white py-2 w-[140px] h-[48px] rounded-md hover:bg-white hover:text-black hover:border hover:border-black">
                  View Product
                </button>
                </Link>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
