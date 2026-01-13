# 📦 Hướng Dẫn Quản Lý Đơn Hàng - Amor Florist

## Cách Xem Đơn Hàng

### 1. Truy cập trang quản lý đơn hàng

Mở trình duyệt và truy cập:

```
http://localhost:3000/admin/orders
```

### 2. Đăng nhập

- Mật khẩu mặc định: `amorflorist2024`
- Nhập mật khẩu và click "Đăng nhập"

### 3. Xem danh sách đơn hàng

- Tất cả đơn hàng sẽ hiển thị theo thứ tự mới nhất
- Bạn có thể tìm kiếm theo:
  - Tên khách hàng
  - Số điện thoại
  - Mã đơn hàng

### 4. Thông tin đơn hàng bao gồm:

- Mã đơn hàng
- Ngày giờ đặt hàng
- Trạng thái đơn hàng
- Thông tin khách hàng (tên, sđt, địa chỉ)
- Danh sách sản phẩm
- Tổng tiền
- Phương thức thanh toán
- Ghi chú (nếu có)

## Thay Đổi Mật Khẩu

1. Mở file `app/api/orders/route.ts`
2. Tìm dòng:

```typescript
if (password !== 'amorflorist2024') {
```

3. Thay đổi `amorflorist2024` thành mật khẩu mới của bạn
4. Lưu file và khởi động lại server

## Lưu Trữ Đơn Hàng

- Tất cả đơn hàng được lưu trong file `data/orders.json`
- File này tự động tạo khi có đơn hàng đầu tiên
- **Quan trọng**: File này đã được thêm vào `.gitignore` để không bị đẩy lên GitHub

## Backup Đơn Hàng

Để backup đơn hàng, chỉ cần sao chép file `data/orders.json` sang nơi an toàn.

## Nâng Cấp (Tùy Chọn)

Nếu muốn hệ thống phức tạp hơn, bạn có thể:

- Kết nối với database (PostgreSQL, MongoDB, v.v.)
- Thêm tính năng cập nhật trạng thái đơn hàng
- Gửi email/SMS thông báo đơn hàng
- Tạo dashboard thống kê
- Thêm xác thực người dùng chuyên nghiệp hơn

## Liên Hệ Support

Nếu cần hỗ trợ, vui lòng liên hệ:

- Email: kewoanh07@gmail.com
- Phone: 086 986 7694
