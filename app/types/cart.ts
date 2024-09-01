// types/cart.ts

export interface Category {
   id: string;
   name: string;
 }
 
 export interface Product {
   id: number;
   title: string;
   description: string;
   price: number;
   images: string[];
   category: Category; // Ensure category is defined this way
 }
 