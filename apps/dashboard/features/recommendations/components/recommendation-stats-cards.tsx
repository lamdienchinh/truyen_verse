"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Calendar, Settings, Star, TrendingUp } from "lucide-react";
import { useRecommendationStats } from "../hooks/use-recommendations";

const statCards = [
  {
    title: "Tổng đề xuất",
    key: "total" as const,
    icon: Calendar,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Đang hoạt động",
    key: "active" as const,
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Tạm dừng",
    key: "inactive" as const,
    icon: Settings,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Ưu tiên cao",
    key: "high" as const,
    icon: Star,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
];

export function RecommendationStatsCards() {
  const { data: stats, isLoading } = useRecommendationStats();

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-20" />
              </CardTitle>
              <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="h-8 bg-gray-200 rounded animate-pulse w-12 mb-1" />
              <div className="h-3 bg-gray-200 rounded animate-pulse w-16" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (!stats) return null;

  const getStatValue = (key: string) => {
    switch (key) {
      case "total":
        return stats.total;
      case "active":
        return stats.active;
      case "inactive":
        return stats.inactive;
      case "high":
        return stats.byPriority.high;
      default:
        return 0;
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {statCards.map((card) => {
        const Icon = card.icon;
        const value = getStatValue(card.key);

        return (
          <Card key={card.key}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>
              <div className={`rounded-full p-2 ${card.bgColor}`}>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{value.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {card.key === "active" && stats.total > 0
                  ? `${((stats.active / stats.total) * 100).toFixed(1)}% tổng số`
                  : card.key === "inactive" && stats.total > 0
                    ? `${((stats.inactive / stats.total) * 100).toFixed(1)}% tổng số`
                    : "So với tháng trước"}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
