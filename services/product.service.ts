import { apiFetch } from "@/lib/https";
import { ProductFilters } from "@/store/productFilter.store";

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

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export async function getProducts(
  pageOffset: number,
  limit: number,
): Promise<Product[]> {
  return apiFetch(`/products?offset=${pageOffset}&limit=${limit}`, {
    next: { revalidate: 60 },
  });
}

export function getProductById(id: number): Promise<Product> {
  return apiFetch(`/products/${id}`, { next: { revalidate: 60 } });
}

export function getRelatedProducts(id: number): Promise<Product[]> {
  return apiFetch(`/products/${id}/related`, { next: { revalidate: 60 } });
}

export function getCategories(): Promise<Category[]> {
  return apiFetch(`/categories`, { next: { revalidate: 60 } });
}

export function getFilteredProducts(query: string): Promise<Product[]> {
  return apiFetch(`/products${query ? `?${query}` : ""}`);
}
