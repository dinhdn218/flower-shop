# Hướng Dẫn Cấu Hình Vercel KV Để Lưu Đơn Hàng

## Vấn Đề

- Local: Đơn hàng được lưu trong file `data/orders.json` ✅
- Vercel: Filesystem read-only, không thể lưu file → đơn hàng bị mất ❌

## Giải Pháp: Sử dụng Vercel KV (Redis)

Vercel KV là database Redis miễn phí (3000 commands/day) được tích hợp sẵn với Vercel.

## Bước 1: Tạo Vercel KV Database

1. Đăng nhập vào https://vercel.com
2. Vào project **amor-florist**
3. Chọn tab **Storage** → **Create Database**
4. Chọn **KV** (Redis)
5. Đặt tên: `flower-shop-orders`
6. Chọn region gần Việt Nam nhất (Singapore hoặc Hong Kong)
7. Click **Create**

## Bước 2: Kết Nối Database Với Project

Sau khi tạo database:

1. Vercel sẽ tự động thêm environment variables vào project:

   - `KV_URL`
   - `KV_REST_API_URL`
   - `KV_REST_API_TOKEN`
   - `KV_REST_API_READ_ONLY_TOKEN`

2. Kiểm tra trong **Settings** → **Environment Variables**

## Bước 3: Deploy Lại

```bash
git add .
git commit -m "feat: use Vercel KV for orders storage"
git push origin master
```

Vercel sẽ tự động deploy lại với database mới.

## Bước 4: Kiểm Tra

1. Truy cập: https://amor-florist.vercel.app/thanh-toan
2. Đặt 1 đơn hàng thử
3. Vào: https://amor-florist.vercel.app/admin/orders
4. Nhập mật khẩu: `amorflorist2026`
5. Đơn hàng sẽ hiển thị ✅

## Migration Đơn Hàng Cũ (Nếu Có)

Nếu bạn muốn chuyển đơn hàng từ `data/orders.json` lên Vercel KV:

### Cách 1: Qua Vercel Dashboard

1. Vào **Storage** → **flower-shop-orders** → **Data Browser**
2. Click **Add Key**
3. Key: `flower-shop:orders`
4. Type: `json`
5. Value: Copy toàn bộ nội dung từ `data/orders.json`
6. Click **Save**

### Cách 2: Qua API Script

Tạo file `migrate-orders.js`:

```javascript
const { kv } = require("@vercel/kv");
const orders = require("./data/orders.json");

async function migrateOrders() {
  await kv.set("flower-shop:orders", orders);
  console.log("✅ Migrated", orders.length, "orders to Vercel KV");
}

migrateOrders();
```

Chạy:

```bash
node migrate-orders.js
```

## Cách Hoạt Động

### Local Development

- Đơn hàng được lưu vào `data/orders.json`
- Dễ dàng xem và debug

### Production (Vercel)

- Đơn hàng được lưu vào Vercel KV (Redis)
- Nhanh, bền vững, scalable
- Không bị mất khi deploy

## Giới Hạn Free Tier

**Vercel KV Free:**

- 256 MB storage
- 3,000 commands/day
- ~100 đơn hàng/ngày (mỗi đơn ~30 commands)

Nếu vượt quá, nâng cấp Pro: $20/tháng (unlimited)

## Xem Đơn Hàng Trong Database

### Vercel Dashboard

1. **Storage** → **flower-shop-orders** → **Data Browser**
2. Tìm key: `flower-shop:orders`
3. Click để xem JSON

### Vercel CLI

```bash
npm i -g vercel
vercel link
vercel env pull
node -e "const { kv } = require('@vercel/kv'); kv.get('flower-shop:orders').then(console.log)"
```

## Backup Tự Động (Khuyến Nghị)

Thêm script backup đơn hàng định kỳ:

```javascript
// app/api/backup-orders/route.ts
import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

export async function GET() {
  const orders = await kv.get("flower-shop:orders");
  return NextResponse.json({
    orders,
    total: orders?.length || 0,
    timestamp: new Date().toISOString(),
  });
}
```

Lưu vào Google Sheets hoặc email định kỳ.

## Troubleshooting

### Lỗi "KV_REST_API_URL is not defined"

→ Chưa tạo Vercel KV database hoặc chưa deploy lại

### Đơn hàng không hiển thị

1. Kiểm tra Vercel logs: `vercel logs`
2. Xem trong Vercel Dashboard → Storage → Data Browser
3. Kiểm tra console.log trong Functions logs

### Local không hoạt động

→ Code tự động dùng file JSON khi chạy local, không cần KV

## Kết Luận

✅ Code đã được update để:

- **Local**: Lưu vào `data/orders.json`
- **Vercel**: Lưu vào Vercel KV (Redis)

Chỉ cần tạo Vercel KV database và deploy lại là xong!
