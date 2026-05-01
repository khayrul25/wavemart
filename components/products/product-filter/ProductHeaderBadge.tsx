"use client";

import { Badge } from "@/components/ui/badge";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import { useProductFilters } from "@/store/productFilter.store";

const ProductHeaderBadge = () => {
  const { data, isFetching } = useFilteredProducts();
  const page = useProductFilters((state) => state.filters.page) || 1;
  const products = data?.flat() || [];

  if (isFetching && products.length === 0) {
    return (
      <Badge variant="secondary" className="text-xs">
        Loading...
      </Badge>
    );
  }

  return (
    <Badge variant="secondary" className="text-xs">
      Page {page} • {products.length} Items
    </Badge>
  );
};

export default ProductHeaderBadge;
