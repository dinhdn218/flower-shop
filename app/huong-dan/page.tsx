import { Metadata } from 'next';
import { ShoppingCart, CreditCard, Truck, Heart, Calendar, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hướng Dẫn Đặt Hoa | Amor Florist',
  description: 'Hướng dẫn chi tiết cách đặt hoa tại Amor Florist - Đơn giản, nhanh chóng và tiện lợi',
};

export default function HuongDanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hướng Dẫn Đặt Hoa
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Đặt hoa tại Amor Florist chỉ với 5 bước đơn giản. Hãy cùng tìm hiểu cách thức đặt hoa nhanh chóng và thuận tiện nhất!
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Bước 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-pink-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Chọn Sản Phẩm Yêu Thích</h2>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Duyệt qua bộ sưu tập hoa đa dạng của chúng tôi và chọn những bó hoa phù hợp với dịp và ý nghĩa bạn muốn gửi gắm.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Hoa sinh nhật:</strong> Tươi vui, rực rỡ cho ngày đặc biệt</li>
                    <li><strong>Hoa tình yêu:</strong> Lãng mạn, ngọt ngào cho nửa kia</li>
                    <li><strong>Hoa cưới:</strong> Sang trọng, tinh tế cho ngày trọng đại</li>
                    <li><strong>Hoa chúc mừng:</strong> Tươi đẹp cho mọi dịp kỷ niệm</li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Link href="/" className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-lg hover:bg-pink-200 transition text-sm font-medium">
                      Xem Tất Cả Sản Phẩm
                    </Link>
                    <Link href="/ban-chay" className="inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-lg hover:bg-rose-200 transition text-sm font-medium">
                      Sản Phẩm Bán Chạy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bước 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingCart className="w-6 h-6 text-blue-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Thêm Vào Giỏ Hàng</h2>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Sau khi chọn được sản phẩm ưng ý, nhấn nút <strong>"Thêm vào giỏ hàng"</strong> để lưu lại.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Bạn có thể thêm nhiều sản phẩm khác nhau vào giỏ hàng</li>
                    <li>Điều chỉnh số lượng sản phẩm theo nhu cầu</li>
                    <li>Xem chi tiết giá và tạm tính ngay trong giỏ hàng</li>
                    <li>Xóa sản phẩm không mong muốn dễ dàng</li>
                  </ul>
                  <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <p className="text-sm">
                      <strong>💡 Mẹo:</strong> Bạn cũng có thể thêm sản phẩm vào danh sách yêu thích để mua sau bằng cách nhấn vào biểu tượng trái tim!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bước 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-green-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Điền Thông Tin Giao Hàng</h2>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Tại trang thanh toán, vui lòng cung cấp đầy đủ thông tin để chúng tôi có thể giao hoa đúng hẹn.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">Thông tin cần thiết:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Họ tên người nhận:</strong> Tên đầy đủ của người nhận hoa</li>
                      <li><strong>Số điện thoại:</strong> Để liên hệ khi giao hàng</li>
                      <li><strong>Địa chỉ giao hàng:</strong> Địa chỉ cụ thể (số nhà, đường, phường/xã, quận/huyện, thành phố)</li>
                      <li><strong>Email:</strong> Để nhận xác nhận đơn hàng</li>
                      <li><strong>Ngày giao hàng:</strong> Chọn ngày bạn muốn giao (tối thiểu trước 3 giờ)</li>
                      <li><strong>Khung giờ giao:</strong> Buổi sáng (8-12h) hoặc buổi chiều (14-18h)</li>
                      <li><strong>Lời nhắn thiệp:</strong> Lời nhắn gửi đến người nhận (tối đa 200 ký tự)</li>
                    </ul>
                  </div>
                  <div className="mt-4 bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <p className="text-sm">
                      <strong>⚠️ Lưu ý:</strong> Vui lòng kiểm tra kỹ thông tin trước khi đặt hàng. Địa chỉ và số điện thoại chính xác giúp đơn hàng được giao nhanh và đúng hẹn!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bước 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6 text-purple-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Chọn Phương Thức Thanh Toán</h2>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Chúng tôi hỗ trợ nhiều hình thức thanh toán linh hoạt để bạn lựa chọn:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {/* COD */}
                    <div className="border-2 border-purple-200 rounded-lg p-4 hover:border-purple-500 transition">
                      <h4 className="font-bold text-purple-700 mb-2">💵 COD</h4>
                      <p className="text-sm text-gray-600">
                        Thanh toán tiền mặt khi nhận hàng. An toàn và tiện lợi.
                      </p>
                    </div>
                    {/* Chuyển khoản */}
                    <div className="border-2 border-purple-200 rounded-lg p-4 hover:border-purple-500 transition">
                      <h4 className="font-bold text-purple-700 mb-2">🏦 Chuyển Khoản</h4>
                      <p className="text-sm text-gray-600">
                        Chuyển khoản qua ngân hàng. Nhận thông tin tài khoản sau khi đặt hàng.
                      </p>
                    </div>
                    {/* MoMo */}
                    <div className="border-2 border-purple-200 rounded-lg p-4 hover:border-purple-500 transition">
                      <h4 className="font-bold text-purple-700 mb-2">📱 Ví MoMo</h4>
                      <p className="text-sm text-gray-600">
                        Thanh toán qua ví điện tử MoMo nhanh chóng và bảo mật.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <p className="text-sm">
                      <strong>🎁 Ưu đãi:</strong> Giảm 50,000đ cho đơn hàng thanh toán online đầu tiên và miễn phí giao hàng cho đơn từ 500,000đ trong nội thành!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bước 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-6 h-6 text-rose-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Xác Nhận & Nhận Hàng</h2>
                </div>
                <div className="space-y-3 text-gray-700">
                  <p>
                    Sau khi đặt hàng thành công, chúng tôi sẽ xử lý và giao hàng theo lịch hẹn.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-rose-100 p-2 rounded">
                        <MessageCircle className="w-5 h-5 text-rose-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Xác nhận đơn hàng</h4>
                        <p className="text-sm text-gray-600">
                          Chúng tôi sẽ gọi điện xác nhận đơn hàng trong vòng 15-30 phút sau khi đặt hàng.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-rose-100 p-2 rounded">
                        <ShoppingCart className="w-5 h-5 text-rose-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Chuẩn bị hoa</h4>
                        <p className="text-sm text-gray-600">
                          Florist của chúng tôi sẽ tiến hành chuẩn bị, thiết kế và đóng gói hoa cẩn thận.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-rose-100 p-2 rounded">
                        <Truck className="w-5 h-5 text-rose-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Giao hàng</h4>
                        <p className="text-sm text-gray-600">
                          Shipper sẽ giao hoa đến địa chỉ đã cung cấp đúng khung giờ bạn đã chọn.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-rose-100 p-2 rounded">
                        <Heart className="w-5 h-5 text-rose-600" />
                      </div>
                      <div>
                        <h4 className="font-bold">Nhận hàng & Đánh giá</h4>
                        <p className="text-sm text-gray-600">
                          Kiểm tra sản phẩm khi nhận hàng và chia sẻ trải nghiệm của bạn với chúng tôi!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">Tôi cần đặt hoa trước bao lâu?</summary>
              <p className="mt-3 text-gray-700">
                Để đảm bảo chất lượng hoa tốt nhất, vui lòng đặt hàng trước ít nhất 3 giờ. Đối với các dịp đặc biệt như Valentine, 20/10, 8/3, nên đặt trước 1-2 ngày.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">Tôi có thể đổi thời gian giao hàng không?</summary>
              <p className="mt-3 text-gray-700">
                Có, bạn có thể liên hệ với chúng tôi để thay đổi thời gian giao hàng trước khi đơn hàng được giao. Vui lòng thông báo sớm để chúng tôi sắp xếp hợp lý.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">Nếu hoa không đẹp như hình thì sao?</summary>
              <p className="mt-3 text-gray-700">
                Chúng tôi cam kết hoa tươi 100% và đúng như mô tả. Nếu có bất kỳ vấn đề nào, vui lòng liên hệ ngay trong vòng 2 giờ sau khi nhận hàng để được đổi trả hoặc hoàn tiền.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">Tôi có thể gửi hoa giấu tên không?</summary>
              <p className="mt-3 text-gray-700">
                Có, bạn có thể không ghi tên người gửi trong phần lời nhắn thiệp. Tuy nhiên, chúng tôi vẫn cần thông tin liên hệ của bạn để xác nhận đơn hàng.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
              <summary className="font-bold text-lg text-gray-900">Làm sao để hoa tươi lâu hơn?</summary>
              <p className="mt-3 text-gray-700">
                - Cắt chéo gốc hoa 2-3cm trước khi cắm<br />
                - Thay nước sạch mỗi ngày<br />
                - Tránh ánh nắng trực tiếp và nhiệt độ cao<br />
                - Loại bỏ lá úa, cánh héo thường xuyên<br />
                - Giữ hoa ở nơi thoáng mát
              </p>
            </details>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn Sàng Đặt Hoa?</h2>
          <p className="text-lg mb-6">
            Hãy bắt đầu chọn những bó hoa tuyệt đẹp để gửi tặng người thân yêu ngay hôm nay!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-white text-rose-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition inline-block"
            >
              Xem Sản Phẩm
            </Link>
            <Link
              href="/lien-he"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-rose-600 transition inline-block"
            >
              Cần Hỗ Trợ?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
