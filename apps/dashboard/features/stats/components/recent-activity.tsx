"use client";

import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import { BookOpen, FileText, Heart, Plus } from "lucide-react";

interface Activity {
  id: string;
  type: "book_created" | "chapter_added" | "book_published" | "book_liked";
  bookName: string;
  timestamp: Date;
  details?: string;
}

interface RecentActivityProps {
  activities: Activity[];
}

const activityConfig = {
  book_created: {
    icon: Plus,
    label: "Tạo truyện mới",
    color: "bg-green-500",
    variant: "default" as const,
  },
  chapter_added: {
    icon: FileText,
    label: "Thêm chương",
    color: "bg-blue-500",
    variant: "secondary" as const,
  },
  book_published: {
    icon: BookOpen,
    label: "Xuất bản",
    color: "bg-purple-500",
    variant: "outline" as const,
  },
  book_liked: {
    icon: Heart,
    label: "Được thích",
    color: "bg-red-500",
    variant: "destructive" as const,
  },
};

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hoạt Động Gần Đây</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const config = activityConfig[activity.type];
            const Icon = config.icon;

            return (
              <div key={activity.id} className="flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 w-8 h-8 ${config.color} rounded-full flex items-center justify-center`}
                >
                  <Icon className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <Badge variant={config.variant} className="text-xs">
                      {config.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(activity.timestamp), {
                        addSuffix: true,
                        locale: vi,
                      })}
                    </span>
                  </div>
                  <p className="text-sm font-medium truncate">
                    {activity.bookName}
                  </p>
                  {activity.details && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {activity.details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
