"use client";

import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { BookOpen, Eye, Heart } from "lucide-react";

interface TopBook {
  id: string;
  name: string;
  views: number;
  likes: number;
  chapters: number;
}

interface TopBooksChartProps {
  topBooks: TopBook[];
}

export default function TopBooksChart({ topBooks }: TopBooksChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 5 Truyện Phổ Biến</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topBooks.map((book, index) => (
            <div key={book.id} className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Badge
                  variant={index === 0 ? "default" : "secondary"}
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                >
                  {index + 1}
                </Badge>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{book.name}</p>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Eye className="h-3 w-3" />
                    <span>{book.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Heart className="h-3 w-3" />
                    <span>{book.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <BookOpen className="h-3 w-3" />
                    <span>{book.chapters} chương</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-24 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{
                      width: `${(book.views / Math.max(...topBooks.map((b) => b.views))) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
