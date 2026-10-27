"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/types";

type Addition = { id: number; product: Product; quantity: number };
const FeedbackContext = createContext<{
  addition: Addition | null;
  addWithFeedback: (product: Product, quantity?: number) => void;
} | null>(null);

export function CartFeedbackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { addToCart } = useCart();
  const [addition, setAddition] = useState<Addition | null>(null);
  const sequence = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const dismiss = () => {
    if (timer.current) clearTimeout(timer.current);
    setAddition(null);
  };
  const addWithFeedback = (product: Product, quantity = 1) => {
    if (!product.inStock) return;
    addToCart(product, quantity);
    if (timer.current) clearTimeout(timer.current);
    setAddition({ id: ++sequence.current, product, quantity });
    timer.current = setTimeout(() => setAddition(null), 4500);
  };
  return (
    <FeedbackContext.Provider value={{ addition, addWithFeedback }}>
      {children}
      <div
        className="cart-notification-region"
        aria-live="polite"
        aria-atomic="true"
      >
        {addition && (
          <div
            className="cart-toast"
            key={addition.id}
            onMouseEnter={() => {
              if (timer.current) clearTimeout(timer.current);
            }}
            onMouseLeave={() => {
              timer.current = setTimeout(() => setAddition(null), 4500);
            }}
            onFocusCapture={() => {
              if (timer.current) clearTimeout(timer.current);
            }}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                timer.current = setTimeout(() => setAddition(null), 4500);
            }}
          >
            <div className="cart-toast-image">
              <Image
                src={addition.product.images[0]}
                alt=""
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="cart-toast-copy">
              <span className="cart-toast-success">
                <Check size={16} /> Đã thêm vào giỏ hàng
              </span>
              <strong>
                {addition.product.name} <span>× {addition.quantity}</span>
              </strong>
              <Link href="/gio-hang" onClick={dismiss}>
                Xem giỏ hàng <ArrowRight size={15} />
              </Link>
            </div>
            <button
              onClick={dismiss}
              aria-label="Đóng thông báo giỏ hàng"
              className="cart-toast-close"
            >
              <X size={17} />
            </button>
            <span className="cart-toast-progress" />
          </div>
        )}
      </div>
    </FeedbackContext.Provider>
  );
}
export function useCartFeedback() {
  const value = useContext(FeedbackContext);
  if (!value) throw new Error("useCartFeedback requires CartFeedbackProvider");
  return value;
}
