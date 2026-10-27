"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  UserRound,
  MapPin,
  Gift,
  CreditCard,
  Banknote,
  Landmark,
  Wallet,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { CheckoutInfo } from "@/lib/types";
import PageIntro from "@/components/PageIntro";
import PurchaseSteps from "@/components/PurchaseSteps";
import OrderSummary from "@/components/OrderSummary";
export default function CheckoutPage() {
  const router = useRouter();
  const submitted = useRef(false);
  const { cart, isHydrated, getTotalPrice, clearCart } = useCart();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<CheckoutInfo>({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "TP. Hồ Chí Minh",
    district: "",
    deliveryDate: "",
    deliveryTime: "09:00 - 12:00",
    cardMessage: "",
    paymentMethod: "cod",
  });
  const change = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };
  useEffect(() => {
    if (isHydrated && !cart.length && !processing && !submitted.current)
      router.replace("/gio-hang");
  }, [isHydrated, cart.length, processing, router]);
  const sendOrder = async (event: React.FormEvent) => {
    event.preventDefault();
    if (processing || !cart.length) return;
    setProcessing(true);
    setError("");
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          items: cart,
          total: getTotalPrice(),
          name: formData.fullName,
          note: formData.cardMessage,
        }),
      });
      if (!response.ok) throw new Error("Order submission failed");
      submitted.current = true;
      clearCart();
      router.push("/dat-hang-thanh-cong");
    } catch {
      setError(
        "Amor chưa nhận được đơn hoa. Bạn thử gửi lại hoặc gọi 086 986 7694 để chúng mình hỗ trợ nhé.",
      );
    } finally {
      setProcessing(false);
    }
  };
  const field = (
    name: keyof CheckoutInfo,
    label: string,
    placeholder: string,
    type = "text",
    required = true,
    autoComplete?: string,
  ) => (
    <div className="checkout-field">
      <label htmlFor={`checkout-${name}`}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={`checkout-${name}`}
        name={name}
        type={type}
        value={formData[name]}
        onChange={change}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        pattern={name === "phone" ? "[0-9]{10}" : undefined}
        min={
          type === "date"
            ? new Intl.DateTimeFormat("en-CA", {
                timeZone: "Asia/Ho_Chi_Minh",
              }).format(new Date())
            : undefined
        }
      />
    </div>
  );
  if (!isHydrated || !cart.length)
    return (
      <div className="purchase-loading" role="status">
        {submitted.current
          ? "Amor đang ghi nhận đơn hoa…"
          : "Đang chuẩn bị thông tin đơn hoa…"}
      </div>
    );
  return (
    <div className="purchase-page">
      <PageIntro
        title="Gửi hoa, gửi cả tấm lòng."
        description="Thêm một vài thông tin để Amor mang món quà của bạn đến đúng người, đúng dịp."
        eyebrow="HOÀN TẤT ĐƠN HOA"
      />
      <PurchaseSteps step={2} />
      <form className="purchase-layout checkout-layout" onSubmit={sendOrder}>
        <div className="checkout-sections">
          <section className="checkout-section">
            <div className="checkout-section-heading">
              <UserRound size={25} strokeWidth={1.2} />
              <div>
                <span className="eyebrow">01 · NGƯỜI ĐẶT HOA</span>
                <h2>Amor có thể liên hệ với ai?</h2>
              </div>
            </div>
            <div className="checkout-field-grid">
              {field(
                "fullName",
                "Họ và tên",
                "Tên của bạn",
                "text",
                true,
                "name",
              )}
              {field(
                "phone",
                "Số điện thoại",
                "Số điện thoại 10 chữ số",
                "tel",
                true,
                "tel",
              )}
              <div className="field-full">
                {field(
                  "email",
                  "Email",
                  "Email để tiện liên hệ",
                  "email",
                  false,
                  "email",
                )}
              </div>
            </div>
          </section>
          <section className="checkout-section">
            <div className="checkout-section-heading">
              <MapPin size={25} strokeWidth={1.2} />
              <div>
                <span className="eyebrow">02 · ĐỊA CHỈ GỬI TRAO</span>
                <h2>Món quà sẽ đến đâu?</h2>
              </div>
            </div>
            <div className="checkout-field-grid">
              <div className="field-full">
                {field(
                  "address",
                  "Địa chỉ giao hàng",
                  "Số nhà, tên đường",
                  "text",
                  true,
                  "street-address",
                )}
              </div>
              <div className="checkout-field">
                <label htmlFor="checkout-city">
                  Thành phố <span aria-hidden="true">*</span>
                </label>
                <select
                  id="checkout-city"
                  name="city"
                  value={formData.city}
                  onChange={change}
                  required
                >
                  {["TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ"].map(
                    (city) => (
                      <option key={city}>{city}</option>
                    ),
                  )}
                </select>
              </div>
              {field(
                "district",
                "Quận/Huyện",
                "Quận hoặc huyện",
                "text",
                true,
                "address-level2",
              )}
              {field("deliveryDate", "Ngày giao hàng", "", "date")}
              <div className="checkout-field">
                <label htmlFor="checkout-deliveryTime">Khung giờ giao</label>
                <select
                  id="checkout-deliveryTime"
                  name="deliveryTime"
                  value={formData.deliveryTime}
                  onChange={change}
                >
                  {[
                    "09:00 - 12:00",
                    "12:00 - 15:00",
                    "15:00 - 18:00",
                    "18:00 - 21:00",
                  ].map((time) => (
                    <option key={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          <section className="checkout-section">
            <div className="checkout-section-heading">
              <Gift size={25} strokeWidth={1.2} />
              <div>
                <span className="eyebrow">03 · MỘT LỜI THƯƠNG</span>
                <h2>Để hoa nói cùng bạn.</h2>
              </div>
            </div>
            <p className="checkout-section-note">
              Amor tặng bạn một tấm thiệp viết tay. Gửi gắm điều bạn muốn nói ở
              đây nhé.
            </p>
            <div className="checkout-field">
              <label htmlFor="checkout-cardMessage">Lời nhắn trên thiệp</label>
              <textarea
                id="checkout-cardMessage"
                name="cardMessage"
                value={formData.cardMessage}
                onChange={change}
                rows={4}
                maxLength={200}
                placeholder="Một lời chúc, một lời cảm ơn hay chỉ là ‘Thương bạn’…"
              />
              <span className="field-character-count">
                {formData.cardMessage.length}/200 ký tự
              </span>
            </div>
          </section>
          <fieldset className="checkout-section payment-section">
            <legend className="sr-only">Phương thức thanh toán</legend>
            <div className="checkout-section-heading">
              <CreditCard size={25} strokeWidth={1.2} />
              <div>
                <span className="eyebrow">04 · THANH TOÁN</span>
                <h2>Chọn cách bạn thấy thuận tiện.</h2>
              </div>
            </div>
            <div className="payment-options">
              {[
                {
                  value: "cod",
                  label: "Thanh toán khi nhận hàng (COD)",
                  note: "Thanh toán khi đơn hoa được giao.",
                  icon: Banknote,
                },
                {
                  value: "bank",
                  label: "Chuyển khoản ngân hàng",
                  note: "Amor liên hệ xác nhận thông tin chuyển khoản.",
                  icon: Landmark,
                },
                {
                  value: "momo",
                  label: "Ví MoMo",
                  note: "Amor hướng dẫn thanh toán khi xác nhận đơn.",
                  icon: Wallet,
                },
              ].map(({ value, label, note, icon: Icon }) => (
                <label
                  className={`payment-option ${formData.paymentMethod === value ? "is-selected" : ""}`}
                  key={value}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={value}
                    checked={formData.paymentMethod === value}
                    onChange={change}
                  />
                  <Icon size={23} strokeWidth={1.2} />
                  <span>
                    <strong>{label}</strong>
                    <small>{note}</small>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <Link href="/gio-hang" className="text-link">
            <ArrowLeft size={16} />
            Quay lại giỏ hoa
          </Link>
        </div>
        <OrderSummary checkout isProcessing={processing} />
      </form>
    </div>
  );
}
