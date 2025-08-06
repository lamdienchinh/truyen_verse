"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

interface BookStatusChartProps {
  publishedBooks: number;
  draftBooks: number;
}

export default function BookStatusChart({
  publishedBooks,
  draftBooks,
}: BookStatusChartProps) {
  const total = publishedBooks + draftBooks;
  const publishedPercentage = (publishedBooks / total) * 100;
  const draftPercentage = (draftBooks / total) * 100;

  // SVG circle calculations
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const publishedOffset =
    circumference - (publishedPercentage / 100) * circumference;
  const draftOffset = circumference - (draftPercentage / 100) * circumference;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trạng Thái Truyện</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center">
          <div className="relative">
            <svg
              className="w-32 h-32 transform -rotate-90"
              viewBox="0 0 100 100"
            >
              {/* Background circle */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="10"
                fill="transparent"
              />
              {/* Published books arc */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#3b82f6"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={publishedOffset}
                strokeLinecap="round"
                className="transition-all duration-300 ease-in-out"
              />
              {/* Draft books arc */}
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#f59e0b"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={draftOffset}
                strokeLinecap="round"
                className="transition-all duration-300 ease-in-out"
                transform={`rotate(${(publishedPercentage / 100) * 360} 50 50)`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold">{total}</div>
                <div className="text-xs text-muted-foreground">Truyện</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Đã xuất bản</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{publishedBooks}</div>
              <div className="text-xs text-muted-foreground">
                {publishedPercentage.toFixed(1)}%
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span className="text-sm">Bản nháp</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{draftBooks}</div>
              <div className="text-xs text-muted-foreground">
                {draftPercentage.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
