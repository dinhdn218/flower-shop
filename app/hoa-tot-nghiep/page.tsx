import ProductCollection from "@/components/ProductCollection";
import { getProductsByCategory } from "@/lib/data";

export const metadata = {
  title: "Hoa Tốt Nghiệp - Amor Florist",
  description:
    "Hoa chúc mừng tốt nghiệp đẹp, ý nghĩa. Giao hoa tốt nghiệp tận nơi, miễn phí ship nội thành.",
};

export default function CollectionPage() {
  return (
    <ProductCollection
      title="Hoa tốt nghiệp"
      description="Một hành trình khép lại, bao ước mơ mở ra. Gửi một bó hoa chúc mừng khởi đầu mới."
      activeHref="/hoa-tot-nghiep"
      products={getProductsByCategory("hoa-tot-nghiep")}
    />
  );
}
