import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { getCategoryBySlug, getProductsByCategory, categories } from '@/lib/data';

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(params.slug);

  return (
    <div>
      {/* Category Header */}
      <section className="relative h-64 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p className="text-lg">{category.description}</p>
          <p className="mt-2 text-sm opacity-90">{category.productCount} sản phẩm</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-semibold">Sắp xếp:</span>
            <button className="px-4 py-2 rounded-lg bg-pink-600 text-white">
              Mới nhất
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-100">
              Giá thấp - cao
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-100">
              Giá cao - thấp
            </button>
            <button className="px-4 py-2 rounded-lg hover:bg-gray-100">
              Bán chạy
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Chưa có sản phẩm trong danh mục này</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
