/* eslint-disable @next/next/no-img-element */
import { Card } from "../ui/card";
import { Product } from "@/services/product.service";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`} className="group h-full block">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 p-0">
        <div className="aspect-square w-full bg-gray-50/50 p-6 overflow-hidden relative border-b border-border/50">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow bg-card">
          {product.category?.name && (
            <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              {product.category.name}
            </span>
          )}
          <h2 className="text-sm font-semibold text-foreground line-clamp-2 mb-3 group-hover:text-primary transition-colors">
            {product.title}
          </h2>
          <div className="mt-auto">
            <p className="font-bold text-lg text-foreground">
              ${product.price}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
