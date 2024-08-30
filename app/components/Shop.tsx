import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
}

interface ShopProps {
  products: Product[];
}

const Shop: React.FC<ShopProps> = ({ products }) => {
  return (
    <section className="font-serif" id="shop">
      <h2 className="text-3xl font-normal mb-4 text-center underline">
        Shop from Our Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
            <div
              key={product.id}
              className={`relative w-[400px] h-[600px] ${
                index === products.length - 1 ? "col-span-1 row-span-2" : ""
              } bg-white border border-gray-200 pt-5 hover:shadow-lg transition-shadow duration-200`}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="w-1/2 h-[70%] m-auto pb-5 rounded-full"
                priority
              />
              <div className="pt-3 px-3 border-t text-center">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-lg font-normal text-black">${product.price}</p>
                <Link href={`/product/${product.id}`} passHref>
                <button className="mt-4 text-center bg-black text-white py-2 w-[150px] h-[40px] hover:bg-white hover:text-black hover:border hover:border-black">
                  View Product
                </button>
              </Link>
              </div>
            </div>
        ))}
      </div>

      
    </section>
  );
};

export default Shop;
