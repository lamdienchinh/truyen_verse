"use client";

import { novels } from "@/const/fake-data";
import { INovel } from "@/type/novel";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@workspace/ui/components/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { NovelCard } from "./novel-card";

export const NovelCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [, setCount] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

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

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const createChunks = (array: INovel[]): INovel[][] => {
    const chunks: INovel[][] = [];

    const chunkSize = isDesktop ? 6 : 4;

    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const novelChunks = createChunks([...novels, ...novels, ...novels]);

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
            delay: 4000,
            stopOnInteraction: true,
          }),
        ]}
        suppressHydrationWarning
      >
        <CarouselContent className="-ml-1">
          {novelChunks.map((chunk, chunkIndex) => (
            <CarouselItem key={chunkIndex} className="pl-1 basis-full">
              <div className="h-full">
                {isDesktop ? (
                  <div className="grid grid-cols-2 gap-3 grid-rows-3">
                    {chunk.map((novel, index) => (
                      <div key={`${chunkIndex}-${index}`} className="min-h-0">
                        <NovelCard {...novel} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
                    {chunk.map((novel, index) => (
                      <div key={`${chunkIndex}-${index}`} className="min-h-0">
                        <NovelCard {...novel} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center gap-1 mt-4">
        {novelChunks.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === current - 1
                ? "bg-primary w-4"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};
