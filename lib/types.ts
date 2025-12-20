export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  category: string;
  images: string[];
  size?: string;
  inStock: boolean;
  featured?: boolean;
  bestSeller?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CheckoutInfo {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  district: string;
  deliveryDate: string;
  deliveryTime: string;
  cardMessage: string;
  paymentMethod: 'cod' | 'bank' | 'momo';
}
