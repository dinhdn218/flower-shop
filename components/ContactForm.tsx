"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
export default function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        const values = new FormData(event.currentTarget);
        const body = `Họ tên: ${values.get("name")}\nĐiện thoại: ${values.get("phone")}\nEmail: ${values.get("email")}\n\n${values.get("message")}`;
        window.location.href = `mailto:kewoanh07@gmail.com?subject=${encodeURIComponent(String(values.get("subject") || "Lời nhắn gửi Amor"))}&body=${encodeURIComponent(body)}`;
        setPrepared(true);
      }}
    >
      <span className="eyebrow">MỘT LỜI NHẮN DÀNH CHO AMOR</span>
      <h2>Bạn muốn gửi điều gì?</h2>
      <p>
        Điền lời nhắn bên dưới để soạn email cho chúng mình. Nếu cần đặt hoa
        gấp, bạn nhắn Zalo hoặc gọi Amor nhé.
      </p>
      <div className="contact-form-grid">
        <label>
          Họ và tên
          <input
            name="name"
            autoComplete="name"
            required
            placeholder="Tên của bạn"
          />
        </label>
        <label>
          Số điện thoại
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="Số điện thoại liên hệ"
          />
        </label>
      </div>
      <label>
        Email
        <input
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="Email của bạn"
        />
      </label>
      <label>
        Chủ đề
        <input
          name="subject"
          placeholder="Chọn hoa, đặt hoa hay một lời góp ý…"
        />
      </label>
      <label>
        Lời nhắn
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Kể Amor nghe nhé…"
        />
      </label>
      <button className="botanical-button" type="submit">
        Soạn email gửi Amor <ArrowUpRight size={17} />
      </button>
      <p role="status">
        {prepared
          ? "Hãy hoàn tất và gửi trong ứng dụng email của bạn. Nếu ứng dụng chưa mở, bạn có thể gửi trực tiếp đến kewoanh07@gmail.com."
          : "Nút này mở ứng dụng email để bạn kiểm tra và gửi lời nhắn."}
      </p>
    </form>
  );
}
