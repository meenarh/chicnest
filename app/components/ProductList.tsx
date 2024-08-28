import React from "react";

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

const ProductList = ({ products, onEdit, onDelete }: { products: Product[]; onEdit: (product: Product) => void; onDelete: (id: number) => void }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow-md space-y-2">
          <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded" />
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-800">${product.price.toFixed(2)}</p>
          <div className="flex space-x-2">
            <button onClick={() => onEdit(product)} className="p-2 bg-white text-black border border-black">Edit</button>
            <button onClick={() => onDelete(product.id)} className="p-2 bg-red-500 text-white rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
