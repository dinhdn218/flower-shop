"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  Flower2,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { getFeaturedProducts } from "@/lib/data";
import PageIntro from "@/components/PageIntro";
import PurchaseSteps from "@/components/PurchaseSteps";
import OrderSummary from "@/components/OrderSummary";
import ProductCard from "@/components/ProductCard";
export default function CartPage() {
  const { cart, isHydrated, removeFromCart, updateQuantity, getTotalItems } =
    useCart();
  return (
    <div className="purchase-page">
      <PageIntro
        title="Một giỏ hoa, thật nhiều thương."
        description="Những thiết kế bạn chọn đang đợi được gói ghém. Cùng Amor xem lại món quà dành cho người đặc biệt nhé."
        eyebrow="GIỎ HOA CỦA BẠN"
      />
      <PurchaseSteps step={1} />
      {!isHydrated ? (
        <div className="purchase-loading" role="status">
          Amor đang mở giỏ hoa của bạn…
        </div>
      ) : cart.length === 0 ? (
        <section className="botanical-empty">
          <span className="empty-flower">
            <ShoppingBag size={38} strokeWidth={1} />
          </span>
          <span className="eyebrow">MỘT CHÚT YÊU THƯƠNG ĐANG ĐỢI</span>
          <h2>Giỏ hoa vẫn còn một khoảng trống.</h2>
          <p>
            Một bó hoa dịu dàng, một món quà rực rỡ. Tìm thiết kế khiến bạn muốn
            gửi trao nhé.
          </p>
          <Link href="/noi-bat" className="botanical-button">
            Ghé vườn hoa Amor <ArrowRight size={17} />
          </Link>
        </section>
      ) : (
        <div className="purchase-layout">
          <section
            className="cart-selection"
            aria-labelledby="cart-selection-title"
          >
            <div className="cart-selection-heading">
              <h2 id="cart-selection-title">Những đóa hoa bạn chọn</h2>
              <span aria-live="polite">{getTotalItems()} sản phẩm</span>
            </div>
            <div className="cart-product-list">
              {cart.map(({ product, quantity }) => (
                <article className="cart-product" key={product.id}>
                  <Link
                    href={`/san-pham/${product.slug}`}
                    className="cart-product-image"
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      sizes="(max-width:760px) 100px, 140px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="cart-product-copy">
                    <span className="eyebrow">AMOR FLORIST</span>
                    <h3>
                      <Link href={`/san-pham/${product.slug}`}>
                        {product.name}
                      </Link>
                    </h3>
                    <p>{product.size || "Gói ghém bằng cả trái tim"}</p>
                    <span className="cart-unit-price">
                      {product.price.toLocaleString("vi-VN")}₫ / sản phẩm
                    </span>
                    <div className="quantity-control">
                      <button
                        aria-label={`Giảm số lượng ${product.name}`}
                        disabled={quantity <= 1}
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                      >
                        <Minus size={15} />
                      </button>
                      <output aria-live="polite">{quantity}</output>
                      <button
                        aria-label={`Tăng số lượng ${product.name}`}
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                      >
                        <Plus size={15} />
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-end">
                    <button
                      className="cart-remove"
                      aria-label={`Xóa ${product.name} khỏi giỏ`}
                      onClick={() => removeFromCart(product.id)}
                    >
                      <Trash2 size={17} strokeWidth={1.3} />
                      <span>Bỏ khỏi giỏ</span>
                    </button>
                    <strong>
                      {(product.price * quantity).toLocaleString("vi-VN")}₫
                    </strong>
                    {product.originalPrice && (
                      <del>
                        {(product.originalPrice * quantity).toLocaleString(
                          "vi-VN",
                        )}
                        ₫
                      </del>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="cart-personal-note">
              <Flower2 size={29} strokeWidth={1} />
              <div>
                <h3>Đừng quên một lời nhắn nhỏ.</h3>
                <p>
                  Bạn có thể gửi lời chúc trên thiệp ở bước tiếp theo. Amor sẽ
                  viết tay và đặt cùng bó hoa.
                </p>
              </div>
            </div>
            <Link href="/noi-bat" className="text-link">
              Tiếp tục ngắm hoa <ArrowRight size={16} />
            </Link>
          </section>
          <OrderSummary />
        </div>
      )}
      {isHydrated && cart.length === 0 && (
        <section className="boutique-section cart-suggestions">
          <div className="section-heading">
            <div>
              <span className="eyebrow">MỘT CHÚT CẢM HỨNG TỪ AMOR</span>
              <h2>Có thể bạn sẽ thương</h2>
            </div>
          </div>
          <div className="product-grid">
            {getFeaturedProducts()
              .slice(0, 4)
              .map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
