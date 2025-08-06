"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Textarea } from "@workspace/ui/components/textarea";
import { MessageSquare, MoreVertical, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface Comment {
  id: number;
  username: string;
  avatar: string;
  content: string;
  likes: number;
  replies: number;
  createdAt: Date;
  chapter: number;
}

const initialComments: Comment[] = [
  {
    id: 1,
    username: "NguyenVanA",
    avatar: "/placeholder.svg",
    content:
      "Truyện rất hay! Cốt truyện lôi cuốn và nhân vật chính rất thú vị.",
    likes: 15,
    replies: 3,
    createdAt: new Date(2024, 0, 5),
    chapter: 45,
  },
  {
    id: 2,
    username: "TranThiB",
    avatar: "/placeholder.svg",
    content: "Chapter này plot twist quá đỉnh!",
    likes: 8,
    replies: 1,
    createdAt: new Date(2024, 0, 8),
    chapter: 46,
  },
];

export function DiscussionTab() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const newCommentObj: Comment = {
      id: comments.length + 1,
      username: "CurrentUser", // Replace with actual user data
      avatar: "/placeholder.svg",
      content: newComment,
      likes: 0,
      replies: 0,
      createdAt: new Date(),
      chapter: 47, // Replace with actual chapter data
    };

    setComments([newCommentObj, ...comments]);
    setNewComment("");
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4 flex flex-col items-end">
          <Textarea
            placeholder="Thêm bình luận của bạn..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-2"
          />
          <Button
            onClick={handleSubmitComment}
            disabled={newComment.trim() === ""}
          >
            Gửi bình luận
          </Button>
        </CardContent>
      </Card>
      {comments.map((comment) => (
        <Card key={comment.id}>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <Avatar>
                <AvatarImage src={comment.avatar} alt={comment.username} />
                <AvatarFallback>{comment.username[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{comment.username}</h3>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-gray-500">
                  Chapter {comment.chapter} •{" "}
                  {comment.createdAt.toLocaleDateString()}
                </p>
                <p className="mt-2">{comment.content}</p>
                <div className="mt-2 flex items-center space-x-4">
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    {comment.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    {comment.replies}
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button className="w-full">Xem thêm bình luận</Button>
    </div>
  );
}
