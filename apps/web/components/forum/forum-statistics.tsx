"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { FileTextIcon, InfoIcon, MessageCircleIcon } from "lucide-react";
import { useState } from "react";

const ForumStatistic = () => {
  const [stats] = useState({
    posts: 1200,
    comments: 5000,
    topics: 450,
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Tổng số bài viết */}
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-xl font-semibold uppercase">
            <FileTextIcon className="h-5 w-5 fill-primary text-primary-foreground" />
            Bài Viết
            <TooltipProvider>
              <Tooltip>
                <TooltipContent>Tổng số bài viết trong diễn đàn</TooltipContent>
                <TooltipTrigger>
                  <InfoIcon
                    className="fill-primary text-primary-foreground"
                    width={20}
                    height={20}
                  />
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full flex justify-center">
          <div className="w-fit">
            <span className="text-[40px] font-semibold"> {stats.posts} </span>
            <span>bài</span>
          </div>
        </CardContent>
      </Card>
      {/* Số lượng bình luận */}
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-xl font-semibold uppercase">
            <MessageCircleIcon className="h-5 w-5 fill-primary text-primary-foreground" />
            Bình Luận Mới
            <TooltipProvider>
              <Tooltip>
                <TooltipContent>Số bình luận mới</TooltipContent>
                <TooltipTrigger>
                  <InfoIcon
                    className="fill-primary text-primary-foreground"
                    width={20}
                    height={20}
                  />
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full flex justify-center">
          <div className="w-fit">
            <span className="text-[40px] font-semibold">{stats.comments} </span>
            <span>bình luận</span>
          </div>
        </CardContent>
      </Card>

      {/* Chủ đề */}
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2 text-xl font-semibold uppercase">
            <FileTextIcon className="h-5 w-5 fill-primary text-primary-foreground" />
            Chủ Đề Mới{" "}
            <TooltipProvider>
              <Tooltip>
                <TooltipContent>Số chủ đề mới</TooltipContent>
                <TooltipTrigger>
                  <InfoIcon
                    className="fill-primary text-primary-foreground"
                    width={20}
                    height={20}
                  />
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </CardTitle>
        </CardHeader>
        <CardContent className="w-full flex justify-center">
          <div className="w-fit">
            <span className="text-[40px] font-semibold"> {stats.topics} </span>
            <span>chủ đề</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ForumStatistic;
