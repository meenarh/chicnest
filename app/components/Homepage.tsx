import React from "react";
import Link from "next/link";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div
      className="bg-[url(/home.png)] bg-blend-darken bg-cover h-[90vh] bg-center w-screen text-center"
      id="home"
    >
      <div className="md:mt-[250px] mt-[240px]">
        <h4 className="tracking-tightest uppercase md:text-6xl text-4xl font-serif font-semibold text-white my-auto">
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
