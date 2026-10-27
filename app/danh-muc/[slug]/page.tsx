import { notFound } from "next/navigation";
import ProductCollection from "@/components/ProductCollection";
import {
  getCategoryBySlug,
  getProductsByCategory,
  categories,
} from "@/lib/data";
export function generateStaticParams() {
  return [
    ...categories.map((category) => ({ slug: category.slug })),
    { slug: "hoa-bo" },
  ];
}
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category =
    getCategoryBySlug(slug) ||
    (slug === "hoa-bo"
      ? {
          name: "Hoa bó",
          description: "Những bó hoa được gói ghém bằng cả trái tim.",
        }
      : undefined);
  if (!category) notFound();
  return (
    <ProductCollection
      title={category.name}
      description={category.description}
      activeHref={`/${slug}`}
      products={getProductsByCategory(slug)}
    />
  );
}
