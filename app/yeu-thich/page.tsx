"use client";
import ProductCollection from "@/components/ProductCollection";
import { useWishlist } from "@/lib/wishlist-context";
export default function WishlistPage() {
  const { wishlist } = useWishlist();
  return (
    <ProductCollection
      title="Những đóa hoa bạn thương"
      description="Cất giữ một chút cảm hứng. Những thiết kế bạn yêu thích đều ở đây, đợi ngày được gửi trao."
      products={wishlist}
    />
  );
}
