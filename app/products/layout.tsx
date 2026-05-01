import ProductsHero from "@/components/products/ProductsHero";
import { PropsWithChildren } from "react";

const ProductsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <ProductsHero />
      {children}
    </div>
  );
};

export default ProductsLayout;
