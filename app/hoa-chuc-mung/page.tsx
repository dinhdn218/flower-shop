import ProductCollection from "@/components/ProductCollection";
import { getProductsByCategory } from "@/lib/data";

export const metadata = {
  title: "Hoa Chúc Mừng - Amor Florist",
  description:
    "Hoa chúc mừng đa dạng cho mọi dịp. Giao hoa tận nơi, miễn phí ship nội thành.",
};

export default function CollectionPage() {
  return (
    <ProductCollection
      title="Hoa chúc mừng"
      description="Cho những cột mốc đáng nhớ. Để lời chúc của bạn nở rộ thành những sắc hoa."
      activeHref="/hoa-chuc-mung"
      products={getProductsByCategory("hoa-chuc-mung")}
    />
  );
}
