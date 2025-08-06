import banner from "@/assets/imgs/article-banner.jpg";
import { Input } from "@workspace/ui/components/input";
import { Search } from "lucide-react";
import Image from "next/image";

export default function ArticleBanner() {
  return (
    <div className="relative w-full h-60 rounded-lg overflow-hidden">
      <Image
        src={banner}
        className="object-cover w-full h-full"
        alt="ảnh banner"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/20 flex items-center justify-center">
        <div className="relative flex items-center w-full max-w-[40vw]">
          <Search className="absolute left-3 h-5 w-5 text-white" />
          <Input
            placeholder="Tìm kiếm bài viết..."
            className="pl-10 py-2 w-full bg-white/20 text-white placeholder:text-white border border-white/50 rounded-md focus:outline-none focus:ring-2 focus:ring-white/80"
            type="search"
            name="q"
          />
        </div>
      </div>
    </div>
  );
}
