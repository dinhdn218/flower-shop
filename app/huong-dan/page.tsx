import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Banknote,
  Calendar,
  ChevronDown,
  CreditCard,
  Flower2,
  Heart,
  Landmark,
  MessageCircle,
  ShoppingCart,
  Smartphone,
  Truck,
} from "lucide-react";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Hướng Dẫn Đặt Hoa | Amor Florist",
  description:
    "Hướng dẫn chi tiết cách đặt hoa tại Amor Florist - Đơn giản, nhanh chóng và tiện lợi",
};

const faqs = [
  {
    question: "Tôi cần đặt hoa trước bao lâu?",
    answer:
      "Để đảm bảo chất lượng hoa tốt nhất, vui lòng đặt hàng trước ít nhất 3 giờ. Đối với các dịp đặc biệt như Valentine, 20/10, 8/3, nên đặt trước 1-2 ngày.",
  },
  {
    question: "Tôi có thể đổi thời gian giao hàng không?",
    answer:
      "Có, bạn có thể liên hệ với chúng tôi để thay đổi thời gian giao hàng trước khi đơn hàng được giao. Vui lòng thông báo sớm để chúng tôi sắp xếp hợp lý.",
  },
  {
    question: "Nếu hoa không đẹp như hình thì sao?",
    answer:
      "Chúng tôi cam kết hoa tươi 100% và đúng như mô tả. Nếu có bất kỳ vấn đề nào, vui lòng liên hệ ngay trong vòng 2 giờ sau khi nhận hàng để được đổi trả hoặc hoàn tiền.",
  },
  {
    question: "Tôi có thể gửi hoa giấu tên không?",
    answer:
      "Có, bạn có thể không ghi tên người gửi trong phần lời nhắn thiệp. Tuy nhiên, chúng tôi vẫn cần thông tin liên hệ của bạn để xác nhận đơn hàng.",
  },
];

export default function HuongDanPage() {
  return (
    <div className="information-page">
      <PageIntro
        title="Đặt hoa, thật nhẹ nhàng."
        description="Từ chọn một bó hoa đến gửi một lời thương. Amor đồng hành cùng bạn qua từng bước."
        eyebrow="HƯỚNG DẪN ĐẶT HOA"
      />
      <div className="information-content">
        <div className="information-articles">
          <article className="information-article">
            <span className="information-marker">
              <Heart size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <span className="eyebrow">BƯỚC 01</span>
              <h2>Chọn sản phẩm yêu thích</h2>
              <p>
                Duyệt qua bộ sưu tập hoa đa dạng của chúng tôi và chọn những bó
                hoa phù hợp với dịp và ý nghĩa bạn muốn gửi gắm.
              </p>
              <ul className="information-list">
                <li>
                  <strong>Hoa sinh nhật:</strong> Tươi vui, rực rỡ cho ngày đặc
                  biệt
                </li>
                <li>
                  <strong>Hoa tình yêu:</strong> Lãng mạn, ngọt ngào cho nửa kia
                </li>
                <li>
                  <strong>Hoa cưới:</strong> Sang trọng, tinh tế cho ngày trọng
                  đại
                </li>
                <li>
                  <strong>Hoa chúc mừng:</strong> Tươi đẹp cho mọi dịp kỷ niệm
                </li>
              </ul>
              <div className="information-links">
                <Link href="/" className="outline-button">
                  Xem tất cả sản phẩm
                </Link>
                <Link href="/ban-chay" className="outline-button">
                  Sản phẩm bán chạy
                </Link>
              </div>
            </div>
          </article>

          <article className="information-article">
            <span className="information-marker">
              <ShoppingCart size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <span className="eyebrow">BƯỚC 02</span>
              <h2>Thêm vào giỏ hàng</h2>
              <p>
                Sau khi chọn được sản phẩm ưng ý, nhấn nút{" "}
                <strong>&ldquo;Thêm vào giỏ hàng&rdquo;</strong> để lưu lại.
              </p>
              <ul className="information-list">
                <li>Bạn có thể thêm nhiều sản phẩm khác nhau vào giỏ hàng</li>
                <li>Điều chỉnh số lượng sản phẩm theo nhu cầu</li>
                <li>Xem chi tiết giá và tạm tính ngay trong giỏ hàng</li>
                <li>Xóa sản phẩm không mong muốn dễ dàng</li>
              </ul>
              <p className="information-note">
                <strong>Mẹo:</strong> Bạn cũng có thể thêm sản phẩm vào danh
                sách yêu thích để mua sau bằng cách nhấn vào biểu tượng trái
                tim!
              </p>
            </div>
          </article>

          <article className="information-article">
            <span className="information-marker">
              <Calendar size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <span className="eyebrow">BƯỚC 03</span>
              <h2>Điền thông tin giao hàng</h2>
              <p>
                Tại trang thanh toán, vui lòng cung cấp đầy đủ thông tin để
                chúng tôi có thể giao hoa đúng hẹn.
              </p>
              <div className="information-panel">
                <h3>Thông tin cần thiết</h3>
                <ul className="information-list">
                  <li>
                    <strong>Họ tên người nhận:</strong> Tên đầy đủ của người
                    nhận hoa
                  </li>
                  <li>
                    <strong>Số điện thoại:</strong> Để liên hệ khi giao hàng
                  </li>
                  <li>
                    <strong>Địa chỉ giao hàng:</strong> Địa chỉ cụ thể (số nhà,
                    đường, phường/xã, quận/huyện, thành phố)
                  </li>
                  <li>
                    <strong>Email:</strong> Để nhận xác nhận đơn hàng
                  </li>
                  <li>
                    <strong>Ngày giao hàng:</strong> Chọn ngày bạn muốn giao
                    (tối thiểu trước 3 giờ)
                  </li>
                  <li>
                    <strong>Khung giờ giao:</strong> Buổi sáng (8-12h) hoặc
                    buổi chiều (14-18h)
                  </li>
                  <li>
                    <strong>Lời nhắn thiệp:</strong> Lời nhắn gửi đến người
                    nhận (tối đa 200 ký tự)
                  </li>
                </ul>
              </div>
              <p className="information-note">
                <strong>Lưu ý:</strong> Vui lòng kiểm tra kỹ thông tin trước
                khi đặt hàng. Địa chỉ và số điện thoại chính xác giúp đơn hàng
                được giao nhanh và đúng hẹn!
              </p>
            </div>
          </article>

          <article className="information-article">
            <span className="information-marker">
              <CreditCard size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <span className="eyebrow">BƯỚC 04</span>
              <h2>Chọn phương thức thanh toán</h2>
              <p>
                Chúng tôi hỗ trợ nhiều hình thức thanh toán linh hoạt để bạn lựa
                chọn:
              </p>
              <div className="guide-payments">
                {[
                  {
                    icon: Banknote,
                    title: "COD",
                    text: "Thanh toán tiền mặt khi nhận hàng. An toàn và tiện lợi.",
                  },
                  {
                    icon: Landmark,
                    title: "Chuyển khoản",
                    text: "Chuyển khoản qua ngân hàng. Nhận thông tin tài khoản sau khi đặt hàng.",
                  },
                  {
                    icon: Smartphone,
                    title: "Ví MoMo",
                    text: "Thanh toán qua ví điện tử MoMo nhanh chóng và bảo mật.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <article key={title}>
                    <Icon size={24} strokeWidth={1.2} />
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
              <p className="information-note">
                <strong>Ưu đãi:</strong> Giảm 50,000đ cho đơn hàng thanh toán
                online đầu tiên và miễn phí giao hàng cho đơn từ 500,000đ trong
                nội thành!
              </p>
            </div>
          </article>

          <article className="information-article">
            <span className="information-marker">
              <Truck size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <span className="eyebrow">BƯỚC 05</span>
              <h2>Xác nhận &amp; nhận hàng</h2>
              <p>
                Sau khi đặt hàng thành công, chúng tôi sẽ xử lý và giao hàng
                theo lịch hẹn.
              </p>
              <ul className="guide-timeline">
                {[
                  {
                    icon: MessageCircle,
                    title: "Xác nhận đơn hàng",
                    text: "Chúng tôi sẽ gọi điện xác nhận đơn hàng trong vòng 15-30 phút sau khi đặt hàng.",
                  },
                  {
                    icon: Flower2,
                    title: "Chuẩn bị hoa",
                    text: "Florist của chúng tôi sẽ tiến hành chuẩn bị, thiết kế và đóng gói hoa cẩn thận.",
                  },
                  {
                    icon: Truck,
                    title: "Giao hàng",
                    text: "Shipper sẽ giao hoa đến địa chỉ đã cung cấp đúng khung giờ bạn đã chọn.",
                  },
                  {
                    icon: Heart,
                    title: "Nhận hàng & đánh giá",
                    text: "Kiểm tra sản phẩm khi nhận hàng và chia sẻ trải nghiệm của bạn với chúng tôi!",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <li key={title}>
                    <span>
                      <Icon size={19} strokeWidth={1.3} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <section className="information-faq">
          <span className="eyebrow">CÂU HỎI THƯỜNG GẶP</span>
          <h2>Những điều bạn có thể đang băn khoăn.</h2>
          <div className="information-faq-list">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <ChevronDown size={18} strokeWidth={1.4} />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
            <details>
              <summary>
                Làm sao để hoa tươi lâu hơn?
                <ChevronDown size={18} strokeWidth={1.4} />
              </summary>
              <ul className="information-list">
                <li>Cắt chéo gốc hoa 2-3cm trước khi cắm</li>
                <li>Thay nước sạch mỗi ngày</li>
                <li>Tránh ánh nắng trực tiếp và nhiệt độ cao</li>
                <li>Loại bỏ lá úa, cánh héo thường xuyên</li>
                <li>Giữ hoa ở nơi thoáng mát</li>
              </ul>
            </details>
          </div>
        </section>
      </div>

      <section className="consultation">
        <div>
          <span className="eyebrow">SẴN SÀNG GỬI MỘT LỜI THƯƠNG</span>
          <h2>Sẵn sàng đặt hoa?</h2>
          <p>
            Hãy bắt đầu chọn những bó hoa tuyệt đẹp để gửi tặng người thân yêu
            ngay hôm nay!
          </p>
        </div>
        <div className="consultation-actions">
          <Link href="/" className="botanical-button">
            Xem sản phẩm <ArrowRight size={17} />
          </Link>
          <Link href="/lien-he" className="text-link">
            Cần hỗ trợ? <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
