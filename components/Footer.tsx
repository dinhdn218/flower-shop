import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Instagram as ThreadsIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">🌸 Amor Florist</h3>
            <p className="text-sm mb-4">
              Tiệm hoa của tình yêu - Nơi lưu giữ những khoảnh khắc ngọt ngào. Chúng tôi mang đến những bó hoa tươi đẹp nhất, được chăm chút tỉ mỉ từng chi tiết.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/amor.florist_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition" title="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.threads.com/@amor.florist_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition" title="Threads">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-threads" viewBox="0 0 16 16">
  <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
</svg>
              </a>
              <a href="https://www.tiktok.com/@amor.florist_" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition" title="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="mailto:kewoanh07@gmail.com" className="hover:text-pink-400 transition" title="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Liên Kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-pink-400 transition">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/ve-chung-toi" className="hover:text-pink-400 transition">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-pink-400 transition">
                  Liên Hệ
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach" className="hover:text-pink-400 transition">
                  Chính Sách
                </Link>
              </li>
              <li>
                <Link href="/huong-dan" className="hover:text-pink-400 transition">
                  Hướng Dẫn Đặt Hoa
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
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
              <li>
                <Link href="/danh-muc/chau-lan-ho-diep" className="hover:text-pink-400 transition">
                  Chậu Lan Hồ Điệp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Liên Hệ</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>130 Nguyễn Khoái, Hai Bà Trưng, Hà Nội</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0869867694" className="hover:text-pink-400 transition">
                  086 986 7694
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:kewoanh07@gmail.com" className="hover:text-pink-400 transition">
                  kewoanh07@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm mb-2">Giờ làm việc:</p>
              <p className="text-xs">Thứ 2 - Chủ Nhật: 8:00 - 21:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© 2024 Amor Florist - Tiệm hoa của tình yêu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
