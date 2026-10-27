"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Package,
  Clock,
  CheckCircle,
  XCircle,
  ArrowLeft,
  RefreshCw,
  LogOut,
  LockKeyhole,
} from "lucide-react";
interface Order {
  id: string;
  createdAt: string;
  status: string;
  name: string;
  phone: string;
  address: string;
  items: { product?: { name?: string }; quantity: number }[];
  total: number;
  paymentMethod: string;
  note?: string;
}
const statuses = [
  { value: "all", label: "Tất cả" },
  { value: "pending", label: "Chờ xử lý" },
  { value: "completed", label: "Hoàn thành" },
  { value: "cancelled", label: "Đã hủy" },
];
export default function OrdersAdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [error, setError] = useState("");
  const loadOrders = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `/api/orders?password=${encodeURIComponent(password)}`,
      );
      const data = await response.json();
      if (!response.ok || !data.success) {
        setError(
          response.status === 401
            ? "Mật khẩu chưa đúng. Bạn kiểm tra lại nhé."
            : "Không thể tải đơn hàng. Vui lòng thử lại.",
        );
        return;
      }
      setOrders(data.orders);
      setAuthenticated(true);
    } catch {
      setError("Không thể kết nối. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };
  const filtered = orders.filter(
    (order) =>
      (status === "all" || order.status === status) &&
      `${order.name} ${order.phone} ${order.id}`
        .toLocaleLowerCase("vi")
        .includes(search.toLocaleLowerCase("vi")),
  );
  const badge = (value: string) => {
    const Icon =
      value === "completed"
        ? CheckCircle
        : value === "cancelled"
          ? XCircle
          : Clock;
    return (
      <span
        className={`order-status status-${["pending", "completed", "cancelled"].includes(value) ? value : "other"}`}
      >
        <Icon size={14} />
        {statuses.find((s) => s.value === value)?.label || value}
      </span>
    );
  };
  if (!authenticated)
    return (
      <div className="admin-login">
        <div className="admin-login-intro">
          <span className="eyebrow">AMOR · KHÔNG GIAN QUẢN TRỊ</span>
          <h1>Chăm chút từng đơn hoa.</h1>
          <p>Theo dõi những lời thương đang chờ được gửi trao.</p>
          <Link href="/" className="text-link">
            <ArrowLeft size={16} />
            Về cửa hàng
          </Link>
        </div>
        <form
          className="admin-login-form"
          onSubmit={(event) => {
            event.preventDefault();
            void loadOrders();
          }}
        >
          <LockKeyhole size={32} strokeWidth={1.2} />
          <h2>Đăng nhập quản trị</h2>
          <p>Dùng mật khẩu quản trị để xem đơn hàng.</p>
          <label htmlFor="admin-password">
            Mật khẩu
            <input
              id="admin-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="Nhập mật khẩu quản trị"
            />
          </label>
          {error && (
            <p role="alert" className="form-error">
              {error}
            </p>
          )}
          <button type="submit" className="botanical-button" disabled={loading}>
            {loading ? "Đang xác thực…" : "Đăng nhập"}
          </button>
        </form>
      </div>
    );
  return (
    <div className="admin-page">
      <div className="admin-heading">
        <div>
          <span className="eyebrow">AMOR · QUẢN LÝ ĐƠN HÀNG</span>
          <h1>Những lời thương được gửi đi.</h1>
          <p>Theo dõi và tra cứu đơn hoa của cửa hàng.</p>
        </div>
        <div className="admin-actions">
          <button
            className="outline-button"
            onClick={() => void loadOrders()}
            disabled={loading}
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            {loading ? "Đang tải…" : "Làm mới"}
          </button>
          <button
            className="outline-button"
            onClick={() => {
              setAuthenticated(false);
              setPassword("");
              setOrders([]);
              setError("");
            }}
          >
            <LogOut size={16} />
            Đăng xuất
          </button>
        </div>
      </div>
      <div className="admin-metrics">
        {[
          { label: "Tổng đơn hàng", value: orders.length, icon: Package },
          {
            label: "Chờ xử lý",
            value: orders.filter((o) => o.status === "pending").length,
            icon: Clock,
          },
          {
            label: "Hoàn thành",
            value: orders.filter((o) => o.status === "completed").length,
            icon: CheckCircle,
          },
        ].map(({ label, value, icon: Icon }) => (
          <div key={label}>
            <Icon size={22} strokeWidth={1.2} />
            <span>
              {label}
              <strong>{value}</strong>
            </span>
          </div>
        ))}
      </div>
      <div className="admin-toolbar">
        <label className="admin-search">
          <Search size={19} />
          <input
            aria-label="Tìm đơn hàng"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Tên, số điện thoại hoặc mã đơn…"
          />
        </label>
        <label className="admin-status-filter">
          Trạng thái
          <select
            aria-label="Trạng thái"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            {statuses.map((s) => (
              <option value={s.value} key={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      <p className="admin-result-count" role="status">
        {filtered.length} đơn hàng
      </p>
      <div className="admin-order-list">
        {!filtered.length ? (
          <div className="admin-empty">
            <Package size={42} strokeWidth={1} />
            <h2>
              {search || status !== "all"
                ? "Chưa tìm thấy đơn phù hợp."
                : "Chưa có đơn hàng nào."}
            </h2>
            <p>
              {search || status !== "all"
                ? "Thử đổi từ khóa hoặc trạng thái đơn hàng."
                : "Những đơn hoa mới sẽ xuất hiện tại đây."}
            </p>
          </div>
        ) : (
          filtered.map((order) => (
            <article className="admin-order" key={order.id}>
              <div className="admin-order-heading">
                <div>
                  <span className="eyebrow">ĐƠN HÀNG</span>
                  <h2>#{order.id}</h2>
                  <p>
                    {new Date(order.createdAt).toLocaleString("vi-VN", {
                      timeZone: "Asia/Ho_Chi_Minh",
                    })}
                  </p>
                </div>
                <div>
                  {badge(order.status)}
                  <strong>{order.total.toLocaleString("vi-VN")}₫</strong>
                  <small>
                    {order.paymentMethod === "cod"
                      ? "Thanh toán khi nhận"
                      : order.paymentMethod === "momo"
                        ? "Ví MoMo"
                        : "Chuyển khoản"}
                  </small>
                </div>
              </div>
              <div className="admin-order-body">
                <div>
                  <h3>Người đặt hoa</h3>
                  <p>{order.name}</p>
                  <a href={`tel:${order.phone}`}>{order.phone}</a>
                  <p>{order.address}</p>
                </div>
                <div>
                  <h3>Hoa được chọn</h3>
                  {order.items?.map((item, index) => (
                    <p key={index}>
                      {item.product?.name || "Sản phẩm"}{" "}
                      <span>× {item.quantity}</span>
                    </p>
                  ))}
                </div>
              </div>
              {order.note && (
                <div className="admin-order-note">
                  <strong>Lời nhắn</strong>
                  <p>{order.note}</p>
                </div>
              )}
            </article>
          ))
        )}
      </div>
    </div>
  );
}
