"use client";

import { getRandomImage } from "@/utils/common";
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
import { useEffect, useState } from "react";
import { NovelCard } from "./novel-card";

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
    <section className="pt-12" suppressHydrationWarning>
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
