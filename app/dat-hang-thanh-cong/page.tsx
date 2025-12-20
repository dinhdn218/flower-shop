import Link from 'next/link';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-12">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-6">
            <CheckCircle size={80} className="mx-auto text-green-500" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Đặt Hàng Thành Công!
          </h1>
          
          <p className="text-gray-600 mb-6">
            Cảm ơn bạn đã đặt hàng tại FlowerShop. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn hàng.
          </p>

          <div className="bg-pink-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Mã đơn hàng:</strong> #FS{Date.now().toString().slice(-8)}
            </p>
            <p className="text-sm text-gray-700 mt-2">
              Bạn sẽ nhận được email xác nhận đơn hàng sớm nhất.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              <ArrowLeft size={20} />
              Về Trang Chủ
            </Link>
            
            <a
              href="tel:0328717972"
              className="flex items-center justify-center gap-2 border-2 border-pink-600 text-pink-600 py-3 rounded-lg font-semibold hover:bg-pink-50 transition"
            >
              <Phone size={20} />
              Liên Hệ: 032 871 7972
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
