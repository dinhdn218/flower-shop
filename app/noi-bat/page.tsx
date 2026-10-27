import ProductCollection from "@/components/ProductCollection";
import { getFeaturedProducts } from "@/lib/data";

export const metadata = {
  title: "Amor chọn riêng - Amor Florist",
  description:
    "Những thiết kế được chọn lọc, dành cho những cảm xúc thật riêng. Tìm bó hoa kể câu chuyện của bạn.",
};

export default function CollectionPage() {
  return (
    <ProductCollection
      title="Amor chọn riêng"
      description="Những thiết kế được chọn lọc, dành cho những cảm xúc thật riêng. Tìm bó hoa kể câu chuyện của bạn."
      activeHref="/noi-bat"
      products={getFeaturedProducts()}
    />
  );
}
