import { Product } from "@/app/types/cart";

export async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return null;
  }
  return res.json();
}


export async function fetchRelatedProducts(productId: string): Promise<Product[]> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=6`);
  if (!res.ok) {
    return [];
  }
  return res.json();
}