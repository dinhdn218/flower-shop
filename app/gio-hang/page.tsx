'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <ShoppingBag size={80} className="mx-auto text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Giỏ hàng trống
          </h2>
          <p className="text-gray-600 mb-6">
            Bạn chưa có sản phẩm nào trong giỏ hàng
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
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Giỏ Hàng Của Bạn</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div key={item.product.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <Link
                      href={`/san-pham/${item.product.slug}`}
                      className="font-semibold text-gray-800 hover:text-pink-600 transition block mb-1"
                    >
                      {item.product.name}
                    </Link>
                    
                    {item.product.size && (
                      <p className="text-sm text-gray-500 mb-2">{item.product.size}</p>
                    )}

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-10 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div className="font-bold text-pink-600">
                          {(item.product.price * item.quantity).toLocaleString('vi-VN')}₫
                        </div>
                        {item.product.originalPrice && (
                          <div className="text-sm text-gray-400 line-through">
                            {(item.product.originalPrice * item.quantity).toLocaleString('vi-VN')}₫
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-gray-400 hover:text-red-600 transition self-start"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Tổng Đơn Hàng
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Tạm tính:</span>
                  <span className="font-semibold">
                    {getTotalPrice().toLocaleString('vi-VN')}₫
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Phí giao hàng:</span>
                  <span className="text-green-600 font-semibold">Miễn phí</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold text-gray-800">
                    <span>Tổng cộng:</span>
                    <span className="text-pink-600">
                      {getTotalPrice().toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                </div>
              </div>

              <Link
                href="/thanh-toan"
                className="block w-full bg-pink-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-pink-700 transition mb-3"
              >
                Tiến Hành Thanh Toán
              </Link>

              <Link
                href="/"
                className="block w-full text-center text-pink-600 py-2 hover:underline"
              >
                Tiếp tục mua sắm
              </Link>

              {/* Benefits */}
              <div className="mt-6 pt-6 border-t space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Miễn phí giao hàng nội thành</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Hoa tươi mới 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-600">✓</span>
                  <span>Giao hàng nhanh trong 90 phút</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
