'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { ShoppingCart, Heart, Minus, Plus, Check } from 'lucide-react';
import { getProductBySlug, products } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import ProductCard from '@/components/ProductCard';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex text-sm text-gray-600">
            <a href="/" className="hover:text-pink-600">Trang chủ</a>
            <span className="mx-2">/</span>
            <a href={`/danh-muc/${product.category}`} className="hover:text-pink-600">
              Danh mục
            </a>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-6">
              {/* Images */}
              <div>
                <div className="aspect-square relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {product.discount && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                      -{product.discount}%
                    </span>
                  )}
                </div>

                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {product.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square relative rounded-lg overflow-hidden border-2 ${
                          selectedImage === index ? 'border-pink-600' : 'border-gray-200'
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info */}
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {product.name}
                </h1>

                {product.size && (
                  <p className="text-gray-600 mb-4">Kích thước: {product.size}</p>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-pink-600">
                    {product.price.toLocaleString('vi-VN')}₫
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">
                      {product.originalPrice.toLocaleString('vi-VN')}₫
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    {product.inStock ? (
                      <>
                        <Check className="text-green-600" size={20} />
                        <span className="text-green-600 font-medium">Còn hàng</span>
                      </>
                    ) : (
                      <span className="text-red-600 font-medium">Hết hàng</span>
                    )}
                  </div>
                </div>

                <div className="border-t pt-6 mb-6">
                  <h3 className="font-semibold mb-3">Mô tả sản phẩm:</h3>
                  <p className="text-gray-600 leading-relaxed">{product.description}</p>
                </div>

                {/* Quantity */}
                <div className="mb-6">
                  <label className="block font-semibold mb-2">Số lượng:</label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      disabled={!product.inStock}
                    >
                      <Minus size={18} />
                    </button>
                    <span className="text-xl font-semibold w-12 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                      disabled={!product.inStock}
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`flex-1 py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                      product.inStock
                        ? addedToCart
                          ? 'bg-green-600 text-white'
                          : 'bg-pink-600 text-white hover:bg-pink-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {addedToCart ? (
                      <>
                        <Check size={20} />
                        Đã thêm vào giỏ
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={20} />
                        Thêm vào giỏ hàng
                      </>
                    )}
                  </button>
                  <button className="py-3 px-6 rounded-lg border-2 border-pink-600 text-pink-600 font-semibold hover:bg-pink-50 transition flex items-center justify-center gap-2">
                    <Heart size={20} />
                    Yêu thích
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 border-t pt-6">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Miễn phí giao hàng bán kính 5km</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Hoa tươi mới 100%, nhập trong ngày</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Gửi hình trước khi giao (theo yêu cầu)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-pink-600">✓</span>
                      <span>Tặng kèm thiệp chúc mừng miễn phí</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Sản Phẩm Liên Quan</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
