"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Flower2, MessageCircle, Phone, X } from "lucide-react";

export default function ChatWidgets() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        !panelRef.current?.contains(event.target as Node) &&
        !triggerRef.current?.contains(event.target as Node)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <div className="amor-chat">
      {open && (
        <div
          className="chat-panel"
          id="amor-contact-panel"
          ref={panelRef}
          role="region"
          aria-labelledby="chat-title"
        >
          <button
            className="chat-close"
            aria-label="Đóng tư vấn"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
          >
            <X size={18} />
          </button>
          <Flower2 size={32} strokeWidth={1} />
          <span className="eyebrow">AMOR LUÔN Ở ĐÂY</span>
          <h2 id="chat-title">Mình chọn hoa cùng nhau nhé?</h2>
          <p>Một lời nhắn nhỏ, để Amor hiểu điều bạn muốn gửi trao.</p>
          <div className="chat-channels">
            {[
              {
                title: "Nhắn Amor qua Zalo",
                text: "Tư vấn chọn hoa & đặt hàng",
                href: "https://zalo.me/0869867694",
                icon: MessageCircle,
              },
              {
                title: "Trò chuyện trên Messenger",
                text: "Kể Amor nghe câu chuyện của bạn",
                href: "https://m.me/61581982089930",
                icon: MessageCircle,
              },
              {
                title: "Gọi 086 986 7694",
                text: "Trao đổi trực tiếp với Amor",
                href: "tel:0869867694",
                icon: Phone,
              },
            ].map(({ title, text, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("https") ? "_blank" : undefined}
                rel={
                  href.startsWith("https") ? "noopener noreferrer" : undefined
                }
              >
                <span className="chat-channel-icon">
                  <Icon size={20} strokeWidth={1.4} />
                </span>
                <span>
                  <strong>{title}</strong>
                  <small>{text}</small>
                </span>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>
          <span className="chat-signoff">
            Chăm chút từng cánh hoa, nâng niu từng lời thương.
          </span>
        </div>
      )}
      <button
        className="chat-trigger"
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Đóng tư vấn" : "Liên hệ tư vấn chọn hoa"}
        aria-expanded={open}
        aria-controls="amor-contact-panel"
      >
        {open ? (
          <X size={23} strokeWidth={1.5} />
        ) : (
          <MessageCircle size={23} strokeWidth={1.5} />
        )}
      </button>
    </div>
  );
}
