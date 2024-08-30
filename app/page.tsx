import { Suspense } from "react";
import Head from "next/head";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=6", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

const Home = async () => {
  const products = await fetchProducts();

  return (
    <>
      <Head>
        <title>Home Affairs - Home</title>
      </Head>
      <main className="flex min-h-screen flex-col gap-5 items-center justify-between p-8">
        <Navbar />
        <Homepage />
        <Suspense fallback={<div>Loading shop section...</div>}>
          <Shop products={products} />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default Home;
