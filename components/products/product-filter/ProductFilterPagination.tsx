"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useProductFilters } from "@/store/productFilter.store";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";

const LIMIT = 12; // Same as in buildProductQuery

const ProductFilterPagination = () => {
  const page = useProductFilters((state) => state.filters.page) || 1;
  const setFilters = useProductFilters((state) => state.setFilters);
  const { data, isFetching } = useFilteredProducts();
  const products = data?.flat() || [];

  const isNextDisabled = products.length < LIMIT || isFetching;
  const isPrevDisabled = page <= 1 || isFetching;

  const handlePrev = () => {
    if (!isPrevDisabled) setFilters("page", page - 1);
  };

  const handleNext = () => {
    if (!isNextDisabled) setFilters("page", page + 1);
  };

  // If we are on page 1 and there are no more products, hide pagination completely
  if (page === 1 && products.length < LIMIT && products.length > 0) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-1.5 mt-10">
      <Button 
        variant="outline" 
        size="icon" 
        className="h-9 w-9"
        onClick={handlePrev}
        disabled={isPrevDisabled}
      >
        <ChevronRight className="w-4 h-4 rotate-180" />
      </Button>

      {/* Show current page */}
      {page > 1 && (
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 text-xs"
          onClick={() => setFilters("page", 1)}
        >
          1
        </Button>
      )}

      {page > 2 && (
        <span className="px-2 text-muted-foreground text-sm">...</span>
      )}

      <Button
        variant="default"
        size="icon"
        className="h-9 w-9 text-xs"
      >
        {page}
      </Button>

      {/* Show next page indicator if possible */}
      {!isNextDisabled && (
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 text-xs"
          onClick={handleNext}
        >
          {page + 1}
        </Button>
      )}

      <Button 
        variant="outline" 
        size="icon" 
        className="h-9 w-9"
        onClick={handleNext}
        disabled={isNextDisabled}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ProductFilterPagination;
