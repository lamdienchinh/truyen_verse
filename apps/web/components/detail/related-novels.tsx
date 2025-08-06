"use client";

import { novels } from "@/const/fake-data";
import { INovel } from "@/type/novel";
import {
  Carousel,
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
import { NovelCard } from "../home/novel-card";

export function RelatedNovels() {
  const sameAuthorNovels: INovel[] = novels;
  const sameUploaderNovels: INovel[] = novels;
  const NovelCarousel = ({ novels }: { novels: INovel[] }) => (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
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
  );

  return (
    <section className="container my-8 space-y-4">
      <Tabs defaultValue="same-author" className="w-full">
        <div className="flex items-center justify-between gap-4 py-4 px-4 bg-primary text-primary-foreground rounded-md">
          <div className="font-semibold">Danh sách truyện liên quan</div>
          <TabsList>
            <TabsTrigger value="same-author">Cùng tác giả</TabsTrigger>
            <TabsTrigger value="same-uploader">Cùng người đăng</TabsTrigger>
          </TabsList>
        </div>
        <div className="">
          <TabsContent value="same-author" className="mt-6">
            <NovelCarousel novels={sameAuthorNovels} />
          </TabsContent>
          <TabsContent value="same-uploader" className="mt-6">
            <NovelCarousel novels={sameUploaderNovels} />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
