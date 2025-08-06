import type { ColumnDef } from "@tanstack/react-table";
import { formatRelativeTime } from "@workspace/api/utils/date-time";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import {
  Eye,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import {
  ARTICLE_STATUS_COLORS,
  ARTICLE_STATUS_LABELS,
} from "../consts/article";
import { TArticle } from "../types/article";

export const useArticleColumns = () => {
  const columns: ColumnDef<TArticle>[] = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "BÀI VIẾT",
        cell: ({ row }) => {
          const article = row.original;
          return (
            <Link
              href={`/articles/${article.id}`}
              className="flex gap-4 hover:underline"
            >
              <div className="relative w-32 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={article.coverImage ?? ""}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  width={128}
                  height={128}
                />
                {article.featured && (
                  <div className="absolute top-2 right-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  </div>
                )}
              </div>
              <div className='line-clamp-2'>{article.title}</div>
            </Link>
          );
        },
        size: 300,
      },
      {
        accessorKey: "status",
        header: "TRẠNG THÁI",
        cell: ({ row }) => {
          const article = row.original;
          return (
            <div className="flex items-center gap-2 mb-2">
              <Badge
                variant="outline"
                className={ARTICLE_STATUS_COLORS[article.status]}
              >
                {ARTICLE_STATUS_LABELS[article.status]}
              </Badge>
            </div>
          );
        },
      },
      {
        accessorKey: "excerpt",
        header: "MÔ TẢ",
      },
      {
        accessorKey: "author",
        header: "TÁC GIẢ",
        cell: ({ row }) => {
          const article = row.original;
          return (
            <div className="flex items-center gap-2">
              <Image
                src={article.author.avatar || "/default-avatar.png"}
                alt={article.author.name}
                className="w-8 h-8 rounded-full"
                width={32}
                height={32}
              />
              <span>{article.author.name}</span>
            </div>
          );
        },
      },
      {
        accessorKey: "likes",
        header: "TRẠNG THÁI",
        cell: ({ row }) => {
          const article = row.original;
          return (
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {article.views.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                {article.likes.toLocaleString()}
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {article.comments.toLocaleString()}
              </div>
            </div>
          );
        },
        size: 200,
      },
      {
        accessorKey: "createdAt",
        header: "NGÀY",
        cell: ({ row }) => { 
          return formatRelativeTime(row.original.createdAt, "vi-VN");
        }
      },
      {
        id: "actions",
        header: "THAO TÁC",
        cell: ({ row }) => {
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href={`/articles/${row.original.id}/edit`}>
                    <Pencil className="w-4 h-4 mr-2" />
                    Chỉnh sửa
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Xóa
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    []
  );

  return columns;
};
