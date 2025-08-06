import { IArticle } from "@/type/article";
import { getRandomImage } from "@/utils/common";
import { Card } from "@workspace/ui/components/card";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  article: IArticle;
  style?: "default" | "extend";
}

const img = getRandomImage(0)!;

export default function ArticleCard({
  article,
  style = "default",
}: ArticleCardProps) {
  return (
    <Card
      className={`group rounded-lg overflow-hidden transition-transform duration-300 ${
        style === "extend" ? "flex flex-row" : ""
      }`}
    >
      <Link href={`/article/${article.id}`} className="flex w-full">
        {style === "extend" ? (
          <>
            <div className="relative w-1/3 h-40 sm:h-48 md:h-56 overflow-hidden">
              <Image
                suppressHydrationWarning
                src={article.imageUrl || img}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex flex-col w-2/3 p-4">
              <div className="mb-2 text-xs font-semibold uppercase">
                {article.category}
              </div>
              <h3 className="text-lg font-semibold leading-tight mb-2">
                {article.title}
              </h3>
              <p className="text-background-foreground line-clamp-3 mb-4">
                {article.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                <span>{article.author}</span>
                <time dateTime={article.date?.toDateString()}>
                  {new Date(article.date).toLocaleDateString("vi-VN")}
                </time>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="relative h-[240px] overflow-hidden">
              <Image
                src={article.imageUrl || img}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider mb-1">
                  {article.category}
                </div>
                <h3 className="text-lg font-semibold leading-tight">
                  {article.title}
                </h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 line-clamp-2">{article.excerpt}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>{article.author}</span>
                <time dateTime={article.date?.toDateString()}>
                  {new Date(article.date).toLocaleDateString("vi-VN")}
                </time>
              </div>
            </div>
          </div>
        )}
      </Link>
    </Card>
  );
}
