export function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
}

export function calculateDiscount(originalPrice: number, price: number): number {
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}
