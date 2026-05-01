/* eslint-disable @next/next/no-img-element */
import { Card } from "../ui/card";
import { Product } from "@/services/product.service";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="border p-4! flex flex-col items-center h-full">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-32 h-32 object-cover mb-4"
        />
        <div className="flex flex-col justify-between h-full w-full">
          <h2 className="line-clamp-2">{product.title}</h2>
          <p className="text-sm text-primary font-semibold">${product.price}</p>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
