import { IArticle } from "@/type/article";
import ArticleCard from "./article-card";

interface RelatedArticlesProps {
  articles: IArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        Bài viết liên quan
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
