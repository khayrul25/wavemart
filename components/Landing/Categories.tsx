/* eslint-disable @next/next/no-img-element */
import { getCategories } from "@/services/product.service";
import Link from "next/link";

const Categories = async () => {
  const categories = await getCategories();

  if (!categories) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-5 mt-10">Categories</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <Link
            href={`/products?categoryId=${category.id}`}
            key={category.id}
            className="bg-white shadow-md p-4"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover mb-4"
            />
            <h3 className="text-sm text-gray-500 font-semibold">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
