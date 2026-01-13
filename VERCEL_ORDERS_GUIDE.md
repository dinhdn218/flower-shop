# Hướng Dẫn Nhận Đơn Hàng Trên Vercel

Vì Vercel không cho phép lưu file, bạn cần thiết lập webhook để nhận thông báo đơn hàng. Dưới đây là các phương án:

## 🎯 Phương Án 1: Discord Webhook (Đơn giản nhất - KHUYẾN NGHỊ)

### Bước 1: Tạo Discord Webhook
1. Mở Discord, vào server của bạn
2. Chọn channel muốn nhận thông báo (ví dụ: #đơn-hàng)
3. Click vào ⚙️ (Settings) → Integrations → Webhooks
4. Click "New Webhook"
5. Đặt tên (ví dụ: "Amor Florist Orders")
6. Copy Webhook URL

### Bước 2: Cấu hình Vercel
1. Vào Vercel Dashboard → Project Settings → Environment Variables
2. Thêm biến: 
   - Key: `DISCORD_WEBHOOK_URL`
   - Value: (paste webhook URL từ Discord)
3. Redeploy project

### Kết quả:
Mỗi khi có đơn hàng mới, bạn sẽ nhận thông báo đầy đủ trong Discord!

---

## 📱 Phương Án 2: Telegram Bot (Tốt cho mobile)

### Bước 1: Tạo Telegram Bot
1. Mở Telegram, tìm @BotFather
2. Gửi lệnh `/newbot`
3. Đặt tên và username cho bot
4. Copy **Bot Token** (dạng: 123456:ABC-DEF...)

### Bước 2: Lấy Chat ID
1. Tìm bot vừa tạo và gửi tin nhắn `/start`
2. Mở: `https://api.telegram.org/bot<BOT_TOKEN>/getUpdates`
3. Tìm `"chat":{"id":123456789}` - đó là Chat ID của bạn

### Bước 3: Cấu hình Vercel
Thêm 2 environment variables:
- `TELEGRAM_BOT_TOKEN`: Bot token từ BotFather
- `TELEGRAM_CHAT_ID`: Chat ID của bạn

---

## 📊 Phương Án 3: Google Sheets (Lưu trữ dài hạn)

### Bước 1: Tạo Make.com Scenario
1. Đăng ký [Make.com](https://make.com) (free)
2. Tạo scenario mới với:
   - Trigger: **Webhooks** → Custom Webhook
   - Action: **Google Sheets** → Add a Row

### Bước 2: Thiết lập Google Sheets
1. Tạo Google Sheets với các cột:
   - Order ID | Name | Phone | Email | Address | Delivery Date | Time | Items | Total | Payment | Message | Created At

2. Trong Make.com, map các field từ webhook:
   ```
   orderId → Column A
   customerName → Column B
   phone → Column C
   ...
   ```

### Bước 3: Cấu hình Vercel
- Key: `GOOGLE_SHEETS_WEBHOOK_URL`
- Value: Webhook URL từ Make.com

---

## 🔔 Phương Án 4: Kết hợp tất cả

Bạn có thể dùng cả 3 phương án cùng lúc:
- **Discord**: Thông báo nhanh
- **Telegram**: Xem trên mobile
- **Google Sheets**: Lưu trữ và quản lý

---

## 📝 Kiểm tra Logs trên Vercel

Nếu chưa thiết lập webhook, đơn hàng vẫn được log trong Vercel:

1. Vào Vercel Dashboard
2. Chọn Project → Deployments
3. Click vào deployment mới nhất
4. Chọn tab "Runtime Logs"
5. Tìm "=== NEW ORDER ===" để xem chi tiết đơn hàng

---

## 🚀 Sau khi deploy

1. Test đặt hàng trên https://amor-florist.vercel.app
2. Kiểm tra notifications trong Discord/Telegram
3. Xem dữ liệu trong Google Sheets (nếu có)

---

## 💡 Lưu ý

- **Discord webhook**: Free, không giới hạn
- **Telegram bot**: Free, tốt cho mobile
- **Make.com**: Free tier - 1000 operations/month
- **Vercel logs**: Xem được trong 24h

---

## ❓ Câu hỏi thường gặp

**Q: Tôi có thể dùng email thay vì webhook?**
A: Có, nhưng cần dịch vụ như Resend API (có phí). Webhook miễn phí và nhanh hơn.

**Q: Dữ liệu có mất không?**
A: Nếu dùng Google Sheets, dữ liệu được lưu vĩnh viễn. Webhook chỉ gửi thông báo.

**Q: Có thể tích hợp CRM không?**
A: Có, dùng Make.com hoặc Zapier để gửi đến bất kỳ hệ thống nào.

---

## 🆘 Cần hỗ trợ?

Nếu gặp khó khăn, vui lòng liên hệ để được hướng dẫn chi tiết!
