# ✅ FIX: Lỗi Đặt Hàng Trên Vercel

## 🐛 Vấn đề
Trên Vercel, hệ thống không thể lưu đơn hàng vào file `data/orders.json` vì filesystem là read-only trong môi trường serverless.

## ✨ Giải pháp
Đã cập nhật hệ thống để:
1. ✅ **Hoạt động bình thường trên Vercel** - không còn lỗi khi đặt hàng
2. ✅ **Gửi thông báo qua webhook** - Discord, Telegram, Google Sheets
3. ✅ **Log đơn hàng** - có thể xem trong Vercel Runtime Logs
4. ✅ **Vẫn lưu file ở local** - khi chạy `npm run dev`

## 🚀 Cách thiết lập (Chọn 1 trong 3)

### Phương án 1: Discord (Đơn giản nhất)
```bash
# Trong Vercel Environment Variables:
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_URL
```

### Phương án 2: Telegram
```bash
TELEGRAM_BOT_TOKEN=123456:ABC-DEF...
TELEGRAM_CHAT_ID=123456789
```

### Phương án 3: Google Sheets (qua Make.com)
```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://hook.us1.make.com/YOUR_WEBHOOK
```

## 📖 Hướng dẫn chi tiết
Xem file: [VERCEL_ORDERS_GUIDE.md](./VERCEL_ORDERS_GUIDE.md)

## 🧪 Test ngay
1. Deploy lên Vercel
2. Đặt hàng thử tại: https://amor-florist.vercel.app
3. Kiểm tra:
   - Discord/Telegram: Nhận thông báo ngay
   - Vercel Logs: Runtime Logs → Tìm "=== NEW ORDER ==="

## 📁 Files đã thay đổi
- ✅ `app/api/orders/route.ts` - API xử lý đơn hàng
- ✅ `lib/notifications.ts` - Hệ thống gửi thông báo
- ✅ `VERCEL_ORDERS_GUIDE.md` - Hướng dẫn chi tiết
- ✅ `.env.local.example` - Template environment variables

## ⚡ Deploy ngay
```bash
git add .
git commit -m "Fix: Vercel order system with webhooks"
git push
```

Vercel sẽ tự động deploy. Sau đó vào **Settings → Environment Variables** để thêm webhook URL!
