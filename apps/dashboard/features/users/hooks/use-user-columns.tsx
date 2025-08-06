import type { ColumnDef } from "@tanstack/react-table";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { Ban, CheckCircle, Edit, Eye, MoreHorizontal } from "lucide-react";
import { useMemo } from "react";
import { CURRENCY_MAP, USER_ROLE_MAP, USER_STATUS_MAP } from "../consts/user";
import { User } from "../types/user";

// Helper function for date formatting
const formatDateTime = (date: Date | string) => {
  const dateObj = typeof date === "string" ? new Date(date) : date;
  return dateObj.toLocaleDateString("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const useUserColumns = () => {
  const columns: ColumnDef<User>[] = useMemo(
    () => [
      {
        accessorKey: "user",
        header: "NGƯỜI DÙNG",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div className="flex items-center space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>
                  {(user.displayName || user.name || user.username)
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">
                  {user.displayName || user.name || user.username}
                </div>
                <div className="text-sm text-muted-foreground">
                  {user.email}
                </div>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "role",
        header: "VAI TRÒ",
        cell: ({ row }) => {
          const user = row.original;
          return <Badge variant="outline">{USER_ROLE_MAP[user.role]}</Badge>;
        },
      },
      {
        accessorKey: "status",
        header: "TRẠNG THÁI",
        cell: ({ row }) => {
          const user = row.original;
          const statusConfig = USER_STATUS_MAP[user.status];
          return (
            <Badge
              variant={
                statusConfig.variant as
                  | "default"
                  | "secondary"
                  | "destructive"
                  | "outline"
              }
              className={statusConfig.className}
            >
              {statusConfig.label}
            </Badge>
          );
        },
      },
      {
        accessorKey: "wallet",
        header: "SỐ DƯ",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div className="space-y-1">
              <div className="text-sm">
                <span className="font-medium">
                  {CURRENCY_MAP[user.wallet.currency].symbol}
                  {user.wallet.balance.toLocaleString()}
                </span>
                <span className="text-muted-foreground ml-1">
                  {user.wallet.currency}
                </span>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "statistics",
        header: "THỐNG KÊ",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div className="text-sm space-y-1">
              <div>
                <span className="text-muted-foreground">Đọc:</span>{" "}
                <span className="font-medium">
                  {user.statistics.chaptersRead}
                </span>
              </div>
              <div>
                <span className="text-muted-foreground">Yêu thích:</span>{" "}
                <span className="font-medium">
                  {user.statistics.favoriteNovels}
                </span>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "createdAt",
        header: "NGÀY TẠO",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div className="text-sm">{formatDateTime(user.createdAt)}</div>
          );
        },
      },
      {
        id: "actions",
        header: "THAO TÁC",
        cell: ({ row }) => {
          const user = row.original;

          const handleAction = (action: string, user: User) => {
            console.log(`${action} user:`, user);
            // TODO: Implement actions
          };

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleAction("view", user)}>
                  <Eye className="mr-2 h-4 w-4" />
                  Xem chi tiết
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleAction("edit", user)}>
                  <Edit className="mr-2 h-4 w-4" />
                  Chỉnh sửa
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {user.status === "active" ? (
                  <DropdownMenuItem
                    onClick={() => handleAction("ban", user)}
                    className="text-red-600"
                  >
                    <Ban className="mr-2 h-4 w-4" />
                    Khóa tài khoản
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem
                    onClick={() => handleAction("activate", user)}
                    className="text-green-600"
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Kích hoạt
                  </DropdownMenuItem>
                )}
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
