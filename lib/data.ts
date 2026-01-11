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
    id: '7',
    name: 'Chậu Lan Hồ Điệp',
    slug: 'chau-lan-ho-diep',
    description: 'Chậu lan cao cấp, sang trọng',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
    productCount: 19
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
      'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800&q=80'
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
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
      'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&q=80'
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
    id: '7',
    name: 'Chậu Lan Hồ Điệp - Sung Túc',
    slug: 'chau-lan-sung-tuc',
    description: 'Chậu lan hồ điệp cao cấp với 8 cành hoa trắng tinh khôi. Thiết kế sang trọng, phù hợp tặng khai trương, tân gia hoặc làm quà tặng doanh nghiệp.',
    price: 12800000,
    category: 'chau-lan-ho-diep',
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80',
      'https://images.unsplash.com/photo-1588532664772-d0c6c18d1c08?w=800&q=80'
    ],
    size: 'Cao 120cm',
    inStock: true,
    featured: true
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
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=800&q=80'
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
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
      'https://images.unsplash.com/photo-1522673607211-8c29a7e0d1f7?w=800&q=80'
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
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'
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
      'https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=800&q=80',
      'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80'
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
      'https://i.pinimg.com/736x/aa/47/28/aa4728df7c9eaff98fe77be8976cdbb0.jpg',
      'https://i.pinimg.com/736x/44/19/e9/4419e977e2acff69f5038e4e04bb3a96.jpg'
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
      'https://i.pinimg.com/736x/0f/dd/f2/0fddf2e85ad49bf17a13c2d7fc9c1e55.jpg',
      'https://i.pinimg.com/736x/7e/38/21/7e3821eb32f54f4a5db8e2a9c9d94cdf.jpg'
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
      'https://i.pinimg.com/736x/b0/a9/e2/b0a9e27c6e0de4c4c3f1a0c52e6f3fa8.jpg',
      'https://i.pinimg.com/736x/89/91/8a/89918ac18d0eadd82c528e3c0d08e857.jpg'
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
      'https://i.pinimg.com/736x/c4/96/39/c49639f1e60e1f51e2f0ab5f5e8e7c51.jpg',
      'https://i.pinimg.com/736x/12/53/75/125375d8f0a4e5e8d6c2b74d37f92ef5.jpg'
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
      'https://i.pinimg.com/736x/56/0f/bc/560fbccef02e33e72a8f0dc7bdb7fa2a.jpg',
      'https://i.pinimg.com/736x/8d/47/3e/8d473ed4b5e8c1e5a7d6e4f5b2c3a1e0.jpg'
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
      'https://i.pinimg.com/736x/ff/3a/8b/ff3a8b7c9e5d4f2a1b8c6d7e9f0a1b2c.jpg',
      'https://i.pinimg.com/736x/2e/6d/4f/2e6d4f1a3b5c7d8e9f0a1b2c3d4e5f6a.jpg'
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
      'https://i.pinimg.com/736x/a1/2b/3c/a12b3c4d5e6f7a8b9c0d1e2f3a4b5c6d.jpg',
      'https://i.pinimg.com/736x/9f/8e/7d/9f8e7d6c5b4a3f2e1d0c9b8a7f6e5d4c.jpg'
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
      'https://i.pinimg.com/736x/3d/4e/5f/3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a.jpg',
      'https://i.pinimg.com/736x/6c/5d/4e/6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f.jpg'
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
      'https://i.pinimg.com/736x/7f/6e/5d/7f6e5d4c3b2a1f0e9d8c7b6a5f4e3d2c.jpg',
      'https://i.pinimg.com/736x/1e/2f/3a/1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b.jpg'
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
      'https://i.pinimg.com/736x/5c/4d/3e/5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f.jpg',
      'https://i.pinimg.com/736x/8a/7b/6c/8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d.jpg'
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
      'https://i.pinimg.com/736x/2c/3d/4e/2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f.jpg',
      'https://i.pinimg.com/736x/9b/8a/7f/9b8a7f6e5d4c3b2a1f0e9d8c7b6a5f4e.jpg'
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
      'https://i.pinimg.com/736x/4f/5e/6d/4f5e6d7c8a9b0c1d2e3f4a5b6c7d8e9f.jpg',
      'https://i.pinimg.com/736x/6d/7e/8f/6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a.jpg'
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
