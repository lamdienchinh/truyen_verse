import hero_banner from "@/assets/imgs/hero-banner-img.webp";
import { Button } from "@workspace/ui/components/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `url(${hero_banner.src})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-[500px] overflow-hidden"
    >
      <div className="absolute inset-0 dark:bg-gradient-to-r from-background/80 to-background/20">
        <div className="container h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Khám phá thế giới truyện chữ
          </h1>
          <p className="text-xl mb-6 text-white">
            Hàng ngàn truyện đặc sắc đang chờ bạn
          </p>
          <div className="space-x-4">
            <Link href="/category">
              <Button size="lg">Khám phá ngay</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
