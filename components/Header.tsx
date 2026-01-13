'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, Phone, Heart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import { categories } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { getTotalItems: getWishlistTotal } = useWishlist();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-pink-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:0869867694" className="flex items-center gap-1 hover:underline">
                <Phone size={14} />
                <span>086 986 7694</span>
              </a>
              <span className="hidden md:inline">Giao hoa nhanh trong 90 phút</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">Miễn phí giao hàng bán kính 5km</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-bold text-pink-600">
            🌸 Amor Florist
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/" className="hover:text-pink-600 transition">
              Trang Chủ
            </Link>
            <div className="relative group">
              <button className="hover:text-pink-600 transition">
                Danh Mục
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/hoa-sinh-nhat" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition">
                    🎂 Hoa Sinh Nhật
                  </Link>
                  {/* <Link href="/hoa-khai-truong" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition">
                    🎉 Hoa Khai Trương
                  </Link> */}
                  <Link href="/hoa-tinh-yeu" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition">
                    💖 Hoa Tình Yêu
                  </Link>
                  <Link href="/hoa-cuoi" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition">
                    👰 Hoa Cưới
                  </Link>
                  <Link href="/hoa-tot-nghiep" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition">
                    🎓 Hoa Tốt Nghiệp
                  </Link>
                  <Link href="/hoa-chuc-mung" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition">
                    🎊 Hoa Chúc Mừng
                  </Link>
                  {/* <Link href="/hoa-chia-buon" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition">
                    🕊️ Hoa Chia Buồn
                  </Link> */}
                  <Link href="/hoa-bo" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600 transition">
                    💐 Hoa Bó
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/ve-chung-toi" className="hover:text-pink-600 transition">
              Về Chúng Tôi
            </Link>
            <Link href="/lien-he" className="hover:text-pink-600 transition">
              Liên Hệ
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hover:text-pink-600 transition">
              <Search size={22} />
            </button>
            <Link href="/yeu-thich" className="relative hover:text-pink-600 transition">
              <Heart size={22} />
              {getWishlistTotal() > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getWishlistTotal()}
                </span>
              )}
            </Link>
            <Link href="/gio-hang" className="relative hover:text-pink-600 transition">
              <ShoppingCart size={22} />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-pink-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang Chủ
            </Link>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Danh Mục</span>
              <Link href="/hoa-sinh-nhat" className="pl-4 hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>
                🎂 Hoa Sinh Nhật
              </Link>
              <Link href="/hoa-khai-truong" className="pl-4 hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>
                🎉 Hoa Khai Trương
              </Link>
              <Link href="/hoa-tinh-yeu" className="pl-4 hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>
                💖 Hoa Tình Yêu
              </Link>
              <Link href="/hoa-cuoi" className="pl-4 hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>
                👰 Hoa Cưới
              </Link>
              <Link href="/hoa-tot-nghiep" className="pl-4 hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>
                🎓 Hoa Tốt Nghiệp
              </Link>
              <Link href="/hoa-chuc-mung" className="pl-4 hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>
                🎊 Hoa Chúc Mừng
              </Link>
              <Link href="/hoa-chia-buon" className="pl-4 hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>
                🕊️ Hoa Chia Buồn
              </Link>
              <Link href="/hoa-bo" className="pl-4 hover:text-pink-600 transition" onClick={() => setIsMenuOpen(false)}>
                💐 Hoa Bó
              </Link>
            </div>
            <Link
              href="/ve-chung-toi"
              className="hover:text-pink-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Về Chúng Tôi
            </Link>
            <Link
              href="/lien-he"
              className="hover:text-pink-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Liên Hệ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
