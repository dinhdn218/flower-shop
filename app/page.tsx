import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Truck, Shield, Clock, Gift } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { categories, getFeaturedProducts, getBestSellerProducts, getNewProducts } from '@/lib/data';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const bestSellers = getBestSellerProducts();
  const newProducts = getNewProducts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80"
          alt="Amor Florist"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Amor Florist - Tiệm Hoa Của Tình Yêu
            </h1>
            <p className="text-lg md:text-xl text-white mb-8">
              Mang đến những khoảnh khắc ngọt ngào với hoa tươi đẹp - Giao nhanh trong 90 phút
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/hoa-sinh-nhat"
                className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition inline-flex items-center justify-center gap-2"
              >
                Đặt Hoa Ngay
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/ve-chung-toi"
                className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition inline-flex items-center justify-center border-2 border-pink-600"
              >
                Tìm Hiểu Thêm
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-pink-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Giao Nhanh 90 Phút</h3>
              <p className="text-sm text-gray-600">Đặt gấp trong ngày</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-pink-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Hoa Tươi 100%</h3>
              <p className="text-sm text-gray-600">Cam kết chất lượng</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-pink-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Hỗ Trợ 24/7</h3>
              <p className="text-sm text-gray-600">Tư vấn nhiệt tình</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="text-pink-600" size={32} />
              </div>
              <h3 className="font-semibold mb-2">Ưu Đãi Hấp Dẫn</h3>
              <p className="text-sm text-gray-600">Giảm giá thường xuyên</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Danh Mục Sản Phẩm
            </h2>
            <p className="text-gray-600">Tìm kiếm hoa hoàn hảo cho mọi dịp</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/hoa-sinh-nhat" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80"
                  alt="Hoa Sinh Nhật"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Hoa Sinh Nhật</h3>
                  <p className="text-sm text-center">45 sản phẩm</p>
                </div>
              </div>
            </Link>

            <Link href="/hoa-khai-truong" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=800&q=80"
                  alt="Hoa Khai Trương"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Hoa Khai Trương</h3>
                  <p className="text-sm text-center">32 sản phẩm</p>
                </div>
              </div>
            </Link>

            <Link href="/hoa-tinh-yeu" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80"
                  alt="Hoa Tình Yêu"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Hoa Tình Yêu</h3>
                  <p className="text-sm text-center">67 sản phẩm</p>
                </div>
              </div>
            </Link>

            <Link href="/hoa-cuoi" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
                  alt="Hoa Cưới"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Hoa Cưới</h3>
                  <p className="text-sm text-center">28 sản phẩm</p>
                </div>
              </div>
            </Link>

            <Link href="/hoa-tot-nghiep" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80"
                  alt="Hoa Tốt Nghiệp"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Hoa Tốt Nghiệp</h3>
                  <p className="text-sm text-center">23 sản phẩm</p>
                </div>
              </div>
            </Link>

            <Link href="/hoa-chuc-mung" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80"
                  alt="Hoa Chúc Mừng"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Hoa Chúc Mừng</h3>
                  <p className="text-sm text-center">41 sản phẩm</p>
                </div>
              </div>
            </Link>

            <Link href="/hoa-chia-buon" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1587992989025-c4a1f1a3e2a3?w=800&q=80"
                  alt="Hoa Chia Buồn"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Hoa Chia Buồn</h3>
                  <p className="text-sm text-center">19 sản phẩm</p>
                </div>
              </div>
            </Link>

            <Link href="/hoa-bo" className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="aspect-square relative">
                <Image
                  src="https://images.unsplash.com/photo-1502935467367-715d0f4b8645?w=800&q=80"
                  alt="Hoa Bó"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-center">Hoa Bó</h3>
                  <p className="text-sm text-center">35 sản phẩm</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Sản Phẩm Nổi Bật</h2>
              <Link
                href="/noi-bat"
                className="text-pink-600 hover:text-pink-700 font-semibold flex items-center gap-2"
              >
                Xem tất cả
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Best Sellers */}
      {bestSellers.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Đặt Nhiều Nhất</h2>
              <Link
                href="/ban-chay"
                className="text-pink-600 hover:text-pink-700 font-semibold flex items-center gap-2"
              >
                Xem tất cả
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {bestSellers.slice(0, 8).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New Products */}
      {newProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Sản Phẩm Mới</h2>
              <Link
                href="/san-pham-moi"
                className="text-pink-600 hover:text-pink-700 font-semibold flex items-center gap-2"
              >
                Xem tất cả
                <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {newProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bạn Cần Tư Vấn Chọn Hoa?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Liên hệ ngay với chúng tôi để được hỗ trợ tốt nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0328717972"
              className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Gọi: 032 871 7972
            </a>
            <Link
              href="/lien-he"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition"
            >
              Liên Hệ Ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
