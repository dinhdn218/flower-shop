'use client';

import Link from 'next/link';
import { Heart as HeartEmpty, ArrowLeft } from 'lucide-react';
import { useWishlist } from '@/lib/wishlist-context';
import ProductCard from '@/components/ProductCard';

export default function WishlistPage() {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <HeartEmpty size={80} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Danh Sách Yêu Thích Trống
          </h2>
          <p className="text-gray-600 mb-6">
            Bạn chưa có sản phẩm nào trong danh sách yêu thích
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            <ArrowLeft size={20} />
            Tiếp tục mua sắm
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Danh Sách Yêu Thích ({wishlist.length})
          </h1>
          <Link
            href="/"
            className="text-pink-600 hover:text-pink-700 font-semibold flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Tiếp tục mua sắm
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
