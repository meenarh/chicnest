import React from "react";
import Link from "next/link";
import { useCart } from "../context/cartContext";
import { CiShoppingCart } from "react-icons/ci";

type Props = {};

const Navbar = (props: Props) => {

  return (
    <div className="flex flex-row justify-between gap-5">
      <ul className="flex flex-row justify-between md:gap-10 gap-8 font-serif md:text-lg text-sm">
        <li className="hover:underline">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link href="/products">Shop</Link>
        </li>
        <li className="hover:underline">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="hover:underline">
          <Link href="#contact">Contact Us</Link>
        </li>
      </ul>

      <Link href="/cart" className="relative">
      <CiShoppingCart color="#000000" size={25} />
            <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-xs w-3 h-3 flex items-center justify-center">
            </span>
        </Link>
      
    </div>
  );
};

export default Navbar;
