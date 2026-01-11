import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Về Amor Florist</h1>
          <p className="text-lg opacity-90">
            Tiệm hoa của tình yêu - Nơi lưu giữ những khoảnh khắc ngọt ngào
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Câu Chuyện Của Chúng Tôi
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-4">
                Amor Florist ra đời từ tình yêu và niềm đam mê với những bông hoa tươi đẹp. 
                Chúng tôi tin rằng mỗi bó hoa không chỉ là món quà vật chất, mà còn là cầu nối 
                của tình cảm, là cách để bạn bày tỏ tình yêu thương và sự quan tâm đến những người thân yêu.
              </p>
              <p className="mb-4">
                Với đội ngũ florist tài năng và tâm huyết, chúng tôi luôn chọn lọc những bông hoa 
                tươi nhất, đẹp nhất từ các vườn hoa uy tín. Mỗi bó hoa đều được thiết kế tỉ mỉ, 
                chăm chút từng chi tiết nhỏ để mang đến sản phẩm hoàn hảo nhất cho bạn.
              </p>
              <p>
                "Amor" trong tiếng Tây Ban Nha có nghĩa là "tình yêu". Đó chính là giá trị cốt lõi 
                mà chúng tôi muốn truyền tải qua từng bó hoa - Tình yêu thương, sự chân thành và 
                những khoảnh khắc đáng nhớ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Giá Trị Cốt Lõi
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">💐</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tình Yêu</h3>
              <p className="text-gray-600">
                Mỗi bó hoa được làm ra với tình yêu, chăm chút từng chi tiết nhỏ nhất
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Chất Lượng</h3>
              <p className="text-gray-600">
                Cam kết hoa tươi 100%, được chọn lọc kỹ càng từ những vườn hoa uy tín
              </p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tận Tâm</h3>
              <p className="text-gray-600">
                Phục vụ với trái tim, luôn lắng nghe và thấu hiểu khách hàng
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1+</div>
              <div className="opacity-90">Năm Kinh Nghiệm</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="opacity-90">Khách Hàng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="opacity-90">Mẫu Hoa</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="opacity-90">Hài Lòng</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sẵn Sàng Đặt Hoa?
          </h2>
          <p className="text-gray-600 mb-8">
            Hãy để chúng tôi giúp bạn gửi trao những thông điệp yêu thương
          </p>
          <Link
            href="/"
            className="inline-block bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Đặt Hoa Ngay
          </Link>
        </div>
      </section>
    </div>
  );
}
