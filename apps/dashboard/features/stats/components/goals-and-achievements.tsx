"use client";

import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Calendar, Target, Trophy, Zap } from "lucide-react";

interface GoalsAndAchievementsProps {
  totalBooks: number;
  totalChapters: number;
  totalViews: number;
}

export default function GoalsAndAchievements({
  totalBooks,
  totalChapters,
  totalViews,
}: GoalsAndAchievementsProps) {
  const goals = [
    {
      title: "Mục tiêu truyện trong năm",
      current: totalBooks,
      target: 20,
      icon: Target,
      color: "bg-blue-500",
    },
    {
      title: "Mục tiêu chương trong tháng",
      current: 15,
      target: 25,
      icon: Calendar,
      color: "bg-green-500",
    },
    {
      title: "Mục tiêu lượt xem",
      current: totalViews,
      target: 100000,
      icon: Zap,
      color: "bg-purple-500",
    },
  ];

  const achievements = [
    {
      title: "Tác giả mới",
      description: "Đã xuất bản truyện đầu tiên",
      earned: true,
      icon: "🎉",
    },
    {
      title: "Người viết năng suất",
      description: "Đã viết 50+ chương",
      earned: totalChapters >= 50,
      icon: "✍️",
    },
    {
      title: "Ngôi sao đang lên",
      description: "Đạt 10,000+ lượt xem",
      earned: totalViews >= 10000,
      icon: "⭐",
    },
    {
      title: "Tác giả đa năng",
      description: "Có 10+ truyện đã xuất bản",
      earned: totalBooks >= 10,
      icon: "📚",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Mục Tiêu
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {goals.map((goal, index) => {
            const percentage = Math.min(
              (goal.current / goal.target) * 100,
              100
            );
            const Icon = goal.icon;

            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 ${goal.color} rounded-full flex items-center justify-center`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{goal.title}</span>
                  </div>
                  <Badge variant="outline">
                    {goal.current.toLocaleString()}/
                    {goal.target.toLocaleString()}
                  </Badge>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="text-xs text-muted-foreground text-right">
                  {percentage.toFixed(1)}% hoàn thành
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Thành Tích
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all ${
                  achievement.earned
                    ? "border-yellow-200 bg-yellow-50 shadow-sm"
                    : "border-gray-200 bg-gray-50 opacity-60"
                }`}
              >
                <div className="text-center space-y-2">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-medium">{achievement.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {achievement.description}
                    </p>
                  </div>
                  {achievement.earned && (
                    <Badge variant="default" className="text-xs">
                      Đã đạt được
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
