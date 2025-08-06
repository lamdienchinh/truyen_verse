import { IArticle } from "@/type/article";
import { getRandomImage } from "@/utils/common";
import { Card } from "@workspace/ui/components/card";
import Image from "next/image";

interface ArticleContentProps {
  article: IArticle;
}

const img = getRandomImage(2)!;

export default function ArticleContent({ article }: ArticleContentProps) {
  return (
    <Card className="mb-8 overflow-hidden">
      <article className="overflow-hidden">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            src={article.imageUrl || img}
            alt={article.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
            <div className="flex items-center text-sm">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={article.date?.toDateString()}>
                {new Date(article.date).toLocaleDateString("vi-VN")}
              </time>
              <span className="mx-2">•</span>
              <span>{article.category}</span>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </article>
    </Card>
  );
}
