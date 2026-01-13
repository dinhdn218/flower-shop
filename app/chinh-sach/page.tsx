import { Metadata } from 'next';
import { ShieldCheck, Truck, RefreshCw, Lock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chính Sách | Amor Florist',
  description: 'Chính sách bán hàng, giao hàng và bảo mật của Amor Florist',
};

export default function ChinhSachPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Chính Sách của Chúng Tôi
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Amor Florist cam kết mang đến dịch vụ tốt nhất với các chính sách minh bạch và rõ ràng
          </p>
        </div>

        {/* Policy Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Chính sách bán hàng */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-lg">
                <ShieldCheck className="w-6 h-6 text-pink-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Chính Sách Bán Hàng</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Giá sản phẩm:</strong> Tất cả giá sản phẩm đã bao gồm thuế VAT. Giá có thể thay đổi tùy thuộc vào mùa và nguồn cung hoa.
                  </p>
                  <p>
                    <strong>Hình ảnh sản phẩm:</strong> Hình ảnh chỉ mang tính chất minh họa. Sản phẩm thực tế có thể có sự khác biệt nhỏ về màu sắc và hoa lá tùy theo nguồn hoa tươi hiện có.
                  </p>
                  <p>
                    <strong>Đặt hàng:</strong> Quý khách vui lòng đặt hàng trước ít nhất 3 giờ để chúng tôi có thời gian chuẩn bị hoa tươi đẹp nhất.
                  </p>
                  <p>
                    <strong>Thanh toán:</strong> Chúng tôi chấp nhận thanh toán qua COD, chuyển khoản ngân hàng và ví điện tử MoMo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chính sách giao hàng */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Truck className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Chính Sách Giao Hàng</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Khu vực giao hàng:</strong> Chúng tôi giao hàng toàn quốc. Phí vận chuyển được tính dựa trên khoảng cách và địa điểm giao hàng.
                  </p>
                  <p>
                    <strong>Thời gian giao hàng:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nội thành: 2-4 giờ kể từ khi đặt hàng</li>
                    <li>Ngoại thành: 4-8 giờ kể từ khi đặt hàng</li>
                    <li>Các tỉnh khác: 1-2 ngày làm việc</li>
                  </ul>
                  <p>
                    <strong>Giao hàng theo giờ:</strong> Quý khách có thể chọn khung giờ giao hàng mong muốn. Chúng tôi sẽ cố gắng giao đúng giờ, tuy nhiên có thể chênh lệch ±30 phút do điều kiện giao thông.
                  </p>
                  <p>
                    <strong>Phí giao hàng:</strong> Miễn phí giao hàng cho đơn hàng trên 500,000đ trong nội thành. Phí giao hàng sẽ được thông báo trước khi xác nhận đơn hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chính sách đổi trả */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <RefreshCw className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Chính Sách Đổi Trả</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Điều kiện đổi trả:</strong> Chúng tôi chấp nhận đổi trả trong các trường hợp sau:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sản phẩm bị hư hỏng trong quá trình vận chuyển</li>
                    <li>Sản phẩm không đúng như mô tả hoặc đơn hàng</li>
                    <li>Hoa bị héo, không tươi khi nhận hàng</li>
                    <li>Giao sai địa chỉ hoặc sai thời gian do lỗi của shop</li>
                  </ul>
                  <p>
                    <strong>Thời gian đổi trả:</strong> Quý khách vui lòng thông báo ngay trong vòng 2 giờ kể từ khi nhận hàng.
                  </p>
                  <p>
                    <strong>Quy trình đổi trả:</strong>
                  </p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Liên hệ với chúng tôi qua hotline hoặc trang liên hệ</li>
                    <li>Cung cấp hình ảnh sản phẩm và mã đơn hàng</li>
                    <li>Chúng tôi sẽ xác nhận và đổi sản phẩm mới hoặc hoàn tiền</li>
                  </ol>
                  <p className="text-sm text-gray-600 italic">
                    Lưu ý: Chúng tôi không chấp nhận đổi trả nếu lỗi do khách hàng cung cấp sai thông tin địa chỉ hoặc không có người nhận hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Chính sách bảo mật */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Chính Sách Bảo Mật</h2>
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>Thu thập thông tin:</strong> Chúng tôi chỉ thu thập thông tin cần thiết để xử lý đơn hàng (họ tên, số điện thoại, địa chỉ, email).
                  </p>
                  <p>
                    <strong>Sử dụng thông tin:</strong> Thông tin của quý khách chỉ được sử dụng cho mục đích:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Xử lý và giao đơn hàng</li>
                    <li>Liên hệ xác nhận đơn hàng</li>
                    <li>Gửi thông tin khuyến mãi (nếu quý khách đồng ý)</li>
                    <li>Cải thiện dịch vụ khách hàng</li>
                  </ul>
                  <p>
                    <strong>Bảo vệ thông tin:</strong> Chúng tôi cam kết bảo mật tuyệt đối thông tin cá nhân của quý khách và không chia sẻ với bên thứ ba khi chưa có sự đồng ý.
                  </p>
                  <p>
                    <strong>Quyền của khách hàng:</strong> Quý khách có quyền yêu cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân bất cứ lúc nào bằng cách liên hệ với chúng tôi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cam kết chất lượng */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cam Kết Chất Lượng</h2>
                <div className="space-y-3 text-gray-700">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Hoa tươi 100%, nhập khẩu từ các nông trại uy tín</li>
                    <li>Thiết kế và chăm chút tỉ mỉ từng chi tiết</li>
                    <li>Đóng gói cẩn thận, đảm bảo hoa nguyên vẹn khi giao</li>
                    <li>Giao hàng đúng giờ, đúng địa chỉ</li>
                    <li>Hỗ trợ khách hàng 24/7</li>
                    <li>Hoàn tiền 100% nếu không hài lòng về chất lượng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Còn thắc mắc?</h2>
          <p className="mb-6">
            Nếu bạn có bất kỳ câu hỏi nào về chính sách của chúng tôi, vui lòng liên hệ với chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/lien-he"
              className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition"
            >
              Liên Hệ Ngay
            </a>
            <a
              href="tel:0816608668"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition"
            >
              Gọi: 086 986 7694
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
