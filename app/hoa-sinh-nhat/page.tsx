import ProductCollection from "@/components/ProductCollection";
import { getProductsByCategory } from "@/lib/data";

export const metadata = {
  title: "Hoa Sinh Nhật - Amor Florist",
  description:
    "Hoa tặng sinh nhật đẹp, ý nghĩa. Giao hoa sinh nhật tận nơi, miễn phí ship nội thành.",
};

export default function CollectionPage() {
  return (
    <ProductCollection
      title="Hoa sinh nhật"
      description="Một tuổi mới, ngàn điều thương. Những bó hoa tươi để ngày của người ấy thêm rực rỡ."
      activeHref="/hoa-sinh-nhat"
      products={getProductsByCategory("hoa-sinh-nhat")}
    />
  );
}
