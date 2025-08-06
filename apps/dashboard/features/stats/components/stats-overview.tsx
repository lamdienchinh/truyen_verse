"use client";

import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { BookOpen, Eye, FileText, Heart } from "lucide-react";

interface StatsOverviewProps {
  totalBooks: number;
  totalChapters: number;
  totalViews: number;
  totalLikes: number;
  publishedBooks: number;
  draftBooks: number;
}

export default function StatsOverview({
  totalBooks,
  totalChapters,
  totalViews,
  totalLikes,
  publishedBooks,
  draftBooks,
}: StatsOverviewProps) {
  const stats = [
    {
      title: "Tổng số truyện",
      value: totalBooks,
      icon: BookOpen,
      description: `${publishedBooks} đã xuất bản, ${draftBooks} bản nháp`,
      trend: "+12%",
    },
    {
      title: "Tổng số chương",
      value: totalChapters,
      icon: FileText,
      description: "Số chương đã viết",
      trend: "+8%",
    },
    {
      title: "Lượt xem",
      value: totalViews.toLocaleString(),
      icon: Eye,
      description: "Tổng lượt xem tất cả truyện",
      trend: "+23%",
    },
    {
      title: "Lượt thích",
      value: totalLikes.toLocaleString(),
      icon: Heart,
      description: "Tổng lượt thích từ độc giả",
      trend: "+15%",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
              <Badge variant="secondary" className="text-xs">
                {stat.trend}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
