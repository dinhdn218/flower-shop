'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { CheckoutInfo } from '@/lib/types';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getTotalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const [formData, setFormData] = useState<CheckoutInfo>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'TP. Hồ Chí Minh',
    district: '',
    deliveryDate: '',
    deliveryTime: '09:00 - 12:00',
    cardMessage: '',
    paymentMethod: 'cod'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      router.push('/dat-hang-thanh-cong');
    }, 2000);
  };

  if (cart.length === 0) {
    router.push('/gio-hang');
    return null;
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Thanh Toán</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Thông Tin Khách Hàng
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="0901234567"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Thông Tin Giao Hàng
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Địa chỉ giao hàng <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Số nhà, tên đường"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Thành phố <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                        <option value="Hà Nội">Hà Nội</option>
                        <option value="Đà Nẵng">Đà Nẵng</option>
                        <option value="Cần Thơ">Cần Thơ</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quận/Huyện <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Quận 1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ngày giao hàng <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Khung giờ giao
                      </label>
                      <select
                        name="deliveryTime"
                        value={formData.deliveryTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      >
                        <option value="09:00 - 12:00">09:00 - 12:00</option>
                        <option value="12:00 - 15:00">12:00 - 15:00</option>
                        <option value="15:00 - 18:00">15:00 - 18:00</option>
                        <option value="18:00 - 21:00">18:00 - 21:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lời nhắn trên thiệp
                    </label>
                    <textarea
                      name="cardMessage"
                      value={formData.cardMessage}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      placeholder="Nhập lời chúc muốn gửi đến người nhận..."
                      maxLength={200}
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {formData.cardMessage.length}/200 ký tự
                    </p>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Phương Thức Thanh Toán
                </h2>
                
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-pink-500 transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <span className="ml-3 font-medium">Thanh toán khi nhận hàng (COD)</span>
                  </label>

                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-pink-500 transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <span className="ml-3 font-medium">Chuyển khoản ngân hàng</span>
                  </label>

                  <label className="flex items-center p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-pink-500 transition">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="momo"
                      checked={formData.paymentMethod === 'momo'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-pink-600"
                    />
                    <span className="ml-3 font-medium">Ví MoMo</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Đơn Hàng
                </h2>

                {/* Products */}
                <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                  {cart.map(item => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800 line-clamp-2">
                          {item.product.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.quantity} x {item.product.price.toLocaleString('vi-VN')}₫
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính:</span>
                    <span>{getTotalPrice().toLocaleString('vi-VN')}₫</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí giao hàng:</span>
                    <span className="text-green-600">Miễn phí</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg font-bold">
                    <span>Tổng cộng:</span>
                    <span className="text-pink-600">
                      {getTotalPrice().toLocaleString('vi-VN')}₫
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full mt-6 bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Đang xử lý...' : 'Đặt Hàng'}
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Bằng việc đặt hàng, bạn đồng ý với điều khoản sử dụng của chúng tôi
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
