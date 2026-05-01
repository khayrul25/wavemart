"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useProductFilters } from "@/store/productFilter.store";

const PriceRange = () => {
  const { filters, setFilters } = useProductFilters();
  const [price, setPrice] = useState<[number, number]>([
    filters.price_min || 10,
    filters.price_max || 100,
  ]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrice([filters.price_min || 10, filters.price_max || 100]);
  }, [filters.price_min, filters.price_max]);

  return (
    <div className="space-y-3">
      <Label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Price Range
      </Label>

      <Slider
        value={price}
        min={10}
        max={100}
        step={10}
        className="w-full"
        onValueChange={(value) => {
          setPrice(value as [number, number]);
          setFilters("price_max", value[1]);
          setFilters("price_min", value[0]);
        }}
      />

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            $
          </span>
          <Input value={price[0]} readOnly className="pl-5 h-8 text-sm" />
        </div>

        <span className="text-muted-foreground text-xs">—</span>

        <div className="relative flex-1">
          <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
            $
          </span>
          <Input value={price[1]} readOnly className="pl-5 h-8 text-sm" />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
