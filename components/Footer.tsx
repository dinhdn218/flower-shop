import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

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
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                <Instagram size={20} />
              </a>
              <a href="mailto:info@flowershop.vn" className="hover:text-pink-400 transition">
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
                <span>273 An Dương Vương, Phường 3, Quận 5, TP.HCM</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:0328717972" className="hover:text-pink-400 transition">
                  032 871 7972
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:amorflorist@gmail.com" className="hover:text-pink-400 transition">
                  amorflorist@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm mb-2">Giờ làm việc:</p>
              <p className="text-xs">Thứ 2 - Chủ Nhật: 7:00 - 22:00</p>
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
