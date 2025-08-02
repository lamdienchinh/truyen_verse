import hero_banner from "@/assets/imgs/hero-banner-img.webp";
import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden">
      <Image
        className="object-cover object-center"
        alt="Hero banner - Khám phá thế giới truyện chữ"
        src={hero_banner}
        fill
        priority
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

      <div className="relative z-10 h-full">
        <div className="container h-full flex items-center">
          <div className="max-w-2xl space-y-4 sm:space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm">
              <span className="text-xs sm:text-sm font-medium text-primary-foreground">
                ✨ Cập nhật hàng ngày
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="text-white">Khám phá</span>
              <br />
              <span className="text-white">
                thế giới truyện chữ
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-lg">
              Hàng ngàn truyện đặc sắc từ nhiều thể loại khác nhau đang chờ bạn
              khám phá. Đọc miễn phí, cập nhật liên tục.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link href="/category">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base font-semibold px-8 py-3 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Khám phá ngay
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-lg"></div>
    </section>
  );
}
