"use client";

import { formatRelativeTime } from "@/utils/date-time";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Marquee } from "@workspace/ui/components/marquee";
import { cn } from "@workspace/ui/lib/utils";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

export interface ReviewItemProps {
  readerName: string;
  storyTitle: string;
  rating: number;
  comment: string;
  readerAvatar: string;
  likes: number;
  timestamp: string | Date;
}

const ReviewItem = ({
  readerName,
  storyTitle,
  rating,
  comment,
  readerAvatar,
  likes,
  timestamp,
}: ReviewItemProps) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card className="w-[300px]">
      <CardContent className="p-4 flex flex-col justify-between h-full">
        <div className='flex-1'>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage src={readerAvatar} alt={readerName} />
                <AvatarFallback>{readerName.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-medium">{readerName}</span>
            </div>
            <div className="flex items-center">
              {Array.from({ length: rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
          </div>
          <p className="text-sm font-semibold mb-2">{storyTitle}</p>
          <p className="text-sm text-muted-foreground mb-2">{comment}</p>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <button
            onClick={() => setIsLiked((prev) => !prev)}
            className="flex items-center"
          >
            <Heart
              className={cn(
                "w-4 h-4 mr-1",
                isLiked && "fill-red-500 stroke-red-500"
              )}
            />
            <span>{isLiked ? likes + 1 : likes}</span>
          </button>
          <span>{formatRelativeTime(new Date(timestamp))}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default function RecentReviewsMarquee() {
  const recentReviews = [
    {
      readerName: "Minh Anh",
      storyTitle: "Đấu La Đại Lục",
      rating: 5,
      comment: "Cốt truyện hấp dẫn, nhân vật phát triển tốt!",
      readerAvatar: "/avatars/minh-anh.jpg",
      likes: 120,
      timestamp: "2025-01-05",
    },
    {
      readerName: "Hoàng Long",
      storyTitle: "Tru Tiên",
      rating: 4,
      comment: "Tình tiết gay cấn, nhưng hơi dài dòng ở vài chỗ.",
      readerAvatar: "/avatars/hoang-long.jpg",
      likes: 85,
      timestamp: "2025-01-04",
    },
    {
      readerName: "Thảo Nguyên",
      storyTitle: "Phàm Nhân Tu Tiên",
      rating: 5,
      comment: "Tuyệt vời! Không thể ngừng đọc.",
      readerAvatar: "/avatars/thao-nguyen.jpg",
      likes: 150,
      timestamp: "2025-01-03",
    },
    {
      readerName: "Quang Huy",
      storyTitle: "Tiên Nghịch",
      rating: 4,
      comment: "Cách xây dựng thế giới rất sáng tạo.",
      readerAvatar: "/avatars/quang-huy.jpg",
      likes: 90,
      timestamp: "2025-01-02",
    },
    {
      readerName: "Mai Linh",
      storyTitle: "Đế Bá",
      rating: 3,
      comment: "Khá thú vị, nhưng cần phát triển sâu hơn về nhân vật phụ.",
      readerAvatar: "/avatars/mai-linh.jpg",
      likes: 45,
      timestamp: "2025-01-01",
    },
    {
      readerName: "Đức Thành",
      storyTitle: "Ngã Dục Phong Thiên",
      rating: 5,
      comment: "Một kiệt tác! Rất đáng để đọc lại nhiều lần.",
      readerAvatar: "/avatars/duc-thanh.jpg",
      likes: 170,
      timestamp: "2024-12-31",
    },
    {
      readerName: "Thanh Tâm",
      storyTitle: "Thần Đạo Đan Tôn",
      rating: 4,
      comment: "Hệ thống tu luyện rất độc đáo và thú vị.",
      readerAvatar: "/avatars/thanh-tam.jpg",
      likes: 95,
      timestamp: "2024-12-30",
    },
    {
      readerName: "Minh Quân",
      storyTitle: "Vũ Động Càn Khôn",
      rating: 5,
      comment: "Những trận chiến epic, cốt truyện cuốn hút!",
      readerAvatar: "/avatars/minh-quan.jpg",
      likes: 180,
      timestamp: "2024-12-29",
    },
    {
      readerName: "Hồng Nhung",
      storyTitle: "Yêu Thần Ký",
      rating: 4,
      comment: "Tình tiết bất ngờ, nhưng đôi khi hơi khó theo dõi.",
      readerAvatar: "/avatars/hong-nhung.jpg",
      likes: 78,
      timestamp: "2024-12-28",
    },
    {
      readerName: "Anh Tuấn",
      storyTitle: "Thần Mộ",
      rating: 5,
      comment: "Một trong những truyện hay nhất mình từng đọc!",
      readerAvatar: "/avatars/anh-tuan.jpg",
      likes: 200,
      timestamp: "2024-12-27",
    },
  ];

  return (
    <section className="container py-8">
      <h2 className="text-2xl font-bold mb-6">Đánh giá gần đây</h2>
      <Marquee pauseOnHover className="[--duration:80s]">
        {recentReviews.map((review, index) => (
          <ReviewItem key={index} {...review} />
        ))}
      </Marquee>
    </section>
  );
}
