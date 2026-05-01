import FilteredProducts from "@/components/products/product-filter/FilteredProducts";
import ProductFilterPagination from "@/components/products/product-filter/ProductFilterPagination";
import ProductFilterPanel from "@/components/products/product-filter/ProductFilterPanel";
import ProductToolbar from "@/components/products/product-filter/ProductToolbar";
import ProductHeaderBadge from "@/components/products/product-filter/ProductHeaderBadge";
import { connection } from "next/server";

export default async function ProductFilterPage() {
  await connection();
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <ProductHeaderBadge />
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-7 flex gap-6">
        <ProductFilterPanel />
        <main className="flex-1 min-w-0">
          <ProductToolbar />
          {/* <ActiveFilter /> */}
          <FilteredProducts />
          <ProductFilterPagination />
        </main>
      </div>
    </div>
  );
}
