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
    <Link href={`/san-pham/${product.slug}`} className="group">
      <div className="bg-white h-full rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.discount && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{product.discount}%
              </span>
            )}
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                MỚI
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button 
            onClick={handleToggleWishlist}
            className={`absolute top-2 right-2 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity ${
              inWishlist ? 'bg-pink-600' : 'bg-white'
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
            className="absolute bottom-2 left-2 right-2 bg-pink-600 text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 hover:bg-pink-700"
          >
            <ShoppingCart size={18} />
            <span className="text-sm font-medium">Thêm vào giỏ</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-pink-600 transition">
            {product.name}
          </h3>
          
          {product.size && (
            <p className="text-xs text-gray-500 mb-2">{product.size}</p>
          )}

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-pink-600">
              {product.price.toLocaleString('vi-VN')}₫
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice.toLocaleString('vi-VN')}₫
              </span>
            )}
          </div>

          {product.inStock ? (
            <p className="text-xs text-green-600 mt-2">✓ Còn hàng</p>
          ) : (
            <p className="text-xs text-red-600 mt-2">✗ Hết hàng</p>
          )}
        </div>
      </div>
    </Link>
  );
}
