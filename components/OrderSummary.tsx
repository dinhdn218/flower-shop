"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Flower2, Gift, Truck, LockKeyhole } from "lucide-react";
import { useCart } from "@/lib/cart-context";
export default function OrderSummary({
  checkout = false,
  isProcessing = false,
}: {
  checkout?: boolean;
  isProcessing?: boolean;
}) {
  const { cart, getTotalPrice, getTotalItems } = useCart();
  const total = getTotalPrice().toLocaleString("vi-VN");
  return (
    <aside className="purchase-summary">
      <span className="eyebrow">MỘT MÓN QUÀ, NHIỀU YÊU THƯƠNG</span>
      <h2>Đơn hoa của bạn</h2>
      <span className="summary-count">
        {getTotalItems()} sản phẩm được chọn
      </span>
      {checkout && (
        <div className="summary-products">
          {cart.map(({ product, quantity }) => (
            <div key={product.id}>
              <div className="summary-product-photo">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <span>
                <strong>{product.name}</strong>
                <small>Số lượng {quantity}</small>
              </span>
              <b>{(product.price * quantity).toLocaleString("vi-VN")}₫</b>
            </div>
          ))}
        </div>
      )}
      <dl className="summary-totals">
        <div>
          <dt>Tạm tính</dt>
          <dd>{total}₫</dd>
        </div>
        <div>
          <dt>Giao hoa</dt>
          <dd>Miễn phí trong 5km</dd>
        </div>
        <div className="summary-grand-total">
          <dt>Tổng tạm tính</dt>
          <dd data-order-total>{total}₫</dd>
        </div>
      </dl>
      <p className="summary-delivery-note">
        Amor sẽ xác nhận phí giao hàng nếu địa chỉ nằm ngoài bán kính 5km.
      </p>
      {checkout ? (
        <>
          <button
            type="submit"
            className="botanical-button summary-primary"
            disabled={isProcessing}
          >
            {isProcessing ? "Đang gửi đơn hoa…" : "Đặt hàng"}
            <ArrowRight size={17} />
          </button>
          <p className="summary-terms">
            Khi đặt hàng, bạn đồng ý với{" "}
            <Link href="/chinh-sach">chính sách của Amor</Link>.
          </p>
        </>
      ) : (
        <>
          <Link href="/thanh-toan" className="botanical-button summary-primary">
            Tiếp tục đặt hoa <ArrowRight size={17} />
          </Link>
          <Link href="/noi-bat" className="summary-continue">
            Chọn thêm một chút yêu thương
          </Link>
        </>
      )}
      <div className="summary-promises">
        <div>
          <Truck size={19} strokeWidth={1.2} />
          <span>Giao hoa nhanh, nâng niu đến tận tay</span>
        </div>
        <div>
          <Gift size={19} strokeWidth={1.2} />
          <span>Tặng kèm thiệp viết tay</span>
        </div>
        <div>
          <Flower2 size={19} strokeWidth={1.2} />
          <span>Chăm chút từng cánh hoa tươi</span>
        </div>
      </div>
      {checkout && (
        <div className="summary-secure">
          <LockKeyhole size={14} />
          <span>Thông tin chỉ dùng để chuẩn bị và giao đơn hoa.</span>
        </div>
      )}
    </aside>
  );
}
