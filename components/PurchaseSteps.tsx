import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
export default function PurchaseSteps({ step }: { step: 1 | 2 }) {
  return (
    <nav className="purchase-steps" aria-label="Các bước đặt hoa">
      <Link href="/gio-hang" aria-current={step === 1 ? "step" : undefined}>
        <span>{step === 2 ? <Check size={15} /> : "01"}</span>Giỏ hoa của bạn
      </Link>
      <ArrowRight size={16} />
      <span
        className={step === 2 ? "current-step" : ""}
        aria-current={step === 2 ? "step" : undefined}
      >
        <span>02</span>Thông tin gửi trao
      </span>
      <ArrowRight size={16} />
      <span className="future-step">
        <span>03</span>Amor xác nhận
      </span>
    </nav>
  );
}
