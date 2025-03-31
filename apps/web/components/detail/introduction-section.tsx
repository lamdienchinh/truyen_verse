"use client";
import bouquet_icon from "@/assets/icons/bouquet-icon.png";
import { getRandomImage } from "@/utils/common";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Separator } from "@workspace/ui/components/separator";
import { cn } from "@workspace/ui/lib/utils";
import {
    Bookmark,
    BookOpen,
    CircleAlert,
    Heart,
    MessageSquareText,
    Star,
    X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function IntroductionSection() {
  const image = getRandomImage(1);
  const [isNominated, setIsNominated] = useState(false);
  return (
    <section className="container py-4">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
        <div className="mx-auto md:mx-0">
          <Image
            className="object-cover rounded-md"
            width={200}
            height={280}
            style={{
              width: '200px',
              height: '280px',
            }}
            src={image || ""}
            alt="ảnh thumbnail"
          />
        </div>
        <div className="flex flex-col justify-between gap-4 flex-1 w-full">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">Truyền thuyết chi chủ</h2>
            <div className="text-gray-600">Tác giả: Cá Mè Nheo</div>
            <div className="text-gray-600">Đăng bởi: Chin Chin</div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full justify-center md:justify-start">
            <Link href="detail/abcd">
              <Button className="flex items-center gap-1 text-xs sm:text-sm h-8 sm:h-10">
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" /> Đọc truyện
              </Button>
            </Link>
            <Button className="flex items-center gap-1 text-xs sm:text-sm h-8 sm:h-10" variant="outline">
              <Bookmark className="w-3 h-3 sm:w-4 sm:h-4" /> Đánh dấu
            </Button>
            <Button
              className="flex items-center gap-1 relative text-xs sm:text-sm h-8 sm:h-10"
              variant="outline"
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4" /> Đánh giá
              <div className="text-white text-[8px] sm:text-[10px] flex items-center justify-center absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 bg-orange-300 p-1 rounded-full">
                4.5
              </div>
            </Button>
            <Button
              className="flex items-center gap-1 relative text-xs sm:text-sm h-8 sm:h-10"
              variant="outline"
            >
              <MessageSquareText className="w-3 h-3 sm:w-4 sm:h-4" /> Thảo luận
              <div className="text-white text-[8px] sm:text-[10px] flex items-center justify-center absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 bg-orange-300 p-1 rounded-full">
                150
              </div>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 sm:flex justify-center md:justify-start items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="font-bold text-base sm:text-lg">10</div>
              <div className="text-xs sm:text-sm">Chương/tuần</div>
            </div>
            <Separator className="hidden sm:block h-8" orientation="vertical" />
            <div className="flex flex-col items-center">
              <div className="font-bold text-base sm:text-lg">300</div>
              <div className="text-xs sm:text-sm">Lượt đọc</div>
            </div>
            <Separator className="hidden sm:block h-8" orientation="vertical" />
            <div className="flex flex-col items-center">
              <div className="font-bold text-base sm:text-lg">200</div>
              <div className="text-xs sm:text-sm">Đánh dấu</div>
            </div>
            <Separator className="hidden sm:block h-8" orientation="vertical" />
            <div className="flex flex-col items-center">
              <div className="font-bold text-base sm:text-lg">20</div>
              <div className="text-xs sm:text-sm">Đề cử</div>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
            <Badge>Hoàn thành</Badge>
            <Badge variant="secondary">Cổ trang</Badge>
            <Badge variant="secondary">Xuyên thư</Badge>
            <Badge variant="secondary">Thị giác nữ chủ</Badge>
            <Badge variant="secondary">Cung đấu</Badge>
          </div>
          
          {/* Bottom actions */}
          <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
            <Button
              onClick={() => setIsNominated((prev) => !prev)}
              className={cn(
                "text-xs sm:text-sm",
                isNominated && "!bg-red-500 hover:bg-opacity-85 text-white"
              )}
              variant="secondary"
              size={"sm"}
            >
              {!isNominated ? (
                <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
              ) : (
                <X className="fill-white w-3 h-3 sm:w-4 sm:h-4" />
              )}
              {isNominated ? "Huỷ đề cử" : "Đề cử truyện"}
            </Button>
            <Button
              className="flex items-center gap-2 text-xs sm:text-sm"
              variant="secondary"
              size={"sm"}
            >
              <Image height={16} width={16} src={bouquet_icon} alt="bó hoa" />
              Tặng hoa
            </Button>
            <Button
              className="flex items-center gap-2 text-xs sm:text-sm"
              variant="destructive"
              size={"sm"}
            >
              <CircleAlert className="w-3 h-3 sm:w-4 sm:h-4" /> Báo cáo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
