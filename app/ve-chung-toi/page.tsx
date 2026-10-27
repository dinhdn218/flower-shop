import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sprout, Flower2 } from "lucide-react";
import PageIntro from "@/components/PageIntro";
export const metadata = { title: "Về Amor — Amor Florist" };
export default function AboutPage() {
  return (
    <div className="editorial-page">
      <PageIntro
        title="Một tiệm hoa, nhiều lời thương."
        description="Amor là tình yêu. Và chúng mình chọn kể câu chuyện ấy bằng những cánh hoa."
        eyebrow="CÂU CHUYỆN NHỎ CỦA AMOR"
      />
      <section className="about-story">
        <div className="about-photo">
          <Image
            src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=1000&q=85"
            alt="Những cánh hoa được chọn lựa và gói ghém tại Amor"
            fill
            sizes="(max-width:760px) 88vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="about-copy">
          <span className="eyebrow">BẮT ĐẦU TỪ MỘT TÌNH YÊU</span>
          <h2>
            Hoa không chỉ để ngắm.
            <br />
            Hoa còn để nói thương.
          </h2>
          <p>
            Amor Florist ra đời từ tình yêu dành cho những bông hoa và những
            khoảnh khắc đời thường. Chúng mình tin rằng một bó hoa có thể làm
            ngày của ai đó dịu lại, khiến một lời chúc trở nên gần gũi, hay giúp
            bạn nói điều vẫn giữ trong lòng.
          </p>
          <p>
            “Amor” trong tiếng Tây Ban Nha có nghĩa là “tình yêu”. Đó cũng là
            điều chúng mình gửi vào mỗi thiết kế: sự chân thành, một chút tinh
            tế và thật nhiều chăm chút.
          </p>
          <p>
            Từ chọn hoa, phối sắc đến gói từng nếp giấy, Amor muốn món quà khi
            đến tay người nhận sẽ mang trọn cảm xúc của bạn.
          </p>
          <Link href="/noi-bat" className="text-link">
            Ngắm những thiết kế của Amor <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <section className="about-values">
        <div className="section-heading">
          <div>
            <span className="eyebrow">NHỮNG ĐIỀU AMOR GÌN GIỮ</span>
            <h2>Chăm chút từ những điều nhỏ nhất.</h2>
          </div>
        </div>
        <div className="values-grid">
          {[
            {
              icon: Heart,
              title: "Từ trái tim",
              text: "Lắng nghe câu chuyện của bạn, để mỗi bó hoa mang một ý nghĩa thật riêng.",
            },
            {
              icon: Sprout,
              title: "Tươi mới mỗi ngày",
              text: "Chọn lựa từng cành hoa, phối hợp sắc màu và nâng niu đến tận khi trao tay.",
            },
            {
              icon: Flower2,
              title: "Chỉn chu từng chút",
              text: "Tỉ mỉ từ cánh hoa đến tấm thiệp, để lời thương của bạn được gửi đi trọn vẹn.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <Icon size={34} strokeWidth={1} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="consultation">
        <div>
          <span className="eyebrow">MỜI BẠN GHÉ AMOR</span>
          <h2>Một câu chuyện mới, bắt đầu từ bạn.</h2>
          <p>Kể chúng mình nghe về người bạn thương nhé.</p>
        </div>
        <Link href="/lien-he" className="botanical-button">
          Trò chuyện với Amor <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
}
