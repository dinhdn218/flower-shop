import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const ORDERS_FILE = path.join(DATA_DIR, 'orders.json');

// Đảm bảo thư mục data tồn tại
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Đọc danh sách đơn hàng
async function getOrders() {
  try {
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
  try {
    await ensureDataDir();
    const orders = await getOrders();
    const newOrder = {
      ...order,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'pending'
    };
    orders.unshift(newOrder); // Thêm vào đầu danh sách
    await writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2));
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
  if (password !== 'amorflorist2024') {
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
