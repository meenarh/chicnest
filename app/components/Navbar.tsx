import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
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
  );
};

export default Navbar;
