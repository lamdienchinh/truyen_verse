"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

interface MonthlyData {
  month: string;
  views: number;
}

interface ViewsChartProps {
  monthlyViews: MonthlyData[];
}

export default function ViewsChart({ monthlyViews }: ViewsChartProps) {
  const maxViews = Math.max(...monthlyViews.map((item) => item.views));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lượt Xem Theo Tháng</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {monthlyViews.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 text-sm font-medium text-muted-foreground">
                {item.month}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300 ease-in-out"
                      style={{
                        width: `${(item.views / maxViews) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <div className="w-16 text-sm font-medium text-right">
                    {item.views.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Tổng lượt xem:</span>
            <span className="font-medium">
              {monthlyViews
                .reduce((acc, curr) => acc + curr.views, 0)
                .toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm text-muted-foreground mt-1">
            <span>Trung bình:</span>
            <span className="font-medium">
              {Math.round(
                monthlyViews.reduce((acc, curr) => acc + curr.views, 0) /
                  monthlyViews.length
              ).toLocaleString()}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
