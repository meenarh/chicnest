"use client";

import React, { useState } from "react";
import ProductForm from "../components/ProductForm";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
};

const Page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleAddProduct = (newProduct: Product) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <ProductForm onAddProduct={handleAddProduct} />
    </div>
  );
};

export default Page;