"use client";

import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Tag } from "lucide-react";
import { Category, getCategories } from "@/services/product.service";
import { useProductFilters } from "@/store/productFilter.store";

const CategoryFilter = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { filters, setFilters } = useProductFilters();

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  if (!categories) {
    return null;
  }

  return (
    <div className="space-y-2">
      <Label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-1">
        <Tag className="w-3 h-3" /> Category
      </Label>
      <div className="space-y-0.5 overflow-y-auto max-h-50">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
              cat.id === filters.categoryId
                ? "bg-primary text-primary-foreground font-medium"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
            onClick={() => setFilters("categoryId", cat.id)}
          >
            <span>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
