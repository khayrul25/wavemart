import { ProductFilters } from "@/store/productFilter.store";

export const buildProductQuery = (filters: ProductFilters) => {
  const params = new URLSearchParams();
  const LIMIT = 12;

  Object.entries(filters).forEach(([key, value]) => {
    if (value && key !== "sortBy" && key !== "page") {
      params.append(key, String(value));
    }
  });

  const page = filters.page || 1;
  const offset = (page - 1) * LIMIT;
  
  params.append("offset", String(offset));
  params.append("limit", String(LIMIT));

  return params.toString();
};
