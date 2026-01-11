'use client';

import { useState, useEffect } from 'react';
import { Search, Package, Clock, CheckCircle, XCircle } from 'lucide-react';

interface Order {
  id: string;
  createdAt: string;
  status: string;
  name: string;
  phone: string;
  address: string;
  items: any[];
  total: number;
  paymentMethod: string;
  note?: string;
}

export default function OrdersAdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch(`/api/orders?password=${password}`);
      const data = await response.json();
      
      if (data.success) {
        setIsAuthenticated(true);
        setOrders(data.orders);
      } else {
        alert('Mật khẩu không đúng!');
      }
    } catch (error) {
      alert('Có lỗi xảy ra!');
    } finally {
      setLoading(false);
    }
  };

  const filteredOrders = orders.filter(order => 
    order.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.phone.includes(searchTerm) ||
    order.id.includes(searchTerm)
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pending':
        return <span className="flex items-center gap-1 text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full text-sm">
          <Clock size={14} /> Chờ xử lý
        </span>;
      case 'completed':
        return <span className="flex items-center gap-1 text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">
          <CheckCircle size={14} /> Hoàn thành
        </span>;
      case 'cancelled':
        return <span className="flex items-center gap-1 text-red-600 bg-red-100 px-3 py-1 rounded-full text-sm">
          <XCircle size={14} /> Đã hủy
        </span>;
      default:
        return <span className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm">
          {status}
        </span>;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
          <div className="text-center mb-6">
            <Package size={48} className="text-pink-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">Quản Lý Đơn Hàng</h1>
            <p className="text-gray-600 mt-2">Nhập mật khẩu để xem đơn hàng</p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Mật khẩu
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition disabled:opacity-50"
            >
              {loading ? 'Đang xác thực...' : 'Đăng nhập'}
            </button>
          </form>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-gray-600">
            <p className="font-semibold mb-2">📝 Hướng dẫn:</p>
            <p>Mật khẩu mặc định: <code className="bg-gray-200 px-2 py-1 rounded">amorflorist2024</code></p>
            <p className="mt-2 text-xs">Bạn có thể thay đổi mật khẩu trong file <code>app/api/orders/route.ts</code></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Danh Sách Đơn Hàng</h1>
            <button
              onClick={() => window.location.reload()}
              className="text-pink-600 hover:text-pink-700 font-medium"
            >
              Làm mới
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm kiếm theo tên, số điện thoại hoặc mã đơn..."
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <Package size={64} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Chưa có đơn hàng nào</p>
            </div>
          ) : (
            filteredOrders.map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        Đơn hàng #{order.id}
                      </h3>
                      {getStatusBadge(order.status)}
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(order.createdAt).toLocaleString('vi-VN')}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pink-600">
                      {order.total.toLocaleString('vi-VN')}đ
                    </div>
                    <div className="text-sm text-gray-500">
                      {order.paymentMethod === 'cod' ? 'COD' : 'Chuyển khoản'}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Thông tin khách hàng</h4>
                    <p className="text-gray-600">👤 {order.name}</p>
                    <p className="text-gray-600">📞 {order.phone}</p>
                    <p className="text-gray-600">📍 {order.address}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Sản phẩm</h4>
                    {order.items?.map((item, index) => (
                      <p key={index} className="text-gray-600">
                        • {item.product?.name || 'Sản phẩm'} x {item.quantity}
                      </p>
                    ))}
                  </div>
                </div>

                {order.note && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Ghi chú:</span> {order.note}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
