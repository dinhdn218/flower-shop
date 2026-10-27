import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Noto_Serif } from "next/font/google";
import "./globals.css";
import { CartFeedbackProvider } from "@/components/CartFeedback";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidgets from "@/components/ChatWidgets";
import ScrollToTop from "@/components/ScrollToTop";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";

const bodyFont = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const displayFont = Noto_Serif({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amor Florist - Tiệm hoa của tình yêu",
  description:
    "Amor Florist - Tiệm hoa tươi của tình yêu. Đặt hoa online giao tận nơi, miễn phí ship nội thành. Hoa sinh nhật, hoa khai trương, hoa tình yêu.",
};

export const viewport: Viewport = {
  themeColor: "#545e42",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${bodyFont.className} ${displayFont.variable} antialiased`}
      >
        <CartProvider>
          <WishlistProvider>
            <CartFeedbackProvider>
              <a href="#main-content" className="skip-link">
                Bỏ qua đến nội dung chính
              </a>
              <Header />
              <main id="main-content" tabIndex={-1} className="min-h-screen">
                {children}
              </main>
              <Footer />
              <ChatWidgets />
              <ScrollToTop />
            </CartFeedbackProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
