"use client";

/* eslint-disable @next/next/no-img-element */
import { Card } from "../ui/card";
import { Product } from "@/services/product.service";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cart.store";
import { Button } from "../ui/button";

const ProductCard = ({ product }: { product: Product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link href={`/products/${product.id}`} className="group h-full block">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 py-0">
        <div className="aspect-square w-full bg-gray-50/50 p-6 overflow-hidden relative border-b border-border/50 group-hover:bg-g`ray-100/50 transition-colors">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          {/* Add to Cart Overlay Button */}
          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-center">
            <Button onClick={handleAddToCart} className="w-full">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>
          </div>
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
