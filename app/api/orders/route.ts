import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { sendOrderNotifications } from '@/lib/notifications';
import { kv } from '@vercel/kv';

const DATA_DIR = path.join(process.cwd(), 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');
const ORDERS_KEY = 'flower-shop:orders';

// Kiểm tra môi trường
const isVercel = process.env.VERCEL === '1' || process.env.KV_REST_API_URL;

// Đảm bảo thư mục data tồn tại
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Đọc danh sách đơn hàng
async function getOrders() {
  try {
    // Trên Vercel, sử dụng KV (Redis)
    if (isVercel) {
      const orders = await kv.get<any[]>(ORDERS_KEY);
      return orders || [];
    }
    
    // Local - đọc từ file
    await ensureDataDir();
    if (existsSync(ORDERS_FILE)) {
      const data = await readFile(ORDERS_FILE, 'utf-8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error reading orders:', error);
    return [];
  }
}

// Lưu đơn hàng mới
async function saveOrder(order: any) {
  const newOrder = {
    ...order,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  try {
    const orders = await getOrders();
    orders.unshift(newOrder);
    
    // Trên Vercel, lưu vào KV (Redis)
    if (isVercel) {
      await kv.set(ORDERS_KEY, orders);
      console.log('=== NEW ORDER SAVED TO KV ===');
      console.log(JSON.stringify(newOrder, null, 2));
      console.log('============================');
    } else {
      // Local - lưu vào file
      await ensureDataDir();
      await writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2));
    }
    
    // Gửi notifications
    await sendOrderNotifications(newOrder);
    
    return newOrder;
  } catch (error) {
    console.error('Error saving order:', error);
    throw error;
  }
}

// POST - Tạo đơn hàng mới
export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    const savedOrder = await saveOrder(orderData);
    
    return NextResponse.json({ success: true, order: savedOrder });
  } catch (error) {
    console.error('Error processing order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save order' },
      { status: 500 }
    );
  }
}

// GET - Lấy danh sách đơn hàng (yêu cầu mật khẩu đơn giản)
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const password = searchParams.get('password');
  
  // Mật khẩu đơn giản để xem đơn hàng (nên thay đổi trong production)
  if (password !== 'amorflorist2026') {
    return NextResponse.json(
      { success: false, error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const orders = await getOrders();
    return NextResponse.json({ success: true, orders });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
