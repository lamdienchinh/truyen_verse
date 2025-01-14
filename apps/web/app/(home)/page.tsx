import AboutSection from "@/components/home/about-section";
import BlogSection from "@/components/home/blog-section";
import CommunitySection from "@/components/home/community-section";
import FAQ from "@/components/home/faq-section";
import FeaturedNovels from "@/components/home/featured-novels";
import HeroSection from "@/components/home/hero-section";
import RecentReviewsMarquee from "@/components/home/recent-reviews";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <FeaturedNovels />
      <BlogSection />
      <RecentReviewsMarquee />
      <AboutSection />
      <CommunitySection />
      <FAQ />
    </div>
  );
}
