/* eslint-disable @next/next/no-img-element */
import { getCategories } from "@/services/product.service";
import Link from "next/link";

const Categories = async () => {
  const categories = await getCategories();

  if (!categories) {
    return null;
  }

  return (
    <section className="max-w-5xl mx-auto py-10 px-4 md:px-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Categories</h2>
        <Link
          href="/products"
          className="text-sm font-medium text-primary hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {categories.slice(0, 6).map((category) => (
          <Link
            href={`/products?categoryId=${category.id}`}
            key={category.id}
            className="group flex flex-col gap-3"
          >
            <div className="w-full aspect-square rounded-xl overflow-hidden border bg-muted">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="text-sm font-medium text-center group-hover:text-primary transition-colors">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;
