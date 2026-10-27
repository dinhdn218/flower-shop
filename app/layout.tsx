import type { Metadata } from "next";
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
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "64x64" },
    ],
    apple: "/amor-icon.png",
  },
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
              <Header />
              <main className="min-h-screen">{children}</main>
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
