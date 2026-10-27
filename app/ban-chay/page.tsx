import ProductCollection from "@/components/ProductCollection";
import { getBestSellerProducts } from "@/lib/data";

export const metadata = {
  title: "Những bó hoa được yêu - Amor Florist",
  description:
    "Những món quà đã thay biết bao lời thương. Cùng khám phá các thiết kế được yêu thích tại Amor.",
};

export default function CollectionPage() {
  return (
    <ProductCollection
      title="Những bó hoa được yêu"
      description="Những món quà đã thay biết bao lời thương. Cùng khám phá các thiết kế được yêu thích tại Amor."
      activeHref="/ban-chay"
      products={getBestSellerProducts()}
    />
  );
}
