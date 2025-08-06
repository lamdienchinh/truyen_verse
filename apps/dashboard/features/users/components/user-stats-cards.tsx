"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { DollarSign, TrendingUp, UserCheck, Users } from "lucide-react";
import { useUserStats } from "../../users/hooks/use-users";
const statCards = [
  {
    title: "Tổng người dùng",
    key: "total" as const,
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Hoạt động",
    key: "active" as const,
    icon: UserCheck,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Tổng số dư",
    key: "totalBalance" as const,
    icon: DollarSign,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Tăng trưởng",
    key: "growth" as const,
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

export function UserStatsCards() {
  const { data: stats, isLoading } = useUserStats();

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
      case "totalBalance":
        return (
          stats.totalWalletBalance.VND +
          stats.totalWalletBalance.USD +
          stats.totalWalletBalance.EUR
        );
      case "growth":
        return 12.5; // Mock growth percentage
      default:
        return 0;
    }
  };

  const formatValue = (key: string, value: number) => {
    switch (key) {
      case "totalBalance":
        return `₫${value.toLocaleString()}`;
      case "growth":
        return `${value > 0 ? "+" : ""}${value.toFixed(1)}%`;
      default:
        return value.toLocaleString();
    }
  };

  const getStatDescription = (key: string) => {
    switch (key) {
      case "active":
        return stats.total > 0
          ? `${((stats.active / stats.total) * 100).toFixed(1)}% tổng số`
          : "So với tháng trước";
      case "totalBalance":
        return "Tổng tất cả ví";
      case "growth":
        return "Tăng so với tháng trước";
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

      {/* Wallet Balances by Currency */}
      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(stats.totalWalletBalance).map(([currency, balance]) => {
          const symbols = { VND: "₫", USD: "$", EUR: "€" };
          return (
            <Card key={currency}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Số dư - {currency}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xl font-bold">
                  {symbols[currency as keyof typeof symbols]}
                  {(balance as number).toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  Tổng số dư người dùng
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
