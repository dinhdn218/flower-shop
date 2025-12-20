import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export const metadata = {
  title: 'Hoa Cưới - Amor Florist',
  description: 'Hoa cầm tay cô dâu, hoa trang trí tiệc cưới đẹp, sang trọng. Giao hoa cưới tận nơi.',
};

export default function HoaCuoiPage() {
  const categoryProducts = products.filter(p => p.category === 'hoa-cuoi');

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Link 
          href="/"
          className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Quay lại trang chủ
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            👰 Hoa Cưới
          </h1>
          <p className="text-gray-600 text-lg">
            Hoa cầm tay cô dâu và hoa trang trí tiệc cưới sang trọng, tinh tế. Làm nên ngày trọng đại của bạn thêm hoàn hảo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {categoryProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Đang cập nhật sản phẩm...</p>
          </div>
        )}
      </div>
    </div>
  );
}
