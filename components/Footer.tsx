import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Instagram as ThreadsIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              🌸 Amor Florist
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Tiệm hoa của tình yêu - Nơi lưu giữ những khoảnh khắc ngọt ngào. Chúng tôi mang đến những bó hoa tươi đẹp nhất, được chăm chút tỉ mỉ từng chi tiết.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://www.instagram.com/amor.florist_/" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 rounded-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-500 transition-all duration-300 hover:scale-110" title="Instagram">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.threads.com/@amor.florist_" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 rounded-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-500 transition-all duration-300 hover:scale-110" title="Threads">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-400 group-hover:text-white transition-colors" viewBox="0 0 16 16">
                  <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@amor.florist_" target="_blank" rel="noopener noreferrer" className="group p-3 bg-white/5 rounded-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-500 transition-all duration-300 hover:scale-110" title="TikTok">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="mailto:kewoanh07@gmail.com" className="group p-3 bg-white/5 rounded-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-rose-500 transition-all duration-300 hover:scale-110" title="Email">
                <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full"></span>
              Liên Kết
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="group flex items-center gap-2 hover:text-pink-400 transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/ve-chung-toi" className="group flex items-center gap-2 hover:text-pink-400 transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="group flex items-center gap-2 hover:text-pink-400 transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach" className="group flex items-center gap-2 hover:text-pink-400 transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Chính Sách
                </Link>
              </li>
              <li>
                <Link href="/huong-dan" className="group flex items-center gap-2 hover:text-pink-400 transition-all duration-300 hover:translate-x-1">
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Hướng Dẫn Đặt Hoa
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          {/* <div>
            <h3 className="text-white text-lg font-bold mb-4">Danh Mục</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/danh-muc/hoa-sinh-nhat" className="hover:text-pink-400 transition">
                  Hoa Sinh Nhật
                </Link>
              </li>
              <li>
                <Link href="/danh-muc/hoa-tinh-yeu" className="hover:text-pink-400 transition">
                  Hoa Tình Yêu
                </Link>
              </li>
              <li>
                <Link href="/danh-muc/hoa-khai-truong" className="hover:text-pink-400 transition">
                  Hoa Khai Trương
                </Link>
              </li>
              <li>
                <Link href="/danh-muc/hoa-cuoi" className="hover:text-pink-400 transition">
                  Hoa Cưới
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-rose-500 rounded-full"></span>
              Liên Hệ
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-pink-600 transition-all duration-300">
                  <MapPin size={16} className="text-pink-400 group-hover:text-white transition-colors flex-shrink-0" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">130 Nguyễn Khoái, Hai Bà Trưng, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-pink-600 transition-all duration-300">
                  <Phone size={16} className="text-pink-400 group-hover:text-white transition-colors" />
                </div>
                <a href="tel:0869867694" className="text-gray-400 hover:text-pink-400 transition-colors">
                  086 986 7694
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-pink-600 transition-all duration-300">
                  <Mail size={16} className="text-pink-400 group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:kewoanh07@gmail.com" className="text-gray-400 hover:text-pink-400 transition-colors">
                  kewoanh07@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm font-semibold text-white mb-2">⏰ Giờ làm việc:</p>
              <p className="text-xs text-gray-400">Thứ 2 - Chủ Nhật: 8:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-400">
              © 2024 <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent font-semibold">Amor Florist</span> - Tiệm hoa của tình yêu. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">Made with 💖 in Hanoi</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
