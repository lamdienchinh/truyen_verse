import ChaptersList from "@/components/detail/chapters-list";
import DescriptionSection from "@/components/detail/description-section";
import IntroductionSection from "@/components/detail/introduction-section";
import { RelatedNovels } from "@/components/detail/related-novels";
import ReviewTabs from "@/components/detail/review-tabs";

export default function Detail() {
  return (
    <div className="py-4 sm:py-6 md:py-8">
      <IntroductionSection />
      <ChaptersList />
      <DescriptionSection />
      <RelatedNovels />
      <ReviewTabs />
    </div>
  );
}
