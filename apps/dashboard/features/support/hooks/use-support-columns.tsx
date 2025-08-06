import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Edit,
  Eye,
  User,
  XCircle,
} from "lucide-react";
import { useMemo } from "react";
import { TSupportTicket } from "../types/support.schema";

export const useSupportColumns = () => {
  const columns: ColumnDef<TSupportTicket>[] = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "TIÊU ĐỀ",
        cell: ({ getValue, row }) => {
          const title = getValue() as string;
          const ticket = row.original;
          return (
            <div>
              <p className="font-medium truncate max-w-[200px]" title={title}>
                {title}
              </p>
              <p className="text-xs text-muted-foreground">
                {ticket.userName} - {ticket.userEmail}
              </p>
            </div>
          );
        },
      },
      {
        accessorKey: "type",
        header: "LOẠI YÊU CẦU",
        cell: ({ getValue }) => {
          const type = getValue() as string;
          const typeConfig = {
            technical: { label: "Kỹ thuật", variant: "default" as const },
            feedback: { label: "Phản hồi", variant: "secondary" as const },
            bug_report: { label: "Báo lỗi", variant: "destructive" as const },
            feature_request: {
              label: "Tính năng mới",
              variant: "outline" as const,
            },
            account_issue: { label: "Tài khoản", variant: "default" as const },
            other: { label: "Khác", variant: "secondary" as const },
          };

          const config =
            typeConfig[type as keyof typeof typeConfig] || typeConfig.other;

          return (
            <Badge variant={config.variant} className="text-xs">
              {config.label}
            </Badge>
          );
        },
      },
      {
        accessorKey: "category",
        header: "DANH MỤC",
        cell: ({ getValue }) => {
          const category = getValue() as string;
          const categoryConfig = {
            general: "Chung",
            billing: "Thanh toán",
            technical: "Kỹ thuật",
            content: "Nội dung",
            account: "Tài khoản",
          };

          return (
            <span className="text-sm">
              {categoryConfig[category as keyof typeof categoryConfig] ||
                category}
            </span>
          );
        },
      },
      {
        accessorKey: "status",
        header: "TRẠNG THÁI",
        cell: ({ getValue }) => {
          const status = getValue() as string;
          const statusConfig = {
            open: {
              label: "Mở",
              variant: "secondary" as const,
              icon: Clock,
              color: "text-blue-600",
            },
            in_progress: {
              label: "Đang xử lý",
              variant: "default" as const,
              icon: AlertCircle,
              color: "text-orange-600",
            },
            waiting_response: {
              label: "Chờ phản hồi",
              variant: "outline" as const,
              icon: Clock,
              color: "text-yellow-600",
            },
            resolved: {
              label: "Đã giải quyết",
              variant: "outline" as const,
              icon: CheckCircle,
              color: "text-green-600",
            },
            closed: {
              label: "Đã đóng",
              variant: "secondary" as const,
              icon: XCircle,
              color: "text-gray-600",
            },
          };

          const config =
            statusConfig[status as keyof typeof statusConfig] ||
            statusConfig.open;
          const Icon = config.icon;

          return (
            <div className="flex items-center gap-2">
              <Icon className={`h-4 w-4 ${config.color}`} />
              <Badge variant={config.variant} className="text-xs">
                {config.label}
              </Badge>
            </div>
          );
        },
      },
      {
        accessorKey: "priority",
        header: "ĐỘ ƯU TIÊN",
        cell: ({ getValue }) => {
          const priority = getValue() as string;
          const priorityConfig = {
            low: { label: "Thấp", variant: "secondary" as const },
            medium: { label: "Trung bình", variant: "default" as const },
            high: { label: "Cao", variant: "destructive" as const },
            urgent: { label: "Khẩn cấp", variant: "destructive" as const },
          };

          const config =
            priorityConfig[priority as keyof typeof priorityConfig] ||
            priorityConfig.medium;

          return (
            <Badge variant={config.variant} className="text-xs">
              {config.label}
            </Badge>
          );
        },
      },
      {
        accessorKey: "assignedTo",
        header: "NGƯỜI XỬ LÝ",
        cell: ({ getValue }) => {
          const assignedTo = getValue() as string;
          if (!assignedTo) {
            return (
              <span className="text-xs text-muted-foreground">
                Chưa phân công
              </span>
            );
          }
          return (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">{assignedTo}</span>
            </div>
          );
        },
      },
      {
        accessorKey: "createdAt",
        header: "THỜI GIAN",
        cell: ({ getValue }) => {
          const date = getValue() as Date;
          return (
            <span className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(date), {
                addSuffix: true,
                locale: vi,
              })}
            </span>
          );
        },
      },
      {
        id: "actions",
        header: "THAO TÁC",
        cell: ({ row }) => {
          const ticket = row.original;
          return (
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" title="Xem chi tiết">
                <Eye className="h-4 w-4" />
              </Button>
              {ticket.status !== "closed" && ticket.status !== "resolved" && (
                <Button size="sm" variant="ghost" title="Xử lý">
                  <Edit className="h-4 w-4" />
                </Button>
              )}
            </div>
          );
        },
      },
    ],
    []
  );

  return columns;
};
