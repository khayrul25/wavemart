import { create } from "zustand";

export type SortOption = "newest" | "price_asc" | "price_desc" | "name";

export type ProductFilters = {
  title?: string;
  categoryId?: number;
  price_max?: number;
  price_min?: number;
  sortBy?: SortOption;
};

type ProductFiltersState = {
  filters: ProductFilters;
  setFilters: <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K],
  ) => void;
  resetFilters: () => void;
};

export const useProductFilters = create<ProductFiltersState>((set) => ({
  filters: {},
  setFilters: (key, value) =>
    set((state) => ({
      filters: {
        ...state.filters,
        [key]: value || undefined,
      },
    })),
  resetFilters: () => set({ filters: {} }),
}));
