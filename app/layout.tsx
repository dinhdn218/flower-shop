import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidgets from "@/components/ChatWidgets";
import ScrollToTop from "@/components/ScrollToTop";
import { CartProvider } from "@/lib/cart-context";
import { WishlistProvider } from "@/lib/wishlist-context";

const montserrat = Montserrat({ 
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amor Florist - Tiệm hoa của tình yêu",
  description: "Amor Florist - Tiệm hoa tươi của tình yêu. Đặt hoa online giao tận nơi, miễn phí ship nội thành. Hoa sinh nhật, hoa khai trương, hoa tình yêu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${montserrat.className} antialiased`}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <ChatWidgets />
            <ScrollToTop />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
