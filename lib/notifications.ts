// Utility functions for sending order notifications

interface Order {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  district: string;
  deliveryDate: string;
  deliveryTime: string;
  cardMessage?: string;
  paymentMethod: string;
  items: any[];
  total: number;
  createdAt: string;
  status: string;
}

// Format đơn hàng thành text đẹp
export function formatOrderMessage(order: Order): string {
  const items = order.items
    .map((item) => `  • ${item.product.name} x${item.quantity} - ${(item.product.price * item.quantity).toLocaleString('vi-VN')}đ`)
    .join('\n');

  return `
🌸 ĐơN HÀNG MỚI #${order.id}
━━━━━━━━━━━━━━━━━━━━━━

👤 KHÁCH HÀNG:
  • Họ tên: ${order.fullName}
  • SĐT: ${order.phone}
  • Email: ${order.email || 'Không có'}

📍 GIAO HÀNG:
  • Địa chỉ: ${order.address}
  • Quận/Huyện: ${order.district}
  • Thành phố: ${order.city}
  • Ngày giao: ${order.deliveryDate}
  • Giờ giao: ${order.deliveryTime}

🛍️ SẢN PHẨM:
${items}

💰 THANH TOÁN:
  • Tổng tiền: ${order.total.toLocaleString('vi-VN')}đ
  • Phương thức: ${order.paymentMethod === 'cod' ? 'COD' : order.paymentMethod === 'bank' ? 'Chuyển khoản' : 'MoMo'}

💌 LỜI NHẮN THIỆP:
${order.cardMessage || 'Không có'}

⏰ Thời gian đặt: ${new Date(order.createdAt).toLocaleString('vi-VN')}
`.trim();
}

// Gửi thông báo qua Discord Webhook
export async function sendDiscordNotification(order: Order, webhookUrl: string) {
  try {
    const message = formatOrderMessage(order);
    
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: '🌸 **ĐƠN HÀNG MỚI**',
        embeds: [{
          title: `Đơn hàng #${order.id}`,
          description: message,
          color: 0xec4899, // Pink color
          timestamp: order.createdAt,
          footer: {
            text: 'Amor Florist'
          }
        }]
      })
    });
    
    return true;
  } catch (error) {
    console.error('Discord notification failed:', error);
    return false;
  }
}

// Gửi thông báo qua Telegram Bot
export async function sendTelegramNotification(order: Order, botToken: string, chatId: string) {
  try {
    const message = formatOrderMessage(order);
    
    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML'
      })
    });
    
    return true;
  } catch (error) {
    console.error('Telegram notification failed:', error);
    return false;
  }
}

// Gửi đơn hàng tới Google Sheets qua webhook (Make.com/Zapier)
export async function sendToGoogleSheets(order: Order, webhookUrl: string) {
  try {
    const payload = {
      orderId: order.id,
      customerName: order.fullName,
      phone: order.phone,
      email: order.email || '',
      address: `${order.address}, ${order.district}, ${order.city}`,
      deliveryDate: order.deliveryDate,
      deliveryTime: order.deliveryTime,
      items: order.items.map(item => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price
      })),
      total: order.total,
      paymentMethod: order.paymentMethod,
      cardMessage: order.cardMessage || '',
      createdAt: order.createdAt,
      status: order.status
    };
    
    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    return true;
  } catch (error) {
    console.error('Google Sheets webhook failed:', error);
    return false;
  }
}

// Gửi thông báo qua tất cả các kênh đã cấu hình
export async function sendOrderNotifications(order: Order) {
  const notifications = [];

  // Discord
  if (process.env.DISCORD_WEBHOOK_URL) {
    notifications.push(
      sendDiscordNotification(order, process.env.DISCORD_WEBHOOK_URL)
    );
  }

  // Telegram
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    notifications.push(
      sendTelegramNotification(
        order,
        process.env.TELEGRAM_BOT_TOKEN,
        process.env.TELEGRAM_CHAT_ID
      )
    );
  }

  // Google Sheets (Make.com/Zapier)
  if (process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    notifications.push(
      sendToGoogleSheets(order, process.env.GOOGLE_SHEETS_WEBHOOK_URL)
    );
  }

  // Generic webhook
  if (process.env.ORDER_WEBHOOK_URL) {
    notifications.push(
      fetch(process.env.ORDER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      }).then(() => true).catch(() => false)
    );
  }

  // Đợi tất cả notifications
  await Promise.allSettled(notifications);
}
