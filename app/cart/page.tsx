"use client";

import { useCart } from "@/app/context/cartContext";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage: React.FC = () => {
  const { cart } = useCart();

  return (
    <>
      <div className="md:pt-10 md:px-10 p-5 font-serif md:mb-[420px] mb-[363px]">
        <Navbar />
        <h1 className="text-2xl font-bold my-10">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((product, index) => (
              <li
                key={index}
                className="mb-4 border p-4 w-[40%] h-[150px] flex flex-col gap-2"
              >
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p>${product.price.toFixed(2)}</p>
                <Link
                  href={`/product/${product.id}`}
                  className="bg-black text-white rounded-md text-center p-3 w-[140px]"
                >
                  View Product
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
