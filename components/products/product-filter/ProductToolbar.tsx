"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import { useProductFilters, SortOption } from "@/store/productFilter.store";

const ProductToolbar = () => {
  const { data } = useFilteredProducts();
  const { filters, setFilters } = useProductFilters();
  const products = data?.flat() || [];
  return (
    <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
      <p className="text-sm text-muted-foreground">
        Showing{" "}
        <span className="font-semibold text-foreground">{products.length}</span>{" "}
        products
      </p>
      <div className="flex items-center gap-2">
        <Select
          value={filters.sortBy || "newest"}
          onValueChange={(value: string) =>
            setFilters("sortBy", value as SortOption)
          }
        >
          <SelectTrigger className="w-44 h-9 text-xs">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest" className="text-xs">
              Newest
            </SelectItem>
            <SelectItem value="price_asc" className="text-xs">
              Price: Low → High
            </SelectItem>
            <SelectItem value="price_desc" className="text-xs">
              Price: High → Low
            </SelectItem>
            <SelectItem value="name" className="text-xs">
              Name A–Z
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductToolbar;
