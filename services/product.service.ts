import { apiFetch } from "@/lib/https";

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    slug: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export async function getProducts(
  pageOffset: number,
  limit: number
): Promise<Product[]> {
  return apiFetch(`/products?offset=${pageOffset}&limit=${limit}`);
}

export async function getProductById(id: number): Promise<Product> {
  return apiFetch(`/products/${id}`);
}
