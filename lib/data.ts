import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Hoa Sinh Nhật',
    slug: 'hoa-sinh-nhat',
    description: 'Hoa tặng sinh nhật cho mọi đối tượng',
    image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80',
    productCount: 45
  },
  {
    id: '2',
    name: 'Hoa Khai Trương',
    slug: 'hoa-khai-truong',
    description: 'Kệ hoa chúc mừng khai trương',
    image: 'https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=800&q=80',
    productCount: 32
  },
  {
    id: '3',
    name: 'Hoa Tình Yêu',
    slug: 'hoa-tinh-yeu',
    description: 'Hoa hồng và hoa tặng người yêu',
    image: 'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80',
    productCount: 67
  },
  {
    id: '4',
    name: 'Hoa Cưới',
    slug: 'hoa-cuoi',
    description: 'Hoa cầm tay cô dâu, hoa trang trí',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
    productCount: 28
  },
  {
    id: '5',
    name: 'Hoa Tốt Nghiệp',
    slug: 'hoa-tot-nghiep',
    description: 'Hoa chúc mừng tốt nghiệp',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    productCount: 23
  },
  {
    id: '6',
    name: 'Hoa Chúc Mừng',
    slug: 'hoa-chuc-mung',
    description: 'Hoa chúc mừng đa dạng',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
    productCount: 41
  },
  {
    id: '8',
    name: 'Hoa Giáng Sinh',
    slug: 'hoa-giang-sinh',
    description: 'Hoa và cây trang trí Noel',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
    productCount: 25
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Thiên Thần',
    slug: 'thien-than',
    description: 'Bó hoa hồng trắng tinh khôi với hoa baby trắng, thể hiện sự trong sáng và thuần khiết. Thích hợp tặng sinh nhật, chúc mừng, hoặc tặng người bạn yêu thương.',
    price: 410000,
    category: 'hoa-sinh-nhat',
    images: [
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80',
      'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80'
    ],
    size: 'Cao 40cm',
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: '2',
    name: 'Đam Mê',
    slug: 'dam-me',
    description: 'Bó hoa hồng đỏ rực rỡ với lá mạ vàng, thể hiện tình yêu nồng cháy và đam mê mãnh liệt. Món quà hoàn hảo cho ngày Valentine hoặc kỷ niệm.',
    price: 490000,
    originalPrice: 530000,
    discount: 8,
    category: 'hoa-tinh-yeu',
    images: [
      'https://i.pinimg.com/1200x/d7/3d/a3/d73da3631c8e86c9f024f74a1d8f12d1.jpg',
      'https://i.pinimg.com/1200x/d7/3d/a3/d73da3631c8e86c9f024f74a1d8f12d1.jpg'
    ],
    size: 'Cao 45cm',
    inStock: true,
    bestSeller: true
  },
  {
    id: '3',
    name: 'Pink Moon',
    slug: 'pink-moon',
    description: 'Bó hoa hồng Ecuador cao cấp với tone màu hồng pastel nhẹ nhàng, kết hợp với các loại hoa phụ tạo nên vẻ đẹp sang trọng và lãng mạn.',
    price: 1200000,
    category: 'hoa-sinh-nhat',
    images: [
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80',
      'https://images.unsplash.com/photo-1586985046862-f1afb2ebb0fb?w=800&q=80'
    ],
    size: 'Cao 50cm',
    inStock: true,
    bestSeller: true
  },
  {
    id: '4',
    name: 'Vintage Love',
    slug: 'vintage-love',
    description: 'Bó hoa phong cách vintage với sắc màu pastel nhẹ nhàng, kết hợp hoa hồng, cẩm chướng và hoa phụ. Phù hợp với phong cách cổ điển, lãng mạn.',
    price: 460000,
    originalPrice: 520000,
    discount: 12,
    category: 'hoa-tinh-yeu',
    images: [
      'https://i.pinimg.com/736x/eb/d1/6c/ebd16c53ac342d3fce0fe3dbcb623c00.jpg',
      'https://i.pinimg.com/736x/eb/d1/6c/ebd16c53ac342d3fce0fe3dbcb623c00.jpg'
    ],
    size: 'Cao 40cm',
    inStock: true,
    bestSeller: true
  },
  {
    id: '5',
    name: 'Kệ Hoa Khai Trương Nhiệt Huyết',
    slug: 'ke-hoa-nhiet-huyet',
    description: 'Kệ hoa chúc mừng khai trương với sắc đỏ rực rỡ, thể hiện sự thịnh vượng và may mắn. Thiết kế sang trọng với hoa đồng tiền, hồng và các loại hoa cao cấp.',
    price: 920000,
    category: 'hoa-khai-truong',
    images: [
      'https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    ],
    size: 'Cao 180cm',
    inStock: true
  },
  {
    id: '6',
    name: 'Ngày Tươi Đẹp',
    slug: 'ngay-tuoi-dep',
    description: 'Bó hoa với sắc màu tươi sáng, kết hợp hoa hướng dương, cúc mẫu đơn và các loại hoa mùa xuân. Mang đến năng lượng tích cực và niềm vui.',
    price: 550000,
    originalPrice: 630000,
    discount: 13,
    category: 'hoa-chuc-mung',
    images: [
      'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
      'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&q=80'
    ],
    size: 'Cao 45cm',
    inStock: true,
    bestSeller: true
  },
  {
    id: '8',
    name: 'Summer Vibe',
    slug: 'summer-vibe',
    description: 'Bó hoa với tone màu vàng cam tươi sáng, kết hợp hoa hướng dương, hồng và các loại hoa mùa hè. Mang đến không khí rộn ràng, náo nhiệt.',
    price: 490000,
    originalPrice: 520000,
    discount: 6,
    category: 'hoa-sinh-nhat',
    images: [
      'https://i.pinimg.com/736x/1b/5f/dd/1b5fddc1e419f75e324eee23dd72ce63.jpg',
      'https://i.pinimg.com/736x/1b/5f/dd/1b5fddc1e419f75e324eee23dd72ce63.jpg'
    ],
    size: 'Cao 40cm',
    inStock: true,
    isNew: true
  },
  {
    id: '9',
    name: 'Fairy Tale',
    slug: 'fairy-tale',
    description: 'Bó hoa phong cách cổ tích với sắc tím lavender, hồng pastel và trắng. Thiết kế nhẹ nhàng, mơ màng như trong truyện cổ tích.',
    price: 680000,
    category: 'hoa-cuoi',
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
      'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=800&q=80'
    ],
    size: 'Cao 45cm',
    inStock: true,
    isNew: true
  },
  {
    id: '10',
    name: 'Thấu Cảm',
    slug: 'thau-cam',
    description: 'Bó hoa với tone màu nhẹ nhàng, thể hiện sự đồng cảm và chia sẻ. Phù hợp để động viên, thăm hỏi hoặc bày tỏ sự quan tâm.',
    price: 490000,
    originalPrice: 550000,
    discount: 11,
    category: 'hoa-chuc-mung',
    images: [
      'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&q=80',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80'
    ],
    size: 'Cao 40cm',
    inStock: true,
    isNew: true
  },
  {
    id: '11',
    name: 'Hoa Cầm Tay Cô Dâu - Romance',
    slug: 'hoa-co-dau-romance',
    description: 'Hoa cầm tay cô dâu phong cách cổ điển với hoa hồng trắng và hồng pastel. Thiết kế tinh tế, thanh lịch cho ngày trọng đại.',
    price: 850000,
    category: 'hoa-cuoi',
    images: [
      'https://i.pinimg.com/736x/b1/51/46/b15146346d850da5cb21594be8b4bc20.jpg',
      'https://i.pinimg.com/736x/b1/51/46/b15146346d850da5cb21594be8b4bc20.jpg'
    ],
    size: 'Đường kính 25cm',
    inStock: true
  },
  {
    id: '12',
    name: 'Chúc Mừng Tốt Nghiệp',
    slug: 'chuc-mung-tot-nghiep',
    description: 'Bó hoa tươi sáng với hoa hướng dương và hoa hồng vàng, thể hiện sự thành công và tương lai rạng rỡ. Phù hợp tặng lễ tốt nghiệp.',
    price: 380000,
    category: 'hoa-tot-nghiep',
    images: [
      'https://i.pinimg.com/736x/ce/95/36/ce95361c779054d597c0982b38b36186.jpg',
      'https://i.pinimg.com/736x/ce/95/36/ce95361c779054d597c0982b38b36186.jpg'
    ],
    size: 'Cao 40cm',
    inStock: true
  },
  {
    id: '13',
    name: 'Feliz Navidad',
    slug: 'feliz-navidad',
    description: 'Bó hoa Giáng Sinh với sắc đỏ truyền thống, kết hợp hoa hồng đỏ, quả tùng và các phụ kiện Noel. Mang không khí ấm áp của mùa lễ hội.',
    price: 580000,
    category: 'hoa-giang-sinh',
    images: [
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80',
      'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80'
    ],
    size: 'Cao 45cm',
    inStock: true
  },
  {
    id: '14',
    name: 'Elegant',
    slug: 'elegant',
    description: 'Bó hoa cao cấp với 99 bông hồng Ecuador, thể hiện sự sang trọng và đẳng cấp. Món quà hoàn hảo cho những dịp đặc biệt quan trọng.',
    price: 2940000,
    category: 'hoa-tinh-yeu',
    images: [
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800&q=80',
      'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80'
    ],
    size: 'Cao 60cm',
    inStock: true,
    featured: true
  },
  {
    id: '15',
    name: 'Kệ Hoa Khai Trương - Phồn Vinh',
    slug: 'ke-hoa-phon-vinh',
    description: 'Kệ hoa khai trương cao cấp với thiết kế hoành tráng, kết hợp nhiều loại hoa cao cấp. Thể hiện sự thịnh vượng và phát đạt trong kinh doanh.',
    price: 2370000,
    category: 'hoa-khai-truong',
    images: [
      'https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
    ],
    size: 'Cao 200cm',
    inStock: true
  },
  {
    id: '16',
    name: 'Only Love',
    slug: 'only-love',
    description: 'Bó hoa hồng đỏ kết hợp với baby và lá bạc, thiết kế đơn giản nhưng tinh tế. Thể hiện tình yêu chân thành và thuần khiết.',
    price: 390000,
    originalPrice: 410000,
    discount: 5,
    category: 'hoa-tinh-yeu',
    images: [
      'https://i.pinimg.com/736x/a1/a8/68/a1a8680cef7862ccd7f1935aec5de89a.jpg',
      'https://i.pinimg.com/736x/a1/a8/68/a1a8680cef7862ccd7f1935aec5de89a.jpg'
    ],
    size: 'Cao 40cm',
    inStock: true
  },
  {
    id: '17',
    name: 'Hồng Pastel',
    slug: 'hong-pastel',
    description: 'Bó hoa hồng tone màu pastel nhẹ nhàng, kết hợp với hoa cẩm chướng và các loại hoa phụ. Thích hợp tặng sinh nhật, chúc mừng.',
    price: 420000,
    category: 'hoa-sinh-nhat',
    images: [
      'https://i.pinimg.com/736x/29/80/3c/29803ccbbc52584cef28600199d0ed8a.jpg',
      'https://i.pinimg.com/736x/29/80/3c/29803ccbbc52584cef28600199d0ed8a.jpg'
    ],
    size: 'Cao 45cm',
    inStock: true,
    isNew: true,
    bestSeller: true
  },
  {
    id: '18',
    name: 'Tulip Hồng',
    slug: 'tulip-hong',
    description: 'Bó tulip hồng tươi tắn, nhập khẩu từ Hà Lan. Thiết kế đơn giản nhưng sang trọng, thích hợp tặng người yêu.',
    price: 650000,
    category: 'hoa-tinh-yeu',
    images: [
      'https://i.pinimg.com/736x/d1/65/fc/d165fc41daefae7798035f1484cb7a00.jpg',
      'https://i.pinimg.com/736x/d1/65/fc/d165fc41daefae7798035f1484cb7a00.jpg'
    ],
    size: 'Cao 40cm',
    inStock: true,
    featured: true,
    isNew: true
  },
  {
    id: '19',
    name: 'Hoa Baby Trắng',
    slug: 'hoa-baby-trang',
    description: 'Bó hoa baby trắng tinh khôi, đơn giản mà đẹp. Thích hợp cho những ai yêu thích phong cách tối giản.',
    price: 350000,
    category: 'hoa-bo',
    images: [
      'https://i.pinimg.com/736x/b6/66/fd/b666fd07c17471d2f18ee52684791701.jpg',
      'https://i.pinimg.com/736x/b6/66/fd/b666fd07c17471d2f18ee52684791701.jpg'
    ],
    size: 'Cao 35cm',
    inStock: true,
    bestSeller: true
  },
  {
    id: '20',
    name: 'Hướng Dương Vàng',
    slug: 'huong-duong-vang',
    description: 'Bó hoa hướng dương tươi sáng, mang đến năng lượng tích cực. Món quà hoàn hảo cho những dịp vui vẻ.',
    price: 380000,
    category: 'hoa-sinh-nhat',
    images: [
      'https://i.pinimg.com/1200x/4e/ae/c4/4eaec4d94fda048f2a4a8c03cd713ef8.jpg',
      'https://i.pinimg.com/1200x/4e/ae/c4/4eaec4d94fda048f2a4a8c03cd713ef8.jpg'
    ],
    size: 'Cao 50cm',
    inStock: true,
    featured: true
  },
  {
    id: '21',
    name: 'Hoa Cẩm Chướng Mix',
    slug: 'hoa-cam-chuong-mix',
    description: 'Bó hoa cẩm chướng nhiều màu sắc rực rỡ, tươi tắn và bền lâu. Thích hợp tặng mẹ hoặc thầy cô.',
    price: 320000,
    category: 'hoa-chuc-mung',
    images: [
      'https://i.pinimg.com/1200x/a6/c8/e6/a6c8e6b0a102f2983c9bdc7d94e287bc.jpg',
      'https://i.pinimg.com/1200x/a6/c8/e6/a6c8e6b0a102f2983c9bdc7d94e287bc.jpg'
    ],
    size: 'Cao 40cm',
    inStock: true,
    isNew: true
  },
  {
    id: '22',
    name: 'Hồng Đỏ Premium',
    slug: 'hong-do-premium',
    description: 'Bó hoa hồng đỏ Ecuador cao cấp, hoa to và bền lâu. Thể hiện tình yêu mãnh liệt và đam mê.',
    price: 890000,
    originalPrice: 950000,
    discount: 6,
    category: 'hoa-tinh-yeu',
    images: [
      'https://i.pinimg.com/736x/40/23/b8/4023b840a3c4b3eac3944ddea210daf3.jpg',
      'https://i.pinimg.com/736x/40/23/b8/4023b840a3c4b3eac3944ddea210daf3.jpg'
    ],
    size: 'Cao 50cm',
    inStock: true,
    featured: true,
    bestSeller: true
  },
  {
    id: '23',
    name: 'Lily Trắng Tinh Khôi',
    slug: 'lily-trang-tinh-khoi',
    description: 'Bó hoa lily trắng thuần khiết, hương thơm dễ chịu. Thích hợp tặng cho các dịp trang trọng.',
    price: 580000,
    category: 'hoa-cuoi',
    images: [
      'https://i.pinimg.com/736x/be/ea/f8/beeaf82c4b3a16a18059d92dd04459f7.jpg',
      'https://i.pinimg.com/736x/be/ea/f8/beeaf82c4b3a16a18059d92dd04459f7.jpg'
    ],
    size: 'Cao 55cm',
    inStock: true,
    isNew: true
  },
  {
    id: '24',
    name: 'Cẩm Tú Cầu Xanh',
    slug: 'cam-tu-cau-xanh',
    description: 'Bó hoa cẩm tú cầu xanh nhẹ nhàng, sang trọng. Thể hiện sự thanh lịch và tinh tế.',
    price: 720000,
    category: 'hoa-chuc-mung',
    images: [
      'https://i.pinimg.com/736x/e3/e3/3b/e3e33bbf390292b154fcf3259ddd5ddc.jpg',
      'https://i.pinimg.com/736x/e3/e3/3b/e3e33bbf390292b154fcf3259ddd5ddc.jpg'
    ],
    size: 'Cao 45cm',
    inStock: true,
    featured: true
  },
  {
    id: '25',
    name: 'Hồng Phấn Ngọt Ngào',
    slug: 'hong-phan-ngot-ngao',
    description: 'Bó hoa hồng phấn dịu dàng, kết hợp với hoa phụ và lá xanh. Thích hợp tặng sinh nhật bạn gái.',
    price: 450000,
    category: 'hoa-sinh-nhat',
    images: [
      'https://i.pinimg.com/736x/f8/a3/26/f8a326cdb26b1ae57a822a1701731626.jpg',
      'https://i.pinimg.com/736x/f8/a3/26/f8a326cdb26b1ae57a822a1701731626.jpg'
    ],
    size: 'Cao 42cm',
    inStock: true,
    bestSeller: true
  },
  {
    id: '26',
    name: 'Hoa Kết Cầu Vĩnh Cửu',
    slug: 'hoa-ket-cau-vinh-cuu',
    description: 'Hộp hoa hồng đỏ vĩnh cửu sang trọng, có thể giữ mãi. Món quà ý nghĩa cho người thân yêu.',
    price: 950000,
    category: 'hoa-tinh-yeu',
    images: [
      'https://i.pinimg.com/736x/65/94/33/659433baa434e5360ec3728f39333204.jpg',
      'https://i.pinimg.com/736x/65/94/33/659433baa434e5360ec3728f39333204.jpg'
    ],
    size: 'Hộp 20x20cm',
    inStock: true,
    featured: true
  },
  {
    id: '27',
    name: 'Bó Hoa Tốt Nghiệp Rực Rỡ',
    slug: 'bo-hoa-tot-nghiep-ruc-ro',
    description: 'Bó hoa tốt nghiệp với tông màu vàng cam rực rỡ, thể hiện sự vinh quang và thành công.',
    price: 420000,
    category: 'hoa-tot-nghiep',
    images: [
      'https://i.pinimg.com/736x/d2/58/33/d25833bcafe44359a726151d6322f578.jpg',
      'https://i.pinimg.com/736x/d2/58/33/d25833bcafe44359a726151d6322f578.jpg'
    ],
    size: 'Cao 48cm',
    inStock: true,
    isNew: true
  },
  {
    id: '28',
    name: 'Hoa Cầm Tay Cô Dâu',
    slug: 'hoa-cam-tay-co-dau',
    description: 'Hoa cầm tay cô dâu với hoa hồng trắng và phấn, thiết kế tinh tế và lãng mạn.',
    price: 850000,
    category: 'hoa-cuoi',
    images: [
      'https://i.pinimg.com/1200x/3a/18/88/3a18884f0d3973d6b207369c7b66b15a.jpg',
      'https://i.pinimg.com/1200x/3a/18/88/3a18884f0d3973d6b207369c7b66b15a.jpg'
    ],
    size: 'Cao 35cm',
    inStock: true,
    featured: true
  }
];

// Helper functions
export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter(p => p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getBestSellerProducts(): Product[] {
  return products.filter(p => p.bestSeller);
}

export function getNewProducts(): Product[] {
  return products.filter(p => p.isNew);
}
