import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/data';

export const metadata = {
  title: 'Hoa Chúc Mừng - Amor Florist',
  description: 'Hoa chúc mừng đa dạng cho mọi dịp. Giao hoa tận nơi, miễn phí ship nội thành.',
};

export default function HoaChucMungPage() {
  const categoryProducts = products.filter(p => p.category === 'hoa-chuc-mung');

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
            🎊 Hoa Chúc Mừng
          </h1>
          <p className="text-gray-600 text-lg">
            Hoa chúc mừng đa dạng cho mọi dịp lễ, sự kiện. Gửi lời chúc mừng tốt đẹp nhất đến người thân, bạn bè.
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
