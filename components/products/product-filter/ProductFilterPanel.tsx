import { Separator } from "@/components/ui/separator";
import { SlidersHorizontal } from "lucide-react";
import ProductSearch from "./ProductSearch";
import PriceRange from "./PriceRange";
import CategoryFilter from "./CategoryFilter";
import ResetFilter from "./ResetFilter";

export default function ProductFilterPanel() {
  return (
    <aside className="w-64 shrink-0 hidden lg:block">
      <div className="sticky top-20 rounded-xl border bg-card shadow-sm p-5 space-y-5">
        {/* Header */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-primary" />
          <h2 className="text-sm font-semibold tracking-tight">Filters</h2>
        </div>

        <Separator />

        <ProductSearch />

        <Separator />

        {/* Category */}
        <CategoryFilter />

        <Separator />

        {/* Price Range */}
        <PriceRange />

        <Separator />

        {/* Actions */}
        <ResetFilter />
      </div>
    </aside>
  );
}
