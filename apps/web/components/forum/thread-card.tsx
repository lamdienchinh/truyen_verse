import { Card, CardContent } from "@workspace/ui/components/card";
import { Clock, Eye, MessageSquare, ThumbsUp } from "lucide-react";
import Link from "next/link";

interface Thread {
  id: string;
  title: string;
  author: string;
  avatar: string;
  postDate: string;
  lastReply: {
    author: string;
    date: string;
  };
  views: number;
  replies: number;
  likes: number;
  isPinned: boolean;
  isHot: boolean;
}

const ThreadCard = ({ thread }: { thread: Thread }) => {
  return (
    <Card key={thread.id} className="hover:bg-gray-50">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {thread.isPinned && (
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                  Ghim
                </span>
              )}
              {thread.isHot && (
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                  Hot
                </span>
              )}
              <Link href={`/forum/tu-tien/${thread.id}`}>
                <h2 className="text-lg font-semibold hover:text-blue-600">
                  {thread.title}
                </h2>
              </Link>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {thread.postDate}
              </span>
              <span>bởi {thread.author}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {thread.views}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              {thread.replies}
            </span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4" />
              {thread.likes}
            </span>
          </div>
        </div>

        <div className="mt-3 text-sm text-gray-500 border-t pt-2">
          Trả lời mới nhất bởi {thread.lastReply.author} •{" "}
          {thread.lastReply.date}
        </div>
      </CardContent>
    </Card>
  );
};

export default ThreadCard;
