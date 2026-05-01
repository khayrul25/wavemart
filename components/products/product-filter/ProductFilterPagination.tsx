import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const ProductFilterPagination = () => {
  return (
    <div className="flex items-center justify-center gap-1.5 mt-10">
      <Button variant="outline" size="icon" className="h-9 w-9">
        <ChevronRight className="w-4 h-4 rotate-180" />
      </Button>
      {[1, 2, 3, "…", 8].map((p, i) => (
        <Button
          key={i}
          variant={p === 1 ? "default" : "outline"}
          size="icon"
          className="h-9 w-9 text-xs"
          disabled={p === "…"}
        >
          {p}
        </Button>
      ))}
      <Button variant="outline" size="icon" className="h-9 w-9">
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ProductFilterPagination;
