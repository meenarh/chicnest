"use client";

import { useCart } from "@/app/context/cartContext";
import { Product } from "@/app/types/cart";
import Link from "next/link";

interface ProductActionsProps {
  product: Product;
  onDelete: (id: number) => void;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product, onDelete }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    alert("Product has been added to cart.");
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleAddToCart}
        className="bg-black text-white p-3 mr-2 rounded-sm"
      >
        Add to Cart
      </button>
      
    </div>
  );
};

export default ProductActions;