import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedProducts from "@/app/components/RelatedProduct";
import Footer from "@/app/components/Footer";
import Head from "next/head";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
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

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await fetchProduct(params.id);
  // const product = await fetchProduct('2');

  if (!product) {
    console.log("Product not found", params.id);
    notFound();
  }

  return (
    <>
      <Head>
        <title>{product.title} - ChicNest</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.title} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={product.title} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.image} />
      </Head>
      <div className="bg-white pt-6 font-serif flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row mt-5 md:ml-10 ml-5 lg:px-10">
          <div className="w-1/2 mt-6">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={300}
              className="object-cover rounded-full"
            />
          </div>
          <div className="w-full lg:pl-10 md:mt-[150px]">
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-700 text-lg mb-4">{product.description}.</p>
            <span className="capitalize">{product.category}</span>
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold">
                ⭐️ {product.rating.rate.toFixed(1)}
              </span>
              <span className="ml-2 text-sm text-gray-600">
                ({product.rating.count} ratings)
              </span>
            </div>
            <div className="text-2xl font-semibold text-black mb-4">
              ${product.price.toFixed(2)}
            </div>
            <button className="bg-black text-white px-6 py-3 mt-4 hover:bg-white hover:border hover:border-black hover:text-black">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="lg:px-10 px-5">
          <RelatedProducts productId={params.id} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
