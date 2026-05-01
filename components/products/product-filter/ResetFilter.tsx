"use client";

import { Button } from "@/components/ui/button";
import { useProductFilters } from "@/store/productFilter.store";

const ResetFilter = () => {
  const { resetFilters } = useProductFilters();
  return (
    <div className="space-y-2">
      <Button
        variant="outline"
        className="w-full text-muted-foreground"
        size="sm"
        onClick={() => resetFilters()}
      >
        Reset all
      </Button>
    </div>
  );
};

export default ResetFilter;
