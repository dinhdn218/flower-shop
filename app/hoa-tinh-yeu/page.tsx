import ProductCollection from "@/components/ProductCollection";
import { getProductsByCategory } from "@/lib/data";

export const metadata = {
  title: "Hoa Tình Yêu - Amor Florist",
  description:
    "Hoa hồng và hoa tặng người yêu đẹp, lãng mạn. Giao hoa tình yêu tận nơi, miễn phí ship nội thành.",
};

export default function CollectionPage() {
  return (
    <ProductCollection
      title="Hoa tình yêu"
      description="Đôi khi, một bó hoa nói thay tất cả. Gửi những rung động chân thành đến người bạn thương."
      activeHref="/hoa-tinh-yeu"
      products={getProductsByCategory("hoa-tinh-yeu")}
    />
  );
}
