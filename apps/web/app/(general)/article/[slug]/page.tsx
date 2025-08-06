import ArticleContent from "@/components/article/article-content";
import RelatedArticles from "@/components/article/related-articles";
import { mockArticles } from "@/const/fake-data";

export default function ArticlePage() {
  const article = mockArticles[0];

  const relatedArticles = mockArticles
    .filter((a) => a.id !== article?.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      <div className="flex gap-8 py-8">
        {article && (
          <div className="flex-1 basis-3/4">
            <ArticleContent article={article} />
          </div>
        )}
        <div className="basis-1/4">
          <RelatedArticles articles={relatedArticles} />
        </div>
      </div>
    </div>
  );
}
