import { useProductFilters } from "@/store/productFilter.store";
import { SortOption } from "@/store/productFilter.store";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useInitFilterFromUrl = () => {
  const searchParams = useSearchParams();
  const setFilters = useProductFilters((state) => state.setFilters);
  useEffect(() => {
    const title = searchParams.get("title");
    const categoryId = searchParams.get("categoryId");
    const maxPrice = searchParams.get("price_max");
    const minPrice = searchParams.get("price_min");
    const sortBy = searchParams.get("sortBy");
    const page = searchParams.get("page");

    if (title) setFilters("title", title);
    if (categoryId) setFilters("categoryId", Number(categoryId));
    if (maxPrice) setFilters("price_max", Number(maxPrice));
    if (minPrice) setFilters("price_min", Number(minPrice));
    if (sortBy) setFilters("sortBy", sortBy as SortOption);
    if (page) setFilters("page", Number(page));
  }, [searchParams, setFilters]);
};

export default useInitFilterFromUrl;
