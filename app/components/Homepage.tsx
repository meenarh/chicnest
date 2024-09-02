import React from "react";
import Link from "next/link";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div className="relative h-[90vh] w-screen text-center" id="home">
      <div className="absolute inset-0 bg-[url(/home.png)] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 md:mt-[250px] mt-[240px]">
        <h4 className="tracking-tighter uppercase md:text-6xl text-4xl font-serif font-semibold text-white my-auto">
          Discover Trendsetting <br /> Fashion at ChicNest
        </h4>
        <button className="px-6 py-4 font-medium text-black bg-white rounded-md mt-5 hover:bg-black hover:text-white">
          <Link href="/products">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Homepage;
