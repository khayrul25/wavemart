import { ProductFilters } from "@/store/productFilter.store";

export const buildProductQuery = (filters: ProductFilters) => {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value && key !== "sortBy") {
      params.append(key, String(value));
    }
  });
  return params.toString();
};
