"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Flower2 } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/types";

const occasions = [
  ["Hoa sinh nhật", "/hoa-sinh-nhat"],
  ["Hoa tình yêu", "/hoa-tinh-yeu"],
  ["Hoa cưới", "/hoa-cuoi"],
  ["Hoa tốt nghiệp", "/hoa-tot-nghiep"],
  ["Hoa chúc mừng", "/hoa-chuc-mung"],
  ["Hoa bó", "/hoa-bo"],
];
export default function ProductCollection({
  title,
  description,
  products,
  activeHref,
}: {
  title: string;
  description: string;
  products: Product[];
  activeHref?: string;
}) {
  const [sort, setSort] = useState("selected");
  const sorted = useMemo(() => {
    const result = [...products];
    if (sort === "price-up") result.sort((a, b) => a.price - b.price);
    if (sort === "price-down") result.sort((a, b) => b.price - a.price);
    if (sort === "new")
      result.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
    if (sort === "popular")
      result.sort((a, b) => Number(!!b.bestSeller) - Number(!!a.bestSeller));
    return result;
  }, [products, sort]);
  return (
    <div className="collection-page">
      <div className="page-breadcrumb">
        <Link href="/">Trang chủ</Link>
        <span>/</span>
        <span>{title}</span>
      </div>
      <section className="collection-intro">
        <span className="eyebrow">TỪ VƯỜN HOA AMOR, GỬI ĐẾN BẠN</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Flower2 size={46} strokeWidth={1} className="collection-flower" />
      </section>
      <nav className="collection-tabs" aria-label="Chọn bộ sưu tập">
        <Link
          href="/noi-bat"
          aria-current={activeHref === "/noi-bat" ? "page" : undefined}
        >
          Amor chọn riêng
        </Link>
        {occasions.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            aria-current={activeHref === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
      <section className="collection-content">
        <div className="collection-toolbar">
          <p>
            <strong>{products.length}</strong> thiết kế hoa{" "}
            <span>· Được gói ghém bằng cả trái tim</span>
          </p>
          <label>
            Sắp xếp{" "}
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              aria-label="Sắp xếp sản phẩm"
            >
              <option value="selected">Amor gợi ý</option>
              <option value="new">Mới nhất</option>
              <option value="price-up">Giá thấp đến cao</option>
              <option value="price-down">Giá cao đến thấp</option>
              <option value="popular">Được yêu thích</option>
            </select>
          </label>
        </div>
        {sorted.length ? (
          <div className="product-grid">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="collection-empty">
            <Flower2 size={44} strokeWidth={1} />
            <h2>Những sắc hoa mới đang được chuẩn bị.</h2>
            <p>
              Ghé bộ sưu tập Amor chọn riêng để tìm một món quà thật đẹp nhé.
            </p>
            <Link href="/noi-bat" className="text-link">
              Khám phá bộ sưu tập <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </section>
      <section className="collection-help">
        <Flower2 size={32} strokeWidth={1} />
        <div>
          <h2>Chưa tìm được bó hoa dành riêng cho bạn?</h2>
          <p>Amor sẽ cùng bạn chọn hoa, chọn sắc và gửi lời thương.</p>
        </div>
        <Link href="/lien-he" className="text-link">
          Nhờ Amor tư vấn <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
