import ProductCard from "@/components/products/ProductCard";
import ProductDetailsCard from "@/components/products/ProductDetailsCard";
import { getProductById, getRelatedProducts } from "@/services/product.service";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug: productId } = await params;
  const product = await getProductById(Number(productId));

  return {
    title: product.title,
    description: product.description,
  };
}

const ProductDetails = async ({ params }: Props) => {
  const { slug: productId } = await params;
  let product;

  try {
    product = await getProductById(Number(productId));
  } catch {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <ProductDetailsCard product={product} />
        {relatedProducts.length > 0 && (
          <>
            <h2 className="text-2xl font-bold mt-10 mb-5">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {relatedProducts.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
