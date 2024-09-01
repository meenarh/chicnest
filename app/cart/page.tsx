"use client";

import { useCart } from "@/app/context/cartContext";
import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const CartPage: React.FC = () => {
  const { cart } = useCart();

  // Calculate the total price
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <>
      <div className="md:pt-10 md:px-10 p-5 font-serif md:mb-[260px] mb-[92px]">
        <Navbar />
        <div className="flex md:flex-row flex-col justify-between my-10">
          <div className="md:w-1/2">
            <h1 className="text-2xl font-bold mb-10">Your Cart</h1>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul>
                {cart.map((product, index) => (
                  <li
                    key={index}
                    className="mb-4 border-y p-4 md:w-[80%] w-full h-fit flex flex-row justify-between gap-3"
                  >
                    <Image
                      src={product.images?.[0]}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="w-full md:w-1/4"
                    />
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-semibold">{product.title}</h2>
                      <p className="text-md font-normal text-gray-400">
                        {product.category.name}
                      </p>
                      <Link
                        href={`/product/${product.id}`}
                        className="bg-black text-white rounded-md text-center mt-3 p-2 w-[120px]"
                      >
                        View Product
                      </Link>
                    </div>
                    <p>${product.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="md:w-1/2 text-left flex flex-col gap-5 mt-5">
            <h3 className="text-2xl font-bold mb-10">Total Price</h3>
            <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
            <Link
              href="#"
              className="bg-black text-white text-md text-center py-3 font-medium w-[180px] rounded-md h-12"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
