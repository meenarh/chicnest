'use client'

import { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct: Product) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (updatedProduct: Product) => {
    setProducts(products.map(product => (product.id === updatedProduct.id ? updatedProduct : product)));
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1 className='text-lg'>Manage Products</h1>
      <ProductForm onSubmit={addProduct} />
      <ProductList products={products} onEdit={editProduct} onDelete={deleteProduct} />
    </div>
  );
};

export default ProductPage;
