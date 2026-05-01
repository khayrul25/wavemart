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
      const query = buildProductQuery(filters);
      const params = new URLSearchParams(query);
      if (filters.sortBy) {
        params.set("sortBy", filters.sortBy);
      }
      const fullQuery = params.toString();
      router.replace(fullQuery ? `${pathname}?${fullQuery}` : pathname, {
        scroll: false,
      });
    }, 400);

    return () => clearTimeout(timeout);
  }, [filters, pathname, router]);
};
