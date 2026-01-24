import { getProducts } from "@/services/product.service";
import ProductList from "../products/ProductList";

const Products = async () => {
  const products = await getProducts(0, 10);

  return (
    <div className="max-w-5xl mx-auto py-16">
      <h1 className="font-semibold text-2xl">Products</h1>
      <p className="mb-8">Explore our wide range of products</p>
      <ProductList initialProducts={products} />
    </div>
  );
};

export default Products;
