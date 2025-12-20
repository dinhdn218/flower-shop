# 🌸 FlowerShop - Website Bán Hoa Tươi

Website bán hoa tươi chuyên nghiệp được xây dựng với **Next.js 16**, **TypeScript**, và **Tailwind CSS**.

## ✨ Tính Năng Chính

### 🏠 Trang Chủ

- Hero section với call-to-action nổi bật
- Hiển thị danh mục sản phẩm với hình ảnh đẹp
- Sản phẩm nổi bật, bán chạy, và mới nhất
- Các tiện ích: Giao nhanh 90 phút, Hoa tươi 100%, Hỗ trợ 24/7

### 📂 Danh Mục Sản Phẩm

- 8 danh mục chính: Hoa Sinh Nhật, Hoa Khai Trương, Hoa Tình Yêu, Hoa Cưới, Hoa Tốt Nghiệp, Hoa Chúc Mừng, Chậu Lan Hồ Điệp, Hoa Giáng Sinh
- Bộ lọc và sắp xếp sản phẩm
- Grid view responsive

### 🌺 Chi Tiết Sản Phẩm

- Gallery hình ảnh với thumbnail
- Thông tin chi tiết (giá, kích thước, mô tả)
- Chọn số lượng và thêm vào giỏ hàng
- Sản phẩm liên quan
- Badge giảm giá và NEW

### 🛒 Giỏ Hàng

- Hiển thị danh sách sản phẩm trong giỏ
- Cập nhật số lượng, xóa sản phẩm
- Tính tổng tiền tự động
- Lưu giỏ hàng trong localStorage

### 💳 Thanh Toán

- Form thông tin khách hàng và giao hàng
- Lời nhắn trên thiệp
- 3 phương thức: COD, Chuyển khoản, MoMo
- Trang xác nhận đơn hàng thành công

### 💬 Chat Tích Hợp

- Widget chat floating (góc phải màn hình)
- Tích hợp Zalo, Facebook Messenger, và Hotline

### 📄 Trang Bổ Sung

- Về Chúng Tôi
- Liên Hệ (form, thông tin, bản đồ)

## 🛠️ Công Nghệ

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **State**: React Context API

## 🚀 Chạy Project

```bash
# Đã cài đặt dependencies
npm install

# Chạy dev server (đang chạy)
npm run dev

# Mở: http://localhost:3000
```

## 📝 Tùy Chỉnh

### Sửa Sản Phẩm

Chỉnh sửa `lib/data.ts`

### Đổi Màu

Sửa `tailwind.config.ts`

### Chat Integration

Cập nhật số điện thoại/Page ID trong `components/ChatWidgets.tsx`

## 📦 Cấu Trúc

```
app/                    # Pages
├── danh-muc/[slug]/   # Category pages
├── san-pham/[slug]/   # Product pages
├── gio-hang/          # Cart
├── thanh-toan/        # Checkout
└── ...

components/            # Reusable components
lib/                   # Data & utilities
```

## 🌟 Tính Năng Đã Triển Khai

✅ Trang chủ với hero và featured products  
✅ 8 danh mục sản phẩm  
✅ Trang chi tiết sản phẩm  
✅ Giỏ hàng với localStorage  
✅ Trang thanh toán hoàn chỉnh  
✅ Chat widgets (Zalo, Messenger)  
✅ Responsive design  
✅ Trang Về chúng tôi & Liên hệ  
✅ Header & Footer navigation  
✅ Product search & filters ready

## 🔧 Tính Năng Có Thể Mở Rộng

- Backend API integration
- Payment gateway (VNPay, MoMo)
- User authentication
- Admin dashboard
- Email service
- Order tracking
- Reviews & ratings
- Wishlist
- Multi-language

## 📱 Responsive

Hỗ trợ đầy đủ Mobile, Tablet, Desktop

## 📄 License

MIT License - Tự do sử dụng

---

**Demo**: Website đang chạy tại http://localhost:3000

Tham khảo từ: https://www.flowercorner.vn/
