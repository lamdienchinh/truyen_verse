import hero_banner from "@/assets/imgs/hero-banner-img.webp";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[350px] sm:h-[400px] md:h-[500px] overflow-hidden">
      <Image className="relative z-0" alt="ảnh nền" src={hero_banner} />
      <div className="bg-black/20 inset-0 absolute z-1"/>
      <div className="absolute z-2 inset-0 dark:bg-gradient-to-r from-background/80 to-background/20">
        <div className="container h-full flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 text-white">
            Khám phá thế giới truyện chữ
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 text-white">
            Hàng ngàn truyện đặc sắc đang chờ bạn
          </p>
          <div className="space-x-4">
            <Link href="/category">
              <Button size="lg" className="text-sm sm:text-base">
                Khám phá ngay
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
