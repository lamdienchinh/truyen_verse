"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Skeleton } from "@workspace/ui/components/skeleton";
import { Eye, FileText, Heart, MessageCircle } from "lucide-react";
import { useArticleStats } from "../hooks/use-articles";

export function ArticleStatsCards() {
  const { data: stats, isLoading } = useArticleStats();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16 mb-1" />
              <Skeleton className="h-3 w-32" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const statsCards = [
    {
      title: "Tổng bài viết",
      value: stats.total,
      description: `${stats.published} đã xuất bản, ${stats.draft} bản nháp`,
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Lượt xem",
      value: stats.totalViews.toLocaleString(),
      description: "Tổng lượt xem tất cả bài viết",
      icon: Eye,
      color: "text-green-600",
    },
    {
      title: "Lượt thích",
      value: stats.totalLikes.toLocaleString(),
      description: "Tổng lượt thích tất cả bài viết",
      icon: Heart,
      color: "text-red-600",
    },
    {
      title: "Bình luận",
      value: stats.totalComments.toLocaleString(),
      description: "Tổng số bình luận",
      icon: MessageCircle,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsCards.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <IconComponent className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
