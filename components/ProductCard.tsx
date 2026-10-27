"use client";
import Image from "next/image";
import Link from "next/link";
import { Heart, Plus, Check } from "lucide-react";
import { Product } from "@/lib/types";
import { useCartFeedback } from "@/components/CartFeedback";
import { useWishlist } from "@/lib/wishlist-context";
export default function ProductCard({ product }: { product: Product }) {
  const { addition, addWithFeedback } = useCartFeedback();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const added = addition?.product.id === product.id;
  const inWishlist = isInWishlist(product.id);
  return (
    <article className="floral-product group">
      <div className="product-photo">
        <Link
          href={`/san-pham/${product.slug}`}
          aria-label={`Xem ${product.name}`}
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 760px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="product-labels">
          {product.discount ? (
            <span>−{product.discount}%</span>
          ) : product.isNew ? (
            <span>Mới về</span>
          ) : product.bestSeller ? (
            <span>Được yêu thích</span>
          ) : null}
        </div>
        <button
          className={`wishlist-action ${inWishlist ? "is-saved" : ""}`}
          aria-label={`${inWishlist ? "Bỏ yêu thích" : "Yêu thích"} ${product.name}`}
          aria-pressed={inWishlist}
          onClick={() =>
            inWishlist ? removeFromWishlist(product.id) : addToWishlist(product)
          }
        >
          <Heart
            size={18}
            strokeWidth={1.4}
            fill={inWishlist ? "currentColor" : "none"}
          />
        </button>
      </div>
      <div className="product-info">
        <span className="product-size">
          {product.size || "Gói ghém bằng cả trái tim"}
        </span>
        <h3>
          <Link href={`/san-pham/${product.slug}`}>{product.name}</Link>
        </h3>
        <div className="product-bottom">
          <div className="product-prices">
            <span>{product.price.toLocaleString("vi-VN")}₫</span>
            {product.originalPrice && (
              <del>{product.originalPrice.toLocaleString("vi-VN")}₫</del>
            )}
          </div>
          <button
            key={added ? addition.id : "idle"}
            className={`add-product ${added ? "is-added" : ""}`}
            disabled={!product.inStock}
            aria-label={`Thêm ${product.name} vào giỏ`}
            onClick={() => {
              addWithFeedback(product);
            }}
          >
            {added ? <Check size={18} /> : <Plus size={18} />}
          </button>
        </div>
        <span className="product-feedback" aria-live="polite">
          {added ? (
            <>
              <Check size={12} /> Đã thêm vào giỏ
            </>
          ) : !product.inStock ? (
            "Tạm hết hàng"
          ) : (
            "Hoa tươi · Chăm chút từng cánh"
          )}
        </span>
      </div>
    </article>
  );
}
