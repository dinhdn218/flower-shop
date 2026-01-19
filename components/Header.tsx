'use client';

import Link from 'next/link';
import { ShoppingCart, Search, Menu, X, Phone, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/lib/cart-context';
import { useWishlist } from '@/lib/wishlist-context';
import { categories } from '@/lib/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { getTotalItems } = useCart();
  const { getTotalItems: getWishlistTotal } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-white shadow-sm'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-pink-600 via-pink-500 to-rose-500 text-white py-2.5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4 animate-fade-in">
              <a href="tel:0869867694" className="flex items-center gap-1.5 hover:scale-105 transition-transform">
                <Phone size={14} className="animate-pulse" />
                <span className="font-medium">086 986 7694</span>
              </a>
              <span className="hidden md:inline">🚚 Giao hoa nhanh trong 90 phút</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline">🎁 Miễn phí giao hàng bán kính 5km</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              🌸 Amor Florist
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="relative group font-medium text-gray-700 hover:text-pink-600 transition-colors">
              <span>Trang Chủ</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="relative group">
              <button className="font-medium text-gray-700 hover:text-pink-600 transition-colors">
                Danh Mục
              </button>
              <div className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 -translate-y-2">
                <div className="py-3">
                  <Link href="/hoa-sinh-nhat" className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all rounded-lg mx-2 font-medium">
                    🎂 Hoa Sinh Nhật
                  </Link>
                  {/* <Link href="/hoa-khai-truong" className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all rounded-lg mx-2 font-medium">
                    🎉 Hoa Khai Trương
                  </Link> */}
                  <Link href="/hoa-tinh-yeu" className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all rounded-lg mx-2 font-medium">
                    💖 Hoa Tình Yêu
                  </Link>
                  <Link href="/hoa-cuoi" className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all rounded-lg mx-2 font-medium">
                    👰 Hoa Cưới
                  </Link>
                  <Link href="/hoa-tot-nghiep" className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all rounded-lg mx-2 font-medium">
                    🎓 Hoa Tốt Nghiệp
                  </Link>
                  <Link href="/hoa-chuc-mung" className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all rounded-lg mx-2 font-medium">
                    🎊 Hoa Chúc Mừng
                  </Link>
                  {/* <Link href="/hoa-chia-buon" className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all rounded-lg mx-2 font-medium">
                    🕊️ Hoa Chia Buồn
                  </Link> */}
                  <Link href="/hoa-bo" className="block px-5 py-2.5 hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all rounded-lg mx-2 font-medium">
                    💐 Hoa Bó
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/ve-chung-toi" className="relative group font-medium text-gray-700 hover:text-pink-600 transition-colors">
              <span>Về Chúng Tôi</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/lien-he" className="relative group font-medium text-gray-700 hover:text-pink-600 transition-colors">
              <span>Liên Hệ</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-600 to-rose-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* <button className="hover:text-pink-600 transition hover:scale-110">
              <Search size={22} />
            </button> */}
            <Link href="/yeu-thich" className="relative group">
              <div className="p-2 rounded-full hover:bg-pink-50 transition-all group-hover:scale-110">
                <Heart size={22} className="text-gray-700 group-hover:text-pink-600 transition-colors" />
                {getWishlistTotal() > 0 && (
                  <span className="absolute top-0 right-0 bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce">
                    {getWishlistTotal()}
                  </span>
                )}
              </div>
            </Link>
            <Link href="/gio-hang" className="relative group">
              <div className="p-2 rounded-full hover:bg-pink-50 transition-all group-hover:scale-110">
                <ShoppingCart size={22} className="text-gray-700 group-hover:text-pink-600 transition-colors" />
                {getTotalItems() > 0 && (
                  <span className="absolute top-0 right-0 bg-gradient-to-r from-pink-600 to-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-bounce">
                    {getTotalItems()}
                  </span>
                )}
              </div>
            </Link>
            <button
              className="lg:hidden p-2 hover:bg-pink-50 rounded-full transition-all hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-gray-700" /> : <Menu size={24} className="text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 animate-slide-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            <Link
              href="/"
              className="font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Trang Chủ
            </Link>
            <div className="flex flex-col gap-2">
              <span className="font-bold text-gray-800 px-4 py-1">Danh Mục</span>
              <Link href="/hoa-sinh-nhat" className="pl-8 py-2 pr-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all" onClick={() => setIsMenuOpen(false)}>
                🎂 Hoa Sinh Nhật
              </Link>
              <Link href="/hoa-khai-truong" className="pl-8 py-2 pr-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all" onClick={() => setIsMenuOpen(false)}>
                🎉 Hoa Khai Trương
              </Link>
              <Link href="/hoa-tinh-yeu" className="pl-8 py-2 pr-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all" onClick={() => setIsMenuOpen(false)}>
                💖 Hoa Tình Yêu
              </Link>
              <Link href="/hoa-cuoi" className="pl-8 py-2 pr-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all" onClick={() => setIsMenuOpen(false)}>
                👰 Hoa Cưới
              </Link>
              <Link href="/hoa-tot-nghiep" className="pl-8 py-2 pr-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all" onClick={() => setIsMenuOpen(false)}>
                🎓 Hoa Tốt Nghiệp
              </Link>
              <Link href="/hoa-chuc-mung" className="pl-8 py-2 pr-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all" onClick={() => setIsMenuOpen(false)}>
                🎊 Hoa Chúc Mừng
              </Link>
              <Link href="/hoa-chia-buon" className="pl-8 py-2 pr-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all" onClick={() => setIsMenuOpen(false)}>
                🕊️ Hoa Chia Buồn
              </Link>
              <Link href="/hoa-bo" className="pl-8 py-2 pr-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all" onClick={() => setIsMenuOpen(false)}>
                💐 Hoa Bó
              </Link>
            </div>
            <Link
              href="/ve-chung-toi"
              className="font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Về Chúng Tôi
            </Link>
            <Link
              href="/lien-he"
              className="font-medium py-2 px-4 rounded-lg hover:bg-gradient-to-r hover:from-pink-50 hover:to-rose-50 hover:text-pink-600 transition-all"
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
