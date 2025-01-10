import { Avatar, AvatarFallback, AvatarImage } from "@workspace/ui/components/avatar";
import { formatDistance } from "date-fns";
import { vi } from "date-fns/locale";
import { ThumbsUp, MessageCircle } from "lucide-react";

interface ReviewCardProps {
  username: string;
  avatar: string;
  content: string;
  likes: number;
  replies: number;
  createdAt: Date;
  chapter?: number;
}

export function ReviewCard({
  username,
  avatar,
  content,
  likes,
  replies,
  createdAt,
  chapter,
}: ReviewCardProps) {
  return (
    <div className="border rounded-lg p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={avatar} />
            <AvatarFallback>{username[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{username}</p>
            <p className="text-sm text-muted-foreground">
              {formatDistance(createdAt, new Date(), { locale: vi })} trước
              {chapter && ` • Chương ${chapter}`}
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm">{content}</p>
      <div className="flex items-center space-x-4">
        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
          <ThumbsUp size={16} />
          <span>{likes}</span>
        </button>
        <button className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-primary">
          <MessageCircle size={16} />
          <span>{replies}</span>
        </button>
      </div>
    </div>
  );
}
