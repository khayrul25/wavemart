"use client";

import ProductCard from "./ProductCard";
import { Button } from "../ui/button";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts, Product } from "@/services/product.service";

const productPerPage = 10;

const ProductList = ({ initialProducts }: { initialProducts: Product[] }) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => getProducts(pageParam, productPerPage),
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.length < productPerPage) return undefined;
        return pages.length;
      },
      initialPageParam: 0,
      initialData: {
        pages: [initialProducts],
        pageParams: [0],
      },
    });

  const products = data?.pages.flat() || [];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <Button
        className="mt-8 mx-auto block"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More Products"
          : "No more products to load"}
      </Button>
    </div>
  );
};

export default ProductList;
