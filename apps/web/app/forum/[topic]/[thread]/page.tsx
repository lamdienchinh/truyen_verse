"use client";

import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Textarea } from "@workspace/ui/components/textarea";
import { MessageSquare, Share2, ThumbsUp } from "lucide-react";
import { useParams } from "next/navigation";

export default function ThreadPage() {
  const params = useParams();
  const topic = {
    id: params.thread,
    title: "Biểu tượng trong 'Giết con chim nhại'",
    author: "Nguyễn Thị An",
    authorRole: "Giáo viên Văn học",
    content:
      "Trong tác phẩm 'Giết con chim nhại' của Harper Lee, chim nhại được sử dụng như một biểu tượng quan trọng...",
    date: "15/06/2023",
    category: "Phân tích văn học",
    likes: 42,
    comments: 15,
    replies: [
      {
        author: "Trần Văn Bình",
        authorRole: "Sinh viên",
        content:
          "Tôi hoàn toàn đồng ý với phân tích của bạn. Biểu tượng chim nhại còn thể hiện...",
        date: "16/06/2023",
        likes: 8,
      },
      {
        author: "Lê Thị Cúc",
        authorRole: "Nhà phê bình văn học",
        content:
          "Một góc nhìn thú vị! Tôi cũng muốn bổ sung thêm về vai trò của Atticus Finch...",
        date: "17/06/2023",
        likes: 12,
      },
    ],
  };

  return (
    <div className="w-full">
      <Breadcrumb
        items={[
          { label: "Diễn đàn", href: "/forum" },
          { label: "Tu tiên", href: "/forum/tu-tien" },
          { label: topic.title, href: `/forum/tu-tien/${topic.id}` },
        ]}
      />

      <Card className="mt-2">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl mb-2">{topic.title}</CardTitle>
              <Badge variant="secondary">{topic.category}</Badge>
            </div>
            <Button variant="outline">Theo dõi</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4 mb-4">
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${topic.author}`}
              />
              <AvatarFallback>
                {topic.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{topic.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {topic.authorRole}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {topic.date}
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {topic.content}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex space-x-4">
            <Button variant="ghost" size="sm">
              <ThumbsUp className="w-4 h-4 mr-2" />
              {topic.likes} Thích
            </Button>
            <Button variant="ghost" size="sm">
              <MessageSquare className="w-4 h-4 mr-2" />
              {topic.comments} Bình luận
            </Button>
          </div>
          <Button variant="ghost" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Chia sẻ
          </Button>
        </CardFooter>
      </Card>

      <h2 className="text-2xl font-bold my-4">
        Trả lời ({topic.replies.length})
      </h2>
      {topic.replies.map((reply, index) => (
        <Card key={index} className="mb-4">
          <CardContent className="pt-4">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${reply.author}`}
                />
                <AvatarFallback>
                  {reply.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{reply.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {reply.authorRole}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {reply.date}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {reply.content}
            </p>
            <Button variant="ghost" size="sm">
              <ThumbsUp className="w-4 h-4 mr-2" />
              {reply.likes} Thích
            </Button>
          </CardContent>
        </Card>
      ))}

      <Card>
        <CardHeader>
          <CardTitle>Thêm trả lời</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <Textarea
              className="mb-4"
              placeholder="Nhập trả lời của bạn ở đây..."
            />
            <Button type="submit">Gửi trả lời</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
