import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const ActiveFilter = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-5">
      {['"Generic"', "$900 – $1,000", "Clothes", "4★ & above"].map((label) => (
        <Badge
          key={label}
          variant="secondary"
          className="text-xs px-2.5 py-1 gap-1.5 cursor-pointer hover:bg-destructive/10 hover:text-destructive transition-colors"
        >
          {label}
          <X className="w-3 h-3" />
        </Badge>
      ))}
    </div>
  );
};

export default ActiveFilter;
