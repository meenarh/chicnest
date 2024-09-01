"use client";

import React from "react";

interface CategoryProps {
  name: string;
  imageUrl: string;
}

const categories = [
  { name: "Clothes", imageUrl: "https://i.imgur.com/GJi73H0.jpeg" },
  { name: "Accessories", imageUrl: "https://i.imgur.com/I5g1DoE.jpg" },
  { name: "Electronics", imageUrl: "https://i.imgur.com/Ro5z6Tn.jpeg" },
  { name: "Furniture", imageUrl: "https://imgur.com/3dU0m72.jpeg" },
  { name: "Shoes", imageUrl: "https://i.imgur.com/NYToymX.jpeg" },
];

const Category = ({ name, imageUrl }: CategoryProps) => {
  return (
    <div className="snap-x">
      <div className="snap-center w-[300px] h-[300px] hover:cursor-pointer">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full mb-2 rounded-md object-cover"
        />
        <p className="text-lg font-medium text-left">{name}</p>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="p-10 font-serif">
      <h2 className="text-3xl font-medium mb-4 text-center">Categories</h2>

      <div className="flex gap-4 p-4 text-left max-w-full">
        {categories.map((category) => (
          <Category
            key={category.name}
            name={category.name}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
