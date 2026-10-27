"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, use } from "react";
import {
  ArrowRight,
  ShoppingBag,
  Heart,
  Minus,
  Plus,
  Check,
  Truck,
  Flower2,
  Gift,
} from "lucide-react";
import { getProductBySlug, products, getCategoryBySlug } from "@/lib/data";
import { useCartFeedback } from "@/components/CartFeedback";
import { useWishlist } from "@/lib/wishlist-context";
import ProductCard from "@/components/ProductCard";

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addition, addWithFeedback } = useCartFeedback();
  const added = addition?.product.id === product?.id;
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  if (!product) notFound();
  const saved = isInWishlist(product.id);
  const categoryName = getCategoryBySlug(product.category)?.name || "Hoa bó";
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  // Zoom toward the pointer so the hovered part of the bouquet stays in view.
  const followPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width) * 100;
    const y = ((event.clientY - box.top) / box.height) * 100;
    event.currentTarget.style.setProperty("--zoom-x", `${x}%`);
    event.currentTarget.style.setProperty("--zoom-y", `${y}%`);
  };
  return (
    <div className="product-detail-page" key={slug}>
      <nav className="page-breadcrumb" aria-label="Đường dẫn">
        <Link href="/">Trang chủ</Link>
        <span>/</span>
        <Link href={`/danh-muc/${product.category}`}>{categoryName}</Link>
        <span>/</span>
        <span>{product.name}</span>
      </nav>
      <section className="product-detail-layout">
        <div className="detail-gallery">
          <div
            className="detail-main-photo"
            onPointerEnter={followPointer}
            onPointerMove={followPointer}
          >
            <Image
              src={product.images[selectedImage] || product.images[0]}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 760px) 90vw, 48vw"
              className="object-cover"
            />
            {product.discount && (
              <span className="detail-discount">
                Ưu ái −{product.discount}%
              </span>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="detail-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Xem ảnh ${index + 1} của ${product.name}`}
                  aria-pressed={selectedImage === index}
                >
                  <Image
                    src={image}
                    alt={`${product.name} — góc nhìn ${index + 1}`}
                    fill
                    sizes="90px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
          <p className="gallery-caption">
            Mỗi bó hoa là một thiết kế thủ công, được chăm chút dành riêng cho
            bạn.
          </p>
        </div>
        <div className="detail-copy">
          <span className="eyebrow">
            AMOR FLORIST · {categoryName.toLocaleUpperCase("vi")}
          </span>
          <h1>{product.name}</h1>
          <div className="detail-prices">
            <span>{product.price.toLocaleString("vi-VN")}₫</span>
            {product.originalPrice && (
              <del>{product.originalPrice.toLocaleString("vi-VN")}₫</del>
            )}
          </div>
          <span className="detail-stock">
            {product.inStock ? (
              <>
                <Check size={14} /> Sẵn sàng gửi trao
              </>
            ) : (
              "Tạm hết hàng"
            )}
          </span>
          <p className="detail-description">{product.description}</p>
          {product.size && (
            <div className="detail-size">
              <span>Kích thước</span>
              <strong>{product.size}</strong>
            </div>
          )}
          <div className="detail-purchase">
            <div className="quantity-row">
              <span>Số lượng</span>
              <div className="quantity-control">
                <button
                  onClick={() => {
                    setQuantity(Math.max(1, quantity - 1));
                  }}
                  disabled={quantity <= 1 || !product.inStock}
                  aria-label="Giảm số lượng"
                >
                  <Minus size={15} />
                </button>
                <output aria-live="polite">{quantity}</output>
                <button
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  disabled={!product.inStock}
                  aria-label="Tăng số lượng"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>
            <div className="detail-action-row">
              <button
                key={added ? addition?.id : "idle"}
                className={`botanical-button detail-add ${added ? "is-added" : ""}`}
                disabled={!product.inStock}
                onClick={() => {
                  addWithFeedback(product, quantity);
                }}
              >
                {added ? <Check size={18} /> : <ShoppingBag size={18} />}
                {added ? "Đã thêm vào giỏ hàng" : "Thêm vào giỏ hàng"}
              </button>
              <button
                className="detail-save"
                aria-label={saved ? "Bỏ yêu thích" : "Thêm vào yêu thích"}
                aria-pressed={saved}
                onClick={() =>
                  saved
                    ? removeFromWishlist(product.id)
                    : addToWishlist(product)
                }
              >
                <Heart
                  size={20}
                  strokeWidth={1.4}
                  fill={saved ? "currentColor" : "none"}
                />
              </button>
            </div>
            <span className="sr-only" role="status">
              {added ? `Đã thêm ${quantity} ${product.name} vào giỏ hàng` : ""}
            </span>
          </div>
          <div className="detail-services">
            {[
              {
                icon: Truck,
                text: "Giao nhanh 90 phút · Miễn phí trong bán kính 5km",
              },
              {
                icon: Flower2,
                text: "Hoa tươi mỗi ngày · Gửi hình trước khi giao theo yêu cầu",
              },
              {
                icon: Gift,
                text: "Tặng thiệp viết tay · Thay bạn gửi lời thương",
              },
            ].map(({ icon: Icon, text }) => (
              <div key={text}>
                <Icon size={19} strokeWidth={1.2} />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <a href="tel:0869867694" className="detail-advice">
            Cần thêm một chút tư vấn? Gọi Amor <ArrowRight size={15} />
          </a>
        </div>
      </section>
      <section className="detail-care">
        <Flower2 size={32} strokeWidth={1} />
        <div>
          <h2>Một chút chăm sóc, hoa xinh lâu hơn.</h2>
          <p>
            Đặt hoa ở nơi thoáng mát, tránh ánh nắng trực tiếp. Thay nước sạch
            và cắt chéo gốc mỗi ngày để giữ hoa tươi lâu.
          </p>
        </div>
        <Link href="/huong-dan" className="text-link">
          Cách chăm hoa <ArrowRight size={16} />
        </Link>
      </section>
      {related.length > 0 && (
        <section className="boutique-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THÊM MỘT CHÚT CẢM HỨNG</span>
              <h2>Có thể bạn cũng thương</h2>
            </div>
            <Link href={`/danh-muc/${product.category}`} className="text-link">
              Xem bộ sưu tập <ArrowRight size={16} />
            </Link>
          </div>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
