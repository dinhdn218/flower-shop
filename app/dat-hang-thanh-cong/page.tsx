import Link from "next/link";
import { Check, ArrowRight, Phone, Flower2 } from "lucide-react";
export default function OrderSuccessPage() {
  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-mark">
          <Check size={32} strokeWidth={1.3} />
        </div>
        <span className="eyebrow">AMOR ĐÃ NHẬN LỜI THƯƠNG</span>
        <h1>Cảm ơn bạn đã chọn Amor.</h1>
        <p>
          Đơn hoa đã được ghi nhận. Chúng mình sẽ liên hệ với bạn để xác nhận
          thông tin và chuẩn bị món quà thật chỉn chu.
        </p>
        <div className="success-next">
          <Flower2 size={26} strokeWidth={1} />
          <p>Bạn hãy giữ điện thoại bên mình để Amor có thể liên lạc nhé.</p>
        </div>
        <Link href="/noi-bat" className="botanical-button">
          Tiếp tục ngắm hoa <ArrowRight size={16} />
        </Link>
        <a href="tel:0869867694" className="text-link">
          <Phone size={16} />
          Gọi Amor · 086 986 7694
        </a>
      </div>
    </div>
  );
}
