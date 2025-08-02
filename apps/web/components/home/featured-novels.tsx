import { NovelCarousel } from "./novel-carousel";
import { ViewAllBtn } from "./view-all-btn";

export default function FeaturedNovels() {
  return (
    <section className="pt-8 container sm:pt-12">
      <div className="flex justify-between w-full items-center mb-4">
        <h2 className="font-bold text-xl">Truyện đề xuất</h2>
        <ViewAllBtn href="/novels" />
      </div>
      <NovelCarousel />
    </section>
  );
}
