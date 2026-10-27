"use client";
import Link from "next/link";
import {
  Flower2,
  ShoppingBag,
  Menu,
  X,
  Heart,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useCartFeedback } from "@/components/CartFeedback";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";
const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/noi-bat", label: "Bộ sưu tập" },
  { href: "/hoa-tinh-yeu", label: "Hoa tình yêu" },
  { href: "/ve-chung-toi", label: "Về Amor" },
  { href: "/lien-he", label: "Liên hệ" },
];
const occasions = [
  { href: "/hoa-sinh-nhat", label: "Hoa sinh nhật" },
  { href: "/hoa-cuoi", label: "Hoa cưới" },
  { href: "/hoa-tot-nghiep", label: "Hoa tốt nghiệp" },
  { href: "/hoa-chuc-mung", label: "Hoa chúc mừng" },
  { href: "/hoa-bo", label: "Hoa bó" },
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const [occasionOpen, setOccasionOpen] = useState(false);
  const occasionMenu = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();
  const { addition } = useCartFeedback();
  const { getTotalItems } = useCart();
  const { getTotalItems: getWishlistTotal } = useWishlist();
  const onOccasionPage = occasions.some((link) => link.href === pathname);

  useEffect(() => {
    if (!occasionOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (!occasionMenu.current?.contains(event.target as Node)) {
        setOccasionOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOccasionOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [occasionOpen]);

  return (
    <header className="shop-header">
      <div className="announcement">
        <span>Một bó hoa nhỏ, một niềm vui thật to.</span>
        <a href="tel:0869867694">
          Giao hoa nhanh 90 phút <ArrowUpRight size={13} />
        </a>
      </div>
      <div className="header-inner">
        <Link
          href="/"
          className="amor-logo"
          aria-label="Amor Florist — Trang chủ"
        >
          <Flower2 size={37} strokeWidth={1.1} />
          <span>
            amor<span className="logo-subtitle">FLORIST & LOVE</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <details
            className="occasion-menu"
            ref={occasionMenu}
            open={occasionOpen}
            onToggle={(event) => setOccasionOpen(event.currentTarget.open)}
          >
            <summary className={onOccasionPage ? "is-current" : undefined}>
              Theo dịp
              <ChevronDown size={15} strokeWidth={1.6} />
            </summary>
            <div>
              {occasions.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOccasionOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        </nav>
        <div className="header-actions">
          <Link
            href="/yeu-thich"
            className="icon-action"
            aria-label={`Yêu thích, ${getWishlistTotal()} sản phẩm`}
          >
            <Heart size={21} strokeWidth={1.4} />
            {getWishlistTotal() > 0 && (
              <span className="cart-count">{getWishlistTotal()}</span>
            )}
          </Link>
          <Link
            href="/gio-hang"
            key={addition?.id ?? "cart"}
            className={`icon-action ${addition ? "cart-just-added" : ""}`}
            aria-label={`Giỏ hàng, ${getTotalItems()} sản phẩm`}
          >
            <ShoppingBag size={21} strokeWidth={1.4} />
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </Link>
          <button
            className="icon-action mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Đóng menu" : "Mở menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Điều hướng điện thoại"
        >
          {[
            { title: null, items: links },
            { title: "Theo dịp", items: occasions },
          ].map(({ title, items }) => (
            <div className="mobile-nav-group" key={title ?? "main"}>
              {title && <span className="eyebrow">{title.toUpperCase()}</span>}
              {items.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <ArrowRight size={15} strokeWidth={1.4} />
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
