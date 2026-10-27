import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";
export const metadata = { title: "Liên hệ — Amor Florist" };
export default function ContactPage() {
  return (
    <div className="editorial-page">
      <PageIntro
        title="Amor luôn sẵn lòng lắng nghe."
        description="Một câu hỏi, một ý tưởng hay một lời thương muốn gửi. Chúng mình ở đây để cùng bạn chọn hoa."
        eyebrow="KẾT NỐI VỚI AMOR"
      />
      <section className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow">GHÉ TIỆM HAY NHẮN CHÚNG MÌNH</span>
          <h2>Mình trò chuyện nhé?</h2>
          <p>
            Ghé Amor để ngắm hoa, hoặc kết nối theo cách bạn thấy thoải mái
            nhất.
          </p>
          <div className="contact-details">
            {[
              {
                icon: MapPin,
                label: "Ghé thăm tiệm",
                text: "130 Nguyễn Khoái, Hai Bà Trưng, Hà Nội",
                href: "https://www.google.com/maps/search/?api=1&query=130+Nguyen+Khoai+Hai+Ba+Trung+Ha+Noi",
              },
              {
                icon: Phone,
                label: "Gọi Amor",
                text: "086 986 7694",
                href: "tel:0869867694",
              },
              {
                icon: Mail,
                label: "Viết cho chúng mình",
                text: "kewoanh07@gmail.com",
                href: "mailto:kewoanh07@gmail.com",
              },
            ].map(({ icon: Icon, label, text, href }) => (
              <a href={href} key={label}>
                <Icon size={22} strokeWidth={1.3} />
                <span>
                  <small>{label}</small>
                  <strong>{text}</strong>
                </span>
                <ArrowUpRight size={16} />
              </a>
            ))}
            <div>
              <Clock size={22} strokeWidth={1.3} />
              <span>
                <small>Giờ mở cửa</small>
                <strong>Thứ 2 – Chủ nhật · 8:00 – 21:00</strong>
              </span>
            </div>
          </div>
          <div className="contact-direct">
            <a
              className="botanical-button"
              href="https://zalo.me/0869867694"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nhắn Zalo <ArrowUpRight size={17} />
            </a>
            <a
              className="text-link"
              href="https://m.me/61581982089930"
              target="_blank"
              rel="noopener noreferrer"
            >
              Messenger <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="contact-socials">
            <a
              href="https://www.instagram.com/amor.florist_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.threads.com/@amor.florist_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Threads ↗
            </a>
            <a
              href="https://www.tiktok.com/@amor.florist_"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok ↗
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61581982089930"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook ↗
            </a>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="contact-map">
        <div>
          <span className="eyebrow">HẸN BẠN Ở TIỆM</span>
          <h2>Một góc nhỏ giữa lòng Hà Nội.</h2>
        </div>
        <iframe
          title="Bản đồ tiệm Amor Florist tại 130 Nguyễn Khoái, Hà Nội"
          src="https://maps.google.com/maps?q=130%20Nguyen%20Khoai%20Hai%20Ba%20Trung%20Ha%20Noi&t=&z=16&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </section>
    </div>
  );
}
