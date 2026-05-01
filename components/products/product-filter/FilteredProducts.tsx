"use client";

import { useMemo } from "react";
import { useFilteredProducts } from "@/hooks/useFilteredProducts";
import ProductCard from "../ProductCard";
import { Product } from "@/services/product.service";
import useInitFilterFromUrl from "@/hooks/useInitFilterFromUrl";
import { useSyncFiltersToUrl } from "@/hooks/useSyncFiltersToUrl";
import { useProductFilters } from "@/store/productFilter.store";

const FilteredProducts = () => {
  useInitFilterFromUrl();
  useSyncFiltersToUrl();
  const { data } = useFilteredProducts();
  const sortBy = useProductFilters((state) => state.filters.sortBy);
  const products = data?.flat() || [];

  const sortedProducts = useMemo(() => {
    const sorted = [...products];
    switch (sortBy) {
      case "price_asc":
        return sorted.sort((a, b) => a.price - b.price);
      case "price_desc":
        return sorted.sort((a, b) => b.price - a.price);
      case "name":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "newest":
      default:
        return sorted.sort(
          (a, b) =>
            new Date(b.creationAt).getTime() -
            new Date(a.creationAt).getTime(),
        );
    }
  }, [products, sortBy]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {sortedProducts.map((product: Product, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default FilteredProducts;
