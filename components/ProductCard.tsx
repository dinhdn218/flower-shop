'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <Link href={`/san-pham/${product.slug}`} className="group block">
      <div className="bg-white h-full rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-rose-50">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          
          {/* Gradient Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {product.discount && (
              <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                -{product.discount}%
              </span>
            )}
            {product.isNew && (
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                MỚI
              </span>
            )}
            {product.bestSeller && (
              <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                BÁN CHẠY
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button 
            onClick={handleToggleWishlist}
            className={`absolute top-3 right-3 rounded-full p-2.5 shadow-lg transition-all duration-300 z-10 ${
              inWishlist 
                ? 'bg-gradient-to-r from-pink-600 to-rose-500 scale-100 opacity-100' 
                : 'bg-white/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110'
            }`}
          >
            <Heart 
              size={18} 
              className={inWishlist ? 'text-white fill-white' : 'text-pink-600'}
            />
          </button>

          {/* Quick Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 left-3 right-3 bg-gradient-to-r from-pink-600 to-rose-500 text-white py-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center justify-center gap-2 hover:from-pink-700 hover:to-rose-600 font-medium shadow-lg z-10"
          >
            <ShoppingCart size={18} />
            <span>Thêm vào giỏ</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-pink-600 transition-colors text-base">
            {product.name}
          </h3>
          
          {product.size && (
            <p className="text-xs text-gray-500 mb-3 flex items-center gap-1">
              <span className="inline-block w-1 h-1 bg-pink-600 rounded-full"></span>
              {product.size}
            </p>
          )}

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
              {product.price.toLocaleString('vi-VN')}₫
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString('vi-VN')}₫
              </span>
            )}
          </div>

          {product.inStock ? (
            <div className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Còn hàng
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium">
              <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
              Hết hàng
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
