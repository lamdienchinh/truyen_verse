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
    <section className="container">
      <div className="flex gap-4 w-full">
        <div>
          <Image
            className="object-cover rounded-md"
            width={250}
            height={350}
            src={image || ""}
            alt="ảnh thumbnail"
          />
        </div>
        <div className="flex flex-col justify-between gap-2 flex-1 w-full">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Truyền thuyết chi chủ</h2>
            <div className="text-gray-600">Tác giả: Cá Mè Nheo</div>
            <div className="text-gray-600">Đăng bởi: Chin Chin</div>
          </div>
          <div className="flex items-center gap-3 w-full">
            <Link href="detail/abcd">
              <Button className="flex items-center gap-1">
                <BookOpen width={10} height={10} /> Đọc truyện
              </Button>
            </Link>
            <Button className="flex items-center gap-1" variant="outline">
              <Bookmark width={10} height={10} /> Đánh dấu truyện
            </Button>
            <Button
              className="flex items-center gap-1 relative"
              variant="outline"
            >
              <Star width={10} height={10} /> Đánh giá
              <div className="text-white text-[10px] flex items-center justify-center absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 bg-orange-300 p-1 rounded-full">
                4.5
              </div>
            </Button>
            <Button
              className="flex items-center gap-1 relative"
              variant="outline"
            >
              <MessageSquareText width={10} height={10} /> Thảo luận
              <div className="text-white text-[10px] flex items-center justify-center absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 bg-orange-300 p-1 rounded-full">
                150
              </div>
            </Button>
          </div>
          <div className="flex justify-start items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="font-bold text-lg">10</div>{" "}
              <div className="text-sm">Chương/tuần</div>
            </div>
            <Separator className="h-8" orientation="vertical" />
            <div className="flex flex-col items-center">
              <div className="font-bold text-lg">300</div>{" "}
              <div className="text-sm">Lượt đọc</div>
            </div>
            <Separator className="h-8" orientation="vertical" />
            <div className="flex flex-col items-center">
              <div className="font-bold text-lg">200</div>{" "}
              <div className="text-sm">Đánh dấu</div>
            </div>
            <Separator className="h-8" orientation="vertical" />
            <div className="flex flex-col items-center">
              <div className="font-bold text-lg">20</div>{" "}
              <div className="text-sm">Đề cử</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge>Hoàn thành</Badge>
            <Badge variant="secondary">Cổ trang</Badge>
            <Badge variant="secondary">Xuyên thư</Badge>
            <Badge variant="secondary">Thị giác nữ chủ</Badge>
            <Badge variant="secondary">Cung đấu</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setIsNominated((prev) => !prev)}
              className={cn(
                isNominated && "!bg-red-500 hover:bg-opacity-85 text-white"
              )}
              variant="secondary"
              size={"sm"}
            >
              {!isNominated ? (
                <Heart width={10} height={10} />
              ) : (
                <X className="fill-white" width={10} height={10} />
              )}
              {isNominated ? "Huỷ đề cử" : "Đề cử truyện"}
            </Button>
            <Button
              className="flex items-center gap-2"
              variant="secondary"
              size={"sm"}
            >
              <Image height={20} width={20} src={bouquet_icon} alt="bó hoa" />
              Tặng hoa
            </Button>
            <Button
              className="flex items-center gap-2"
              variant="destructive"
              size={"sm"}
            >
              <CircleAlert width={10} height={10} /> Báo cáo truyện
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
