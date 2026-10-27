import Link from "next/link";
import { Flower2, ArrowRight } from "lucide-react";
export default function NotFound() {
  return (
    <section className="botanical-empty not-found-page">
      <span className="empty-flower">
        <Flower2 size={44} strokeWidth={1} />
      </span>
      <span className="eyebrow">404 · LẠC MỘT CHÚT TRONG VƯỜN HOA</span>
      <h1>Trang bạn tìm đã ghé một nơi khác.</h1>
      <p>
        Để Amor dẫn bạn trở lại với những sắc hoa và những món quà đang đợi được
        gửi trao.
      </p>
      <Link href="/noi-bat" className="botanical-button">
        Về bộ sưu tập <ArrowRight size={17} />
      </Link>
    </section>
  );
}
