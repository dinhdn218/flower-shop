# ✅ CHECKLIST: Deploy và Thiết Lập Webhook

## 📋 Trước khi deploy

- [x] Đã sửa lỗi API orders để hoạt động trên Vercel
- [x] Đã tạo hệ thống notification (Discord, Telegram, Google Sheets)
- [x] Đã test build thành công (`npm run build`)
- [x] Đã tạo tài liệu hướng dẫn

## 🚀 Deploy lên Vercel

### 1. Push code lên Git
```bash
git add .
git commit -m "fix: Vercel order system with webhook notifications"
git push origin main
```

### 2. Vercel tự động deploy
- Chờ ~2-3 phút
- Kiểm tra Deployments tab để đảm bảo deploy thành công

## 🔔 Thiết lập Notification (QUAN TRỌNG!)

### Option 1: Discord (Khuyến nghị - 5 phút)

#### A. Tạo Discord Webhook
1. [ ] Mở Discord
2. [ ] Vào server của bạn
3. [ ] Chọn channel (vd: #đơn-hàng hoặc #notifications)
4. [ ] Click vào Settings (⚙️) của channel
5. [ ] Integrations → Webhooks → New Webhook
6. [ ] Đặt tên: "Amor Florist Orders"
7. [ ] Copy Webhook URL
   ```
   Dạng: https://discord.com/api/webhooks/123456789/abc-xyz...
   ```

#### B. Thêm vào Vercel
1. [ ] Vào https://vercel.com/dashboard
2. [ ] Chọn project "flower-shop"
3. [ ] Settings → Environment Variables
4. [ ] Add Variable:
   - **Name:** `DISCORD_WEBHOOK_URL`
   - **Value:** [paste webhook URL]
   - **Environment:** Production, Preview, Development
5. [ ] Save
6. [ ] Redeploy: Deployments → ... → Redeploy

---

### Option 2: Telegram (Tốt cho mobile - 10 phút)

#### A. Tạo Telegram Bot
1. [ ] Mở Telegram, tìm **@BotFather**
2. [ ] Gửi: `/newbot`
3. [ ] Đặt tên bot (vd: Amor Florist Orders)
4. [ ] Đặt username (vd: amor_florist_orders_bot)
5. [ ] **Copy Bot Token** (dạng: 123456:ABC-DEF...)

#### B. Lấy Chat ID
1. [ ] Tìm bot vừa tạo và gửi: `/start`
2. [ ] Mở browser: 
   ```
   https://api.telegram.org/bot[BOT_TOKEN]/getUpdates
   ```
   (thay [BOT_TOKEN] bằng token thực)
3. [ ] Tìm `"chat":{"id":123456789}` → Copy số ID

#### C. Thêm vào Vercel
1. [ ] Vercel → Settings → Environment Variables
2. [ ] Add 2 variables:
   - `TELEGRAM_BOT_TOKEN` = [bot token]
   - `TELEGRAM_CHAT_ID` = [chat id]
3. [ ] Save và Redeploy

---

### Option 3: Google Sheets (Lưu trữ lâu dài - 15 phút)

#### A. Tạo Google Sheet
1. [ ] Vào Google Sheets, tạo sheet mới
2. [ ] Tạo các cột:
   ```
   A: Order ID
   B: Customer Name
   C: Phone
   D: Email
   E: Address
   F: Delivery Date
   G: Delivery Time
   H: Items
   I: Total
   J: Payment Method
   K: Card Message
   L: Created At
   ```

#### B. Tạo Make.com Scenario
1. [ ] Đăng ký https://make.com (free)
2. [ ] Create New Scenario
3. [ ] Add Module: **Webhooks** → Custom Webhook
4. [ ] **Copy Webhook URL**
5. [ ] Add Module: **Google Sheets** → Add a Row
6. [ ] Connect Google account
7. [ ] Select spreadsheet và sheet
8. [ ] Map fields:
   - A ← orderId
   - B ← customerName
   - C ← phone
   - ... (map tất cả)
9. [ ] Save và Activate scenario

#### C. Thêm vào Vercel
1. [ ] Vercel → Settings → Environment Variables
2. [ ] Add:
   - `GOOGLE_SHEETS_WEBHOOK_URL` = [Make.com webhook URL]
3. [ ] Save và Redeploy

---

## 🧪 Test Hệ Thống

### 1. Test đặt hàng
1. [ ] Vào https://amor-florist.vercel.app
2. [ ] Chọn sản phẩm → Thêm vào giỏ
3. [ ] Tiến hành đặt hàng với thông tin:
   ```
   Họ tên: Test Order
   SĐT: 0901234567
   Địa chỉ: 123 Test Street
   ```
4. [ ] Click "Đặt hàng"
5. [ ] ✅ Phải chuyển đến trang "Đặt hàng thành công"

### 2. Kiểm tra notification
1. [ ] **Discord:** Mở channel → Có thông báo đơn hàng mới
2. [ ] **Telegram:** Mở bot → Nhận tin nhắn đơn hàng
3. [ ] **Google Sheets:** Refresh sheet → Có dòng mới

### 3. Kiểm tra Vercel Logs (backup)
1. [ ] Vercel Dashboard → Deployments
2. [ ] Click deployment mới nhất
3. [ ] Tab "Runtime Logs"
4. [ ] Tìm "=== NEW ORDER ===" → Thấy thông tin đơn hàng

---

## 🎯 Kết quả mong đợi

Sau khi hoàn thành checklist:

✅ Khách hàng đặt hàng thành công trên website
✅ Bạn nhận thông báo tức thì qua Discord/Telegram
✅ Đơn hàng được lưu vào Google Sheets (nếu dùng)
✅ Backup trong Vercel Logs

---

## ⚠️ Troubleshooting

### Vẫn gặp lỗi khi đặt hàng?
1. Check Vercel Logs để xem lỗi cụ thể
2. Verify webhook URL đúng format
3. Test webhook bằng cách gửi test message

### Không nhận notification?
1. Kiểm tra Environment Variables đã save chưa
2. Đã redeploy sau khi thêm variables chưa?
3. Test webhook URL trực tiếp bằng curl

### Google Sheets không cập nhật?
1. Kiểm tra Make.com scenario đã activate
2. Check execution history trong Make.com
3. Verify mapping fields đúng

---

## 📞 Cần hỗ trợ?

Xem tài liệu chi tiết:
- [FIX_SUMMARY.md](./FIX_SUMMARY.md) - Tóm tắt fix
- [VERCEL_ORDERS_GUIDE.md](./VERCEL_ORDERS_GUIDE.md) - Hướng dẫn chi tiết
- [VERCEL_FIX.md](./VERCEL_FIX.md) - Chi tiết kỹ thuật

---

**Thời gian thiết lập:** ~10-15 phút
**Độ khó:** ⭐⭐☆☆☆ (Dễ)
