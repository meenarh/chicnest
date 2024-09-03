import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedProducts from "@/app/components/RelatedProduct";
import Footer from "@/app/components/Footer";
import Head from "next/head";
import Navbar from "@/app/components/Navbar";
// import { Product } from "@/app/types/cart";
import { fetchProduct } from "../product/product";
import Link from "next/link";
import { useCart } from "../context/cartContext";
import { Product } from "../types/cart";

interface SingleProductProps {
  params: { id: string };
}

const SingleProduct: React.FC<SingleProductProps> = async ({ params }) => {
  // const { addToCart } = useCart();

  const product = await fetchProduct(params.id);
  if (!product) {
    notFound();
  }

  const singleImage = product.images?.[0] || "https://i.imgur.com/QkIa5tT.jpeg";

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
              src={product.images?.[0]}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover w-full md:h-auto h-full"
            />
          </div>
          <div className="w-full lg:pl-10 md:mt-5">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-4">{product.description}.</p>
            <span className="capitalize">{product.category?.name}</span>
            <div className="text-2xl font-semibold text-black mb-4">
              ${product.price?.toFixed(2)}
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

export default SingleProduct;

function addToCart(product: Product) {
  throw new Error("Function not implemented.");
}
