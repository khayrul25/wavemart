import Image from "next/image";
import React from "react";
import { Card } from "../ui/card";
import { Product } from "@/services/product.service";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="border p-4! flex flex-col items-center h-full">
      <Image
        src={product.images[0]}
        alt={product.title}
        className="w-32 h-32 object-cover mb-4"
        width={50}
        height={50}
      />
      <div className="flex flex-col justify-between h-full w-full">
        <h2 className="line-clamp-2">{product.title}</h2>
        <p className="text-sm text-primary font-semibold">${product.price}</p>
      </div>
    </Card>
  );
};

export default ProductCard;
