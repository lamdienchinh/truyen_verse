"use client";
import ArticleBanner from "@/components/article/article-banner";
import ArticleCard from "@/components/article/article-card";
import ArticleFilter from "@/components/article/artile-filter";
import { mockArticles } from "@/const/fake-data";
import { PaginationComponent } from "@workspace/ui/components/pagination";
import { useState } from "react";

export default function ArticleList() {
  const [totalPages] = useState<number>(2);
  const [pageIndex, setPageIndex] = useState<number>(1);
  return (
    <div className="container min-h-screen py-8">
      <ArticleBanner />
      <div className="flex gap-8 mt-8">
        <div className="basis-3/4 space-y-4">
          {mockArticles?.map((article) => (
            <ArticleCard style="extend" article={article} key={article.id} />
          ))}
          <PaginationComponent
            totalPages={totalPages}
            currentPage={pageIndex}
            onPageChange={(page) => setPageIndex(page)}
          />
        </div>
        <div className="basis-1/4 w-full h-full">
          <ArticleFilter
            onFilterChange={(value) => console.log("filter:", value)}
          />
        </div>
      </div>
    </div>
  );
}
