import Image from 'next/image';
import Link from 'next/link';
import Footer from './Footer';

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

interface RelatedProductsProps {
  productId: string;
}

async function fetchRelatedProducts(productId: string): Promise<Product[]> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=6`);
  if (!res.ok) {
    return [];
  }
  return res.json();
}

const RelatedProducts: React.FC<RelatedProductsProps> = async ({ productId }) => {
  const relatedProducts = await fetchRelatedProducts(productId);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {relatedProducts.map((product) => (
          <div key={product.id} className="w-[400px] h-[600px] bg-white pt-5">
            <Image
              src={product.images?.[0]}
              alt={product.title}
              width={100}
              height={100}
              className="w-full h-auto m-auto pb-5"
            />
            <div className="pt-3 px-3 text-left flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <div className="text-lg font-normal text-black">${product.price.toFixed(2)}</div>
              <Link href={`/product/${product.id}`} passHref className='text-left'>
              <button className="mt-4 text-center font-medium bg-black text-white py-2 w-[140px] h-[48px] rounded-md hover:bg-white hover:text-black hover:border hover:border-black">
                  View Product
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
