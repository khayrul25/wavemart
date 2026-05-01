import { create } from "zustand";

export type SortOption = "newest" | "price_asc" | "price_desc" | "name";

export type ProductFilters = {
  title?: string;
  categoryId?: number;
  price_max?: number;
  price_min?: number;
  sortBy?: SortOption;
  page?: number;
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
  filters: { page: 1 },
  setFilters: (key, value) =>
    set((state) => {
      const resetPage = key !== "page" && key !== "sortBy" ? { page: 1 } : {};
      return {
        filters: {
          ...state.filters,
          ...resetPage,
          [key]: value || undefined,
        },
      };
    }),
  resetFilters: () => set({ filters: { page: 1 } }),
}));
