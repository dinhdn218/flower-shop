import Link from "next/link";
import { Flower2 } from "lucide-react";
export default function PageIntro({
  title,
  description,
  eyebrow = "AMOR FLORIST · GÓI GHÉM YÊU THƯƠNG",
}: {
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <>
      <nav className="page-breadcrumb" aria-label="Đường dẫn">
        <Link href="/">Trang chủ</Link>
        <span>/</span>
        <span>{title}</span>
      </nav>
      <section className="collection-intro">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Flower2 size={40} strokeWidth={1} className="collection-flower" />
      </section>
    </>
  );
}
