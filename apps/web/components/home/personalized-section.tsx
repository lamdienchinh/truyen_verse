import { getRandomImage } from "@/utils/common";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { ScrollArea, ScrollBar } from "@workspace/ui/components/scroll-area";
import Image, { StaticImageData } from "next/image";

interface NovelItemProps {
  title: string;
  chapter: number;
  cover?: string | StaticImageData;
}

const NovelItem = ({ title, chapter, cover }: NovelItemProps) => (
  <Card className="overflow-hidden">
    <CardContent className="p-0 relative">
      <div className="relative overflow-hidden h-[300px] group cursor-pointer">
        <Image
          src={cover || "/placeholder.svg"}
          alt={title}
          width={250}
          height={250}
          className="object-cover w-full h-[300px] transition-transform duration-200 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h4 className="font-semibold line-clamp-2">{title}</h4>
        <p className="mt-1 text-sm text-gray-300">Chương {chapter}</p>
      </div>
    </CardContent>
  </Card>
);

export default function PersonalizedSection() {
  const sample_img = getRandomImage(2);
  const continueReading = [
    { title: "Đấu La Đại Lục", chapter: 352, cover: sample_img },
    { title: "Tru Tiên", chapter: 128, cover: sample_img },
    { title: "Phàm Nhân Tu Tiên", chapter: 215, cover: sample_img },
    { title: "Võ Luyện Đỉnh Phong", chapter: 180, cover: sample_img },
  ];

  const recommendations = [
    { title: "Tiên Nghịch", chapter: 1, cover: sample_img },
    { title: "Đế Bá", chapter: 1, cover: sample_img },
    { title: "Ngã Dục Phong Thiên", chapter: 1, cover: sample_img },
    { title: "Thần Đạo Đan Tôn", chapter: 1, cover: sample_img },
  ];

  return (
    <section className="py-12">
      <div className="container space-y-4">
        <div className="flex flex-row items-center justify-between">
          <div className="text-2xl font-bold">Tiếp tục đọc</div>
          <Button variant="outline">Xem tất cả</Button>
        </div>
        <div>
          <ScrollArea className="w-full pb-4">
            <div className="flex space-x-4">
              {continueReading.map((novel, index) => (
                <NovelItem key={index} {...novel} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="flex flex-row items-center justify-between">
          <div className="text-2xl font-bold">Gợi ý cho bạn</div>
          <Button variant="outline">Xem tất cả</Button>
        </div>
        <div>
          <ScrollArea className="w-full pb-4">
            <div className="flex space-x-4">
              {recommendations.map((novel, index) => (
                <NovelItem key={index} {...novel} />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}
