'use client'

import { useState, useEffect } from 'react';

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

const ProductForm = ({ onSubmit, initialData }: { onSubmit: (product: Product) => void; initialData?: Product }) => {
  const [formData, setFormData] = useState<Product>({
    id: Date.now(),
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0,
    },
    ...initialData
  });

  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
      setImagePreview(initialData.image);
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: name === 'price' ? parseFloat(value) : value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData(prevData => ({
          ...prevData,
          image: URL.createObjectURL(file)  
        }));
      };
      reader.readAsDataURL(file);  
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      id: Date.now(),
      title: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      rating: {
        rate: 0,
        count: 0,
      },
    });
    setImagePreview(null); // Reset image preview
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4">{initialData ? 'Edit Product' : 'Add Product'}</h2>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="">Product Name</label>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Product Name"
        className="p-2 border border-black w-[350px]"
        required
      />
      <label htmlFor="">Price</label>
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="p-2 border border-black w-[350px]"
        required
      />
      <label htmlFor="">Description</label>
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="p-2 border border-black w-[350px]"
        required
      />
      <label htmlFor="">Category</label>
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="p-2 border border-black w-[350px]"
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="p-2 border border-gray-300 rounded w-[350px]"
      />
      {imagePreview && <img src={imagePreview as string} alt="Preview" className="w-32 h-32 object-cover mt-2" />}
      <button type="submit" className="p-2 bg-black text-white w-[350px]">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default ProductForm;
