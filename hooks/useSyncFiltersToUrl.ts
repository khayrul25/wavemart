"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { buildProductQuery } from "@/lib/buildProductQuery";
import { useProductFilters } from "@/store/productFilter.store";

export const useSyncFiltersToUrl = () => {
  const filters = useProductFilters((state) => state.filters);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Create new params purely for the URL state, ignoring API-specific 'offset' and 'limit'
      const params = new URLSearchParams();
      
      if (filters.title) params.set("title", filters.title);
      if (filters.categoryId) params.set("categoryId", String(filters.categoryId));
      if (filters.price_min) params.set("price_min", String(filters.price_min));
      if (filters.price_max) params.set("price_max", String(filters.price_max));
      if (filters.sortBy) params.set("sortBy", filters.sortBy);
      if (filters.page && filters.page > 1) params.set("page", String(filters.page));
      
      const fullQuery = params.toString();
      router.replace(fullQuery ? `${pathname}?${fullQuery}` : pathname, {
        scroll: false,
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, [filters, pathname, router]);
};
