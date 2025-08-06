"use client";

import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Minus, TrendingDown, TrendingUp } from "lucide-react";

interface TrendData {
  label: string;
  current: number;
  previous: number;
  unit?: string;
}

interface TrendsComparisonProps {
  trends: TrendData[];
}

export default function TrendsComparison({ trends }: TrendsComparisonProps) {
  const getTrendInfo = (current: number, previous: number) => {
    const change = current - previous;

    if (change > 0) {
      return {
        icon: TrendingUp,
        color: "text-green-600",
        bgColor: "bg-green-100",
        prefix: "+",
        trend: "up" as const,
      };
    } else if (change < 0) {
      return {
        icon: TrendingDown,
        color: "text-red-600",
        bgColor: "bg-red-100",
        prefix: "",
        trend: "down" as const,
      };
    } else {
      return {
        icon: Minus,
        color: "text-gray-600",
        bgColor: "bg-gray-100",
        prefix: "",
        trend: "neutral" as const,
      };
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>So Sánh Với Tháng Trước</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trends.map((trend, index) => {
            const change = trend.current - trend.previous;
            const percentageChange =
              trend.previous > 0 ? (change / trend.previous) * 100 : 0;
            const trendInfo = getTrendInfo(trend.current, trend.previous);
            const Icon = trendInfo.icon;

            return (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 ${trendInfo.bgColor} rounded-full flex items-center justify-center`}
                  >
                    <Icon className={`h-4 w-4 ${trendInfo.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{trend.label}</p>
                    <p className="text-xs text-muted-foreground">
                      Hiện tại: {trend.current.toLocaleString()}
                      {trend.unit || ""}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      trendInfo.trend === "up"
                        ? "default"
                        : trendInfo.trend === "down"
                          ? "destructive"
                          : "secondary"
                    }
                    className="mb-1"
                  >
                    {trendInfo.prefix}
                    {change.toLocaleString()}
                    {trend.unit || ""}
                  </Badge>
                  <p className={`text-xs ${trendInfo.color}`}>
                    {trendInfo.prefix}
                    {Math.abs(percentageChange).toFixed(1)}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
