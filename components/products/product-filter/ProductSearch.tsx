"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useProductFilters } from "@/store/productFilter.store";
import { Search } from "lucide-react";

const ProductSearch = () => {
  const { filters, setFilters } = useProductFilters();
  return (
    <div className="space-y-2">
      <Label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Search
      </Label>
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground size-4" />
        <Input
          value={filters.title}
          onChange={(e) => setFilters("title", e.target.value)}
          className="pl-9 h-9 text-sm"
          placeholder="Product name…"
        />
      </div>
    </div>
  );
};

export default ProductSearch;
