import Link from "next/link";
import { Flower2, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
const links = [
  ["Về Amor", "/ve-chung-toi"],
  ["Liên hệ", "/lien-he"],
  ["Chính sách", "/chinh-sach"],
  ["Hướng dẫn đặt hoa", "/huong-dan"],
];
const social = [
  ["Instagram", "https://www.instagram.com/amor.florist_/"],
  ["Threads", "https://www.threads.com/@amor.florist_"],
  ["TikTok", "https://www.tiktok.com/@amor.florist_"],
  ["Facebook", "https://www.facebook.com/profile.php?id=61581982089930"],
];
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Flower2 size={39} strokeWidth={1} />
            <span>
              amor<small>FLORIST & LOVE</small>
            </span>
          </Link>
          <p>
            Một bó hoa, một lời thương. Amor nâng niu từng cánh hoa để cùng bạn
            gửi trao những điều thật lòng.
          </p>
          <div className="footer-socials">
            {social.map(([label, href]) => (
              <a
                href={href}
                key={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2>Ghé thăm Amor</h2>
          <nav aria-label="Liên kết cuối trang">
            {links.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2>Kết nối cùng chúng mình</h2>
          <address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=130+Nguyen+Khoai+Hai+Ba+Trung+Ha+Noi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={17} />
              <span>130 Nguyễn Khoái, Hai Bà Trưng, Hà Nội</span>
            </a>
            <a href="tel:0869867694">
              <Phone size={17} />
              <span>086 986 7694</span>
            </a>
            <a href="mailto:kewoanh07@gmail.com">
              <Mail size={17} />
              <span>kewoanh07@gmail.com</span>
            </a>
          </address>
          <div className="footer-hours">
            <span>CHỜ BẠN GHÉ CHƠI</span>
            <p>Thứ 2 – Chủ nhật · 8:00 – 21:00</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Amor Florist. Tiệm hoa của tình yêu.</span>
        <span>Gói ghém yêu thương, từ Hà Nội.</span>
      </div>
    </footer>
  );
}
