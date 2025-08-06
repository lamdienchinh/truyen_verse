import { ArticleStatsCards } from "@/features/articles/components/article-stats-cards";
import { ArticlesSection } from "@/features/articles/components/articles-section";

export default function ArticlesPage() {
  return (
    <div className="space-y-8">
      <ArticleStatsCards />
      <ArticlesSection />
    </div>
  );
}
