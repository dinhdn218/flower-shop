import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flower2, Gift, Truck, Sprout } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import {
  getFeaturedProducts,
  getBestSellerProducts,
  getNewProducts,
} from "@/lib/data";

const occasions = [
  {
    name: "Một lời yêu",
    label: "HOA TÌNH YÊU",
    href: "/hoa-tinh-yeu",
    image:
      "https://i.pinimg.com/736x/1d/7c/fc/1d7cfcea25c9bd92ac8bf8082baf5c55.jpg",
  },
  {
    name: "Ngày của riêng bạn",
    label: "HOA SINH NHẬT",
    href: "/hoa-sinh-nhat",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80",
  },
  {
    name: "Hạnh phúc đơm hoa",
    label: "HOA CƯỚI",
    href: "/hoa-cuoi",
    image:
      "https://i.pinimg.com/736x/b4/b9/1d/b4b91d85860de877b12e67162b324a84.jpg",
  },
  {
    name: "Khởi đầu rực rỡ",
    label: "HOA CHÚC MỪNG",
    href: "/hoa-chuc-mung",
    image:
      "https://i.pinimg.com/736x/50/dc/23/50dc2391a498ab211237eb8e59ad1679.jpg",
  },
];
export default function Home() {
  const collections = [
    {
      eyebrow: "ĐƯỢC AMOR CHỌN RIÊNG",
      title: "Những đóa hoa biết kể chuyện",
      href: "/noi-bat",
      products: getFeaturedProducts().slice(0, 4),
    },
    {
      eyebrow: "NHỮNG MÓN QUÀ ĐƯỢC YÊU",
      title: "Thay bạn gửi ngàn thương mến",
      href: "/ban-chay",
      products: getBestSellerProducts().slice(0, 4),
    },
    {
      eyebrow: "MỘT CHÚT TƯƠI MỚI",
      title: "Vừa ghé vườn nhà Amor",
      href: "/san-pham-moi",
      products: getNewProducts().slice(0, 4),
    },
  ];
  return (
    <div className="storefront">
      <section className="floral-hero">
        <div className="hero-copy">
          <span className="eyebrow">AMOR FLORIST · TIỆM HOA CỦA TÌNH YÊU</span>
          <h1>
            Có những điều,
            <br />
            chỉ <em>hoa</em> mới
            <br />
            nói thành lời.
          </h1>
          <p>
            Một bó hoa, một lời thương. Để Amor cùng bạn gửi gắm những cảm xúc
            chân thành đến người đặc biệt.
          </p>
          <div className="hero-actions">
            <Link href="/noi-bat" className="botanical-button">
              Khám phá bộ sưu tập <ArrowRight size={17} />
            </Link>
            <Link href="/ve-chung-toi" className="text-link">
              Câu chuyện Amor <ArrowRight size={16} />
            </Link>
          </div>
          <div className="hero-note">
            <Flower2 size={21} strokeWidth={1.3} />
            <span>Được nâng niu từ những cánh hoa đầu tiên.</span>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1200&q=85"
            alt="Bó hoa tươi với sắc hồng dịu dàng tại Amor Florist"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 52vw"
            className="hero-image"
          />
          <div className="hero-photo-caption">
            <span>NGHỆ THUẬT TRAO TẶNG</span>
            <span>Hoa đẹp. Tình yêu đẹp.</span>
          </div>
          <div className="flower-seal">
            <Flower2 size={30} strokeWidth={1} />
            <span>
              GÓI GHÉM
              <br />
              YÊU THƯƠNG
            </span>
          </div>
        </div>
      </section>
      <section className="service-strip" aria-label="Dịch vụ Amor">
        {[
          {
            icon: Truck,
            title: "Giao nhanh 90 phút",
            text: "Trao yêu thương đúng lúc",
          },
          {
            icon: Sprout,
            title: "Hoa tươi mỗi ngày",
            text: "Chọn từng cành, nâng từng cánh",
          },
          {
            icon: Gift,
            title: "Thiệp viết tay miễn phí",
            text: "Gửi lời thương theo cách của bạn",
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title}>
            <Icon size={27} strokeWidth={1.2} />
            <span>
              <strong>{title}</strong>
              <small>{text}</small>
            </span>
          </div>
        ))}
      </section>
      <section className="boutique-section occasion-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MỖI DỊP ĐẶC BIỆT, MỘT SẮC HOA</span>
            <h2>Hôm nay, bạn muốn gửi điều gì?</h2>
          </div>
          <Flower2 className="heading-flower" size={45} strokeWidth={1} />
        </div>
        <div className="occasion-grid">
          {occasions.map((occasion, index) => (
            <Link
              href={occasion.href}
              className="occasion-card group"
              key={occasion.href}
            >
              <div className="occasion-image">
                <Image
                  src={occasion.image}
                  alt={occasion.label}
                  fill
                  sizes="(max-width: 760px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="occasion-number">0{index + 1}</span>
              </div>
              <div className="occasion-caption">
                <div>
                  <span className="eyebrow">{occasion.label}</span>
                  <h3>{occasion.name}</h3>
                </div>
                <ArrowRight size={20} strokeWidth={1.3} />
              </div>
            </Link>
          ))}
        </div>
        <div className="extra-occasions">
          <span>Còn nhiều điều muốn nói?</span>
          <Link href="/hoa-tot-nghiep">
            Hoa tốt nghiệp <ArrowRight size={14} />
          </Link>
          <Link href="/hoa-bo">
            Hoa bó <ArrowRight size={14} />
          </Link>
        </div>
      </section>
      {collections
        .filter((c) => c.products.length)
        .map((collection, index) => (
          <section
            className={`boutique-section collection-section ${index === 1 ? "blush-section" : ""}`}
            key={collection.href}
          >
            <div className="section-heading">
              <div>
                <span className="eyebrow">{collection.eyebrow}</span>
                <h2>{collection.title}</h2>
              </div>
              <Link href={collection.href} className="text-link">
                Xem tất cả <ArrowRight size={17} />
              </Link>
            </div>
            <div className="product-grid">
              {collection.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      <section className="amor-story">
        <Flower2 size={52} strokeWidth={1} />
        <span className="eyebrow">MỘT CHÚT TỪ TRÁI TIM AMOR</span>
        <h2>
          Không chỉ là hoa.
          <br />
          Là cách mình <em>thương nhau.</em>
        </h2>
        <p>
          Amor tin rằng mỗi bó hoa đều mang một câu chuyện. Chúng mình lắng
          nghe, chọn lựa và gói ghém thật chỉn chu, để lời thương của bạn được
          trao đi trọn vẹn.
        </p>
        <Link href="/ve-chung-toi" className="text-link">
          Ghé thăm câu chuyện của chúng mình <ArrowRight size={17} />
        </Link>
      </section>
      <section className="consultation">
        <div>
          <span className="eyebrow">AMOR LUÔN SẴN LÒNG LẮNG NGHE</span>
          <h2>Để chúng mình giúp bạn chọn hoa.</h2>
          <p>Kể Amor nghe về người bạn thương và dịp đặc biệt của bạn nhé.</p>
        </div>
        <a href="tel:0869867694" className="botanical-button">
          Gọi Amor · 086 986 7694 <ArrowRight size={17} />
        </a>
      </section>
    </div>
  );
}
