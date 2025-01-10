import AboutSection from "@/components/home/about-section";
import BlogSection from "@/components/home/blog-section";
import CommunitySection from "@/components/home/community-section";
import FeaturedNovels from "@/components/home/featured-novels";
import HeroSection from "@/components/home/hero-section";
import PersonalizedSection from "@/components/home/personalized-section";
import RecentReviewsMarquee from "@/components/home/recent-reviews";
import ToolBar from "@/components/home/toolbar";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <FeaturedNovels />
      <ToolBar />
      <PersonalizedSection />
      <BlogSection />
      <RecentReviewsMarquee />
      <AboutSection />
      <CommunitySection />
    </div>
  );
}
