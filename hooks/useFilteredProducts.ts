"use client";

import { useQuery } from "@tanstack/react-query";
import { buildProductQuery } from "@/lib/buildProductQuery";
import { useProductFilters } from "@/store/productFilter.store";
import { getFilteredProducts, Product } from "@/services/product.service";

export const useFilteredProducts = (initialData?: Product[]) => {
  const filters = useProductFilters((state) => state.filters);

  const queryString = buildProductQuery(filters);

  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => getFilteredProducts(queryString),
    initialData,
    staleTime: 1000 * 30,
  });
};
