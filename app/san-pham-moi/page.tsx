import ProductCollection from "@/components/ProductCollection";
import { getNewProducts } from "@/lib/data";

export const metadata = {
  title: "Vừa ghé vườn nhà Amor - Amor Florist",
  description:
    "Một chút tươi mới, một chút bất ngờ. Khám phá những sắc hoa vừa được chúng mình nâng niu.",
};

export default function CollectionPage() {
  return (
    <ProductCollection
      title="Vừa ghé vườn nhà Amor"
      description="Một chút tươi mới, một chút bất ngờ. Khám phá những sắc hoa vừa được chúng mình nâng niu."
      activeHref="/san-pham-moi"
      products={getNewProducts()}
    />
  );
}
