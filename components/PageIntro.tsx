import Link from "next/link";
import { Flower2 } from "lucide-react";
export default function PageIntro({
  title,
  description,
  eyebrow = "AMOR FLORIST · GÓI GHÉM YÊU THƯƠNG",
  crumb = title,
  compact = false,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  crumb?: string;
  compact?: boolean;
}) {
  return (
    <>
      <nav className="page-breadcrumb" aria-label="Đường dẫn">
        <Link href="/">Trang chủ</Link>
        <span>/</span>
        <span aria-current="page">{crumb}</span>
      </nav>
      <section className={`collection-intro ${compact ? "is-compact" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {!compact && (
          <Flower2 size={40} strokeWidth={1} className="collection-flower" />
        )}
      </section>
    </>
  );
}
