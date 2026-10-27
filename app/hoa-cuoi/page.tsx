import ProductCollection from "@/components/ProductCollection";
import { getProductsByCategory } from "@/lib/data";

export const metadata = {
  title: "Hoa Cưới - Amor Florist",
  description:
    "Hoa cầm tay cô dâu, hoa trang trí tiệc cưới đẹp, sang trọng. Giao hoa cưới tận nơi.",
};

export default function CollectionPage() {
  return (
    <ProductCollection
      title="Hoa cưới"
      description="Dành cho ngày mình chung đôi. Những thiết kế tinh tế nâng niu khoảnh khắc hạnh phúc."
      activeHref="/hoa-cuoi"
      products={getProductsByCategory("hoa-cuoi")}
    />
  );
}
