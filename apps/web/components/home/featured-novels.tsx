"use client";

import { getRandomImage } from "@/utils/common";
import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent, CardFooter } from "@workspace/ui/components/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@workspace/ui/components/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import Autoplay from "embla-carousel-autoplay";
import { Layers, UserRound } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface NovelCardProps {
  title: string;
  author: string;
  cover?: string | StaticImageData;
  desc?: string;
  totalChapters?: number;
  category?: string;
}

const NovelCard = ({
  title,
  author,
  cover,
  desc,
  totalChapters = 300,
  category = "Tiên hiệp",
}: NovelCardProps) => (
  <Card className="overflow-hidden">
    <CardContent className="p-0 relative">
      <div className="relative overflow-hidden h-[250px] group cursor-pointer">
        <Image
          src={cover || "/placeholder.svg"}
          alt={title}
          width={250}
          height={250}
          className="object-cover w-full h-[250px] transition-transform duration-200 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" />
      </div>
      <div className="flex items-center gap-2 absolute left-2 bottom-2">
        <Badge>{totalChapters} chương</Badge>
        <Badge className="flex items-center gap-2 bg-blue-500">
          <Layers width={10} height={10} /> {category}
        </Badge>
      </div>
    </CardContent>
    <CardFooter className="flex flex-col items-start pt-2 px-2 space-y-2">
      <div className="font-semibold line-clamp-1 text-sm">{title}</div>
      <div className="flex items-center gap-1 text-xs line-clamp-1">
        <UserRound width={15} height={15} />
        {author}
      </div>
      <div className="text-sm line-clamp-2 text-gray-400">{desc}</div>
    </CardFooter>
  </Card>
);

const sample_img = getRandomImage(1);

const novels = [
  {
    title: "Đấu La Đại Lục",
    author: "Đường Gia Tam Thiếu",
    desc: `Chuyển sinh tu hành thế giới mười sáu năm, từ phế linh căn bắt đầu vấn ma tu hành.

....

Kiểm tra đo lường linh căn ngày rơi xuống ngũ đẳng, kiếp này khó có thể đột phá Luyện Khí trung kỳ, tiên môn không thu, trường sinh khó cầu.

Vừa lúc gặp Ma tông dịch nô, từ các nơi c·ướp đoạt tư chất thấp hèn giả vì “Linh nô”, lấy nhiên thọ ma công bồi dưỡng nhiều phê háo tài, lệnh này tự tổn hại tu vi chế tác linh sa, cung cấp Ma tông hưởng dụng.

Vương Dục tại Thạch Hồ thành b·ị c·ướp hướng Ma Vực chi địa, lấy linh nô chi thân nhập ma đạo đại môn, may mắn có 【 Cất đặt cột 】 bàng thân, có thể giải quyết rất nhiều vấn đề!

....

【 Cất đặt cột 1: Nhiên Huyết công 】

“Nhiên Huyết công ( 0/100 ): Một ngày 48 luyện, một năm có thể thành.”

Ps: (tóm tắt vô lực, dời bước chính văn)`,
    cover: sample_img,
  },
  {
    title: "Tru Tiên",
    author: "Tiêu Đỉnh",
    desc: `Chuyển sinh tu hành thế giới mười sáu năm, từ phế linh căn bắt đầu vấn ma tu hành.

....

Kiểm tra đo lường linh căn ngày rơi xuống ngũ đẳng, kiếp này khó có thể đột phá Luyện Khí trung kỳ, tiên môn không thu, trường sinh khó cầu.

Vừa lúc gặp Ma tông dịch nô, từ các nơi c·ướp đoạt tư chất thấp hèn giả vì “Linh nô”, lấy nhiên thọ ma công bồi dưỡng nhiều phê háo tài, lệnh này tự tổn hại tu vi chế tác linh sa, cung cấp Ma tông hưởng dụng.

Vương Dục tại Thạch Hồ thành b·ị c·ướp hướng Ma Vực chi địa, lấy linh nô chi thân nhập ma đạo đại môn, may mắn có 【 Cất đặt cột 】 bàng thân, có thể giải quyết rất nhiều vấn đề!

....

【 Cất đặt cột 1: Nhiên Huyết công 】

“Nhiên Huyết công ( 0/100 ): Một ngày 48 luyện, một năm có thể thành.”

Ps: (tóm tắt vô lực, dời bước chính văn)`,
    cover: sample_img,
  },
  {
    title: "Phàm Nhân Tu Tiên",
    author: "Vong Ngữ",
    desc: `Chuyển sinh tu hành thế giới mười sáu năm, từ phế linh căn bắt đầu vấn ma tu hành.

....

Kiểm tra đo lường linh căn ngày rơi xuống ngũ đẳng, kiếp này khó có thể đột phá Luyện Khí trung kỳ, tiên môn không thu, trường sinh khó cầu.

Vừa lúc gặp Ma tông dịch nô, từ các nơi c·ướp đoạt tư chất thấp hèn giả vì “Linh nô”, lấy nhiên thọ ma công bồi dưỡng nhiều phê háo tài, lệnh này tự tổn hại tu vi chế tác linh sa, cung cấp Ma tông hưởng dụng.

Vương Dục tại Thạch Hồ thành b·ị c·ướp hướng Ma Vực chi địa, lấy linh nô chi thân nhập ma đạo đại môn, may mắn có 【 Cất đặt cột 】 bàng thân, có thể giải quyết rất nhiều vấn đề!

....

【 Cất đặt cột 1: Nhiên Huyết công 】

“Nhiên Huyết công ( 0/100 ): Một ngày 48 luyện, một năm có thể thành.”

Ps: (tóm tắt vô lực, dời bước chính văn)`,
    cover: sample_img,
  },
  {
    title: "Tiên Nghịch",
    author: "Nhĩ Căn",
    desc: `Chuyển sinh tu hành thế giới mười sáu năm, từ phế linh căn bắt đầu vấn ma tu hành.

....

Kiểm tra đo lường linh căn ngày rơi xuống ngũ đẳng, kiếp này khó có thể đột phá Luyện Khí trung kỳ, tiên môn không thu, trường sinh khó cầu.

Vừa lúc gặp Ma tông dịch nô, từ các nơi c·ướp đoạt tư chất thấp hèn giả vì “Linh nô”, lấy nhiên thọ ma công bồi dưỡng nhiều phê háo tài, lệnh này tự tổn hại tu vi chế tác linh sa, cung cấp Ma tông hưởng dụng.

Vương Dục tại Thạch Hồ thành b·ị c·ướp hướng Ma Vực chi địa, lấy linh nô chi thân nhập ma đạo đại môn, may mắn có 【 Cất đặt cột 】 bàng thân, có thể giải quyết rất nhiều vấn đề!

....

【 Cất đặt cột 1: Nhiên Huyết công 】

“Nhiên Huyết công ( 0/100 ): Một ngày 48 luyện, một năm có thể thành.”

Ps: (tóm tắt vô lực, dời bước chính văn)`,
    cover: sample_img,
  },
  {
    title: "Trùng Kiến Tu Tiên Gia Tộc",
    author: "Cửu Huyền Sơn Chủ",
    desc: `Chuyển sinh tu hành thế giới mười sáu năm, từ phế linh căn bắt đầu vấn ma tu hành.

....

Kiểm tra đo lường linh căn ngày rơi xuống ngũ đẳng, kiếp này khó có thể đột phá Luyện Khí trung kỳ, tiên môn không thu, trường sinh khó cầu.

Vừa lúc gặp Ma tông dịch nô, từ các nơi c·ướp đoạt tư chất thấp hèn giả vì “Linh nô”, lấy nhiên thọ ma công bồi dưỡng nhiều phê háo tài, lệnh này tự tổn hại tu vi chế tác linh sa, cung cấp Ma tông hưởng dụng.

Vương Dục tại Thạch Hồ thành b·ị c·ướp hướng Ma Vực chi địa, lấy linh nô chi thân nhập ma đạo đại môn, may mắn có 【 Cất đặt cột 】 bàng thân, có thể giải quyết rất nhiều vấn đề!

....

【 Cất đặt cột 1: Nhiên Huyết công 】

“Nhiên Huyết công ( 0/100 ): Một ngày 48 luyện, một năm có thể thành.”

Ps: (tóm tắt vô lực, dời bước chính văn)`,
    cover: sample_img,
  },
  {
    title: "Từ Phế Linh Căn Bắt Đầu Vấn Ma Tu Hành",
    author: "Thủ Tàn Miêu Miêu Tương",
    desc: `Chuyển sinh tu hành thế giới mười sáu năm, từ phế linh căn bắt đầu vấn ma tu hành.

....

Kiểm tra đo lường linh căn ngày rơi xuống ngũ đẳng, kiếp này khó có thể đột phá Luyện Khí trung kỳ, tiên môn không thu, trường sinh khó cầu.

Vừa lúc gặp Ma tông dịch nô, từ các nơi c·ướp đoạt tư chất thấp hèn giả vì “Linh nô”, lấy nhiên thọ ma công bồi dưỡng nhiều phê háo tài, lệnh này tự tổn hại tu vi chế tác linh sa, cung cấp Ma tông hưởng dụng.

Vương Dục tại Thạch Hồ thành b·ị c·ướp hướng Ma Vực chi địa, lấy linh nô chi thân nhập ma đạo đại môn, may mắn có 【 Cất đặt cột 】 bàng thân, có thể giải quyết rất nhiều vấn đề!

....

【 Cất đặt cột 1: Nhiên Huyết công 】

“Nhiên Huyết công ( 0/100 ): Một ngày 48 luyện, một năm có thể thành.”

Ps: (tóm tắt vô lực, dời bước chính văn)`,
    cover: sample_img,
  },
  {
    title: "Vị Đạo Trưởng Này Quá Cục Súc",
    author: "Ép Người Quá Đã",
    desc: `Chuyển sinh tu hành thế giới mười sáu năm, từ phế linh căn bắt đầu vấn ma tu hành.

....

Kiểm tra đo lường linh căn ngày rơi xuống ngũ đẳng, kiếp này khó có thể đột phá Luyện Khí trung kỳ, tiên môn không thu, trường sinh khó cầu.

Vừa lúc gặp Ma tông dịch nô, từ các nơi c·ướp đoạt tư chất thấp hèn giả vì “Linh nô”, lấy nhiên thọ ma công bồi dưỡng nhiều phê háo tài, lệnh này tự tổn hại tu vi chế tác linh sa, cung cấp Ma tông hưởng dụng.

Vương Dục tại Thạch Hồ thành b·ị c·ướp hướng Ma Vực chi địa, lấy linh nô chi thân nhập ma đạo đại môn, may mắn có 【 Cất đặt cột 】 bàng thân, có thể giải quyết rất nhiều vấn đề!

....

【 Cất đặt cột 1: Nhiên Huyết công 】

“Nhiên Huyết công ( 0/100 ): Một ngày 48 luyện, một năm có thể thành.”

Ps: (tóm tắt vô lực, dời bước chính văn)`,
    cover: sample_img,
  },
];

const NovelCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [, setCurrent] = useState(0);
  const [, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="relative" suppressHydrationWarning>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        suppressHydrationWarning
      >
        <CarouselContent>
          {novels.map((novel, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
            >
              <NovelCard {...novel} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default function FeaturedNovels() {
  return (
    <section className="py-12" suppressHydrationWarning>
      <div className="container">
        <Tabs defaultValue="recommended" className="w-full">
          <TabsList>
            <TabsTrigger value="recommended">Đề xuất</TabsTrigger>
            <TabsTrigger value="updated">Mới cập nhật</TabsTrigger>
            <TabsTrigger value="top">Top truyện</TabsTrigger>
          </TabsList>
          <TabsContent value="recommended" className="mt-6">
            <NovelCarousel />
          </TabsContent>
          <TabsContent value="updated" className="mt-6">
            <NovelCarousel />
          </TabsContent>
          <TabsContent value="top" className="mt-6">
            <NovelCarousel />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
