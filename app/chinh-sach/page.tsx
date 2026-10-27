import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle,
  Lock,
  Phone,
  RefreshCw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Chính Sách | Amor Florist",
  description: "Chính sách bán hàng, giao hàng và bảo mật của Amor Florist",
};

export default function ChinhSachPage() {
  return (
    <div className="information-page">
      <PageIntro
        title="An tâm gửi trao cùng Amor."
        description="Những thông tin về đặt hoa, giao hàng, đổi trả và bảo mật để bạn yên tâm chọn quà."
        eyebrow="CHÍNH SÁCH AMOR"
        crumb="Chính sách"
      />
      <div className="information-content">
        <div className="information-articles">
          <article className="information-article">
            <span className="information-marker">
              <ShieldCheck size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <h2>Chính sách bán hàng</h2>
              <p>
                <strong>Giá sản phẩm:</strong> Tất cả giá sản phẩm đã bao gồm
                thuế VAT. Giá có thể thay đổi tùy thuộc vào mùa và nguồn cung
                hoa.
              </p>
              <p>
                <strong>Hình ảnh sản phẩm:</strong> Hình ảnh chỉ mang tính chất
                minh họa. Sản phẩm thực tế có thể có sự khác biệt nhỏ về màu sắc
                và hoa lá tùy theo nguồn hoa tươi hiện có.
              </p>
              <p>
                <strong>Đặt hàng:</strong> Quý khách vui lòng đặt hàng trước ít
                nhất 3 giờ để chúng tôi có thời gian chuẩn bị hoa tươi đẹp nhất.
              </p>
              <p>
                <strong>Thanh toán:</strong> Chúng tôi chấp nhận thanh toán qua
                COD, chuyển khoản ngân hàng và ví điện tử MoMo.
              </p>
            </div>
          </article>

          <article className="information-article">
            <span className="information-marker">
              <Truck size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <h2>Chính sách giao hàng</h2>
              <p>
                <strong>Khu vực giao hàng:</strong> Chúng tôi giao hàng toàn
                quốc. Phí vận chuyển được tính dựa trên khoảng cách và địa điểm
                giao hàng.
              </p>
              <p>
                <strong>Thời gian giao hàng:</strong>
              </p>
              <ul className="information-list">
                <li>Nội thành: 2-4 giờ kể từ khi đặt hàng</li>
                <li>Ngoại thành: 4-8 giờ kể từ khi đặt hàng</li>
                <li>Các tỉnh khác: 1-2 ngày làm việc</li>
              </ul>
              <p>
                <strong>Giao hàng theo giờ:</strong> Quý khách có thể chọn khung
                giờ giao hàng mong muốn. Chúng tôi sẽ cố gắng giao đúng giờ, tuy
                nhiên có thể chênh lệch ±30 phút do điều kiện giao thông.
              </p>
              <p>
                <strong>Phí giao hàng:</strong> Miễn phí giao hàng cho đơn hàng
                trên 500,000đ trong nội thành. Phí giao hàng sẽ được thông báo
                trước khi xác nhận đơn hàng.
              </p>
            </div>
          </article>

          <article className="information-article">
            <span className="information-marker">
              <RefreshCw size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <h2>Chính sách đổi trả</h2>
              <p>
                <strong>Điều kiện đổi trả:</strong> Chúng tôi chấp nhận đổi trả
                trong các trường hợp sau:
              </p>
              <ul className="information-list">
                <li>Sản phẩm bị hư hỏng trong quá trình vận chuyển</li>
                <li>Sản phẩm không đúng như mô tả hoặc đơn hàng</li>
                <li>Hoa bị héo, không tươi khi nhận hàng</li>
                <li>Giao sai địa chỉ hoặc sai thời gian do lỗi của shop</li>
              </ul>
              <p>
                <strong>Thời gian đổi trả:</strong> Quý khách vui lòng thông báo
                ngay trong vòng 2 giờ kể từ khi nhận hàng.
              </p>
              <p>
                <strong>Quy trình đổi trả:</strong>
              </p>
              <ol className="information-list">
                <li>Liên hệ với chúng tôi qua hotline hoặc trang liên hệ</li>
                <li>Cung cấp hình ảnh sản phẩm và mã đơn hàng</li>
                <li>Chúng tôi sẽ xác nhận và đổi sản phẩm mới hoặc hoàn tiền</li>
              </ol>
              <p className="information-note">
                <strong>Lưu ý:</strong> Chúng tôi không chấp nhận đổi trả nếu
                lỗi do khách hàng cung cấp sai thông tin địa chỉ hoặc không có
                người nhận hàng.
              </p>
            </div>
          </article>

          <article className="information-article">
            <span className="information-marker">
              <Lock size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <h2>Chính sách bảo mật</h2>
              <p>
                <strong>Thu thập thông tin:</strong> Chúng tôi chỉ thu thập
                thông tin cần thiết để xử lý đơn hàng (họ tên, số điện thoại,
                địa chỉ, email).
              </p>
              <p>
                <strong>Sử dụng thông tin:</strong> Thông tin của quý khách chỉ
                được sử dụng cho mục đích:
              </p>
              <ul className="information-list">
                <li>Xử lý và giao đơn hàng</li>
                <li>Liên hệ xác nhận đơn hàng</li>
                <li>Gửi thông tin khuyến mãi (nếu quý khách đồng ý)</li>
                <li>Cải thiện dịch vụ khách hàng</li>
              </ul>
              <p>
                <strong>Bảo vệ thông tin:</strong> Chúng tôi cam kết bảo mật
                tuyệt đối thông tin cá nhân của quý khách và không chia sẻ với
                bên thứ ba khi chưa có sự đồng ý.
              </p>
              <p>
                <strong>Quyền của khách hàng:</strong> Quý khách có quyền yêu
                cầu xem, chỉnh sửa hoặc xóa thông tin cá nhân bất cứ lúc nào
                bằng cách liên hệ với chúng tôi.
              </p>
            </div>
          </article>

          <article className="information-article">
            <span className="information-marker">
              <CheckCircle size={22} strokeWidth={1.3} />
            </span>
            <div className="information-body">
              <h2>Cam kết chất lượng</h2>
              <ul className="information-list">
                <li>Hoa tươi 100%, nhập khẩu từ các nông trại uy tín</li>
                <li>Thiết kế và chăm chút tỉ mỉ từng chi tiết</li>
                <li>Đóng gói cẩn thận, đảm bảo hoa nguyên vẹn khi giao</li>
                <li>Giao hàng đúng giờ, đúng địa chỉ</li>
                <li>Hỗ trợ khách hàng 24/7</li>
                <li>Hoàn tiền 100% nếu không hài lòng về chất lượng</li>
              </ul>
            </div>
          </article>
        </div>
      </div>

      <section className="consultation">
        <div>
          <span className="eyebrow">AMOR LUÔN Ở ĐÂY</span>
          <h2>Còn thắc mắc?</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về chính sách của chúng tôi, vui lòng
            liên hệ với chúng tôi.
          </p>
        </div>
        <div className="consultation-actions">
          <Link href="/lien-he" className="botanical-button">
            Liên hệ ngay <ArrowRight size={17} />
          </Link>
          <a href="tel:0869867694" className="text-link">
            <Phone size={16} />
            Gọi 086 986 7694
          </a>
        </div>
      </section>
    </div>
  );
}
