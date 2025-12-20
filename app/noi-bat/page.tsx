import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts } from '@/lib/data';

export default function FeaturedProductsPage() {
  const products = getFeaturedProducts();

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sản Phẩm Nổi Bật</h1>
          <p className="text-lg opacity-90">
            Những bó hoa được chọn lọc kỹ càng, đẹp nhất của chúng tôi
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Hiển thị {products.length} sản phẩm
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
