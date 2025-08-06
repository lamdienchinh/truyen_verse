"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { BarChart3, CreditCard, DollarSign, TrendingUp } from "lucide-react";
import { useTransactionStats } from "../hooks/use-transactions";

const statCards = [
  {
    title: "Tổng giao dịch",
    key: "total" as const,
    icon: CreditCard,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Hoàn thành",
    key: "completed" as const,
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Doanh thu tháng",
    key: "thisMonth" as const,
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Tăng trưởng",
    key: "growth" as const,
    icon: BarChart3,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export function TransactionStatsCards() {
  const { data: stats, isLoading } = useTransactionStats();

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
      case "completed":
        return stats.byStatus.completed;
      case "thisMonth":
        return stats.revenue.thisMonth;
      case "growth":
        return stats.revenue.growth;
      default:
        return 0;
    }
  };

  const formatValue = (key: string, value: number) => {
    switch (key) {
      case "thisMonth":
        return `₫${value.toLocaleString()}`;
      case "growth":
        return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`;
      default:
        return value.toLocaleString();
    }
  };

  const getStatDescription = (key: string) => {
    switch (key) {
      case "completed":
        return stats.total > 0
          ? `${((stats.byStatus.completed / stats.total) * 100).toFixed(1)}% tổng số`
          : "So với tháng trước";
      case "thisMonth":
        return `Tháng trước: ₫${stats.revenue.lastMonth.toLocaleString()}`;
      case "growth":
        return stats.revenue.growth > 0
          ? "Tăng so với tháng trước"
          : "Giảm so với tháng trước";
      default:
        return "So với tháng trước";
    }
  };

  return (
    <div className="space-y-4">
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
                <div className="text-2xl font-bold">
                  {formatValue(card.key, value)}
                </div>
                <p className="text-xs text-muted-foreground">
                  {getStatDescription(card.key)}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Revenue by Currency */}
      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(stats.volume).map(([currency, volume]) => {
          const symbols = { VND: "₫", USD: "$", EUR: "€" };
          return (
            <Card key={currency}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Khối lượng - {currency}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">
                  {symbols[currency as keyof typeof symbols]}
                  {volume.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Tổng khối lượng giao dịch
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
