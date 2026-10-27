import ProductCollection from "@/components/ProductCollection";
import { getProductsByCategory } from "@/lib/data";

export const metadata = {
  title: "Hoa Bó - Amor Florist",
  description:
    "Hoa bó đẹp, tươi mới. Giao hoa bó tận nơi, miễn phí ship nội thành.",
};

export default function CollectionPage() {
  return (
    <ProductCollection
      title="Hoa bó"
      description="Chút dịu dàng cho mỗi ngày. Những bó hoa được Amor chọn lựa và gói ghém bằng cả trái tim."
      activeHref="/hoa-bo"
      products={getProductsByCategory("hoa-bo")}
    />
  );
}
