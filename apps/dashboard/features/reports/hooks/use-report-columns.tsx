import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Edit,
  Eye,
  XCircle,
} from "lucide-react";
import { useMemo } from "react";
import { TReport } from "../types/report.schema";

export const useReportColumns = () => {
  const columns: ColumnDef<TReport>[] = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "TIÊU ĐỀ",
        cell: ({ getValue, row }) => {
          const title = getValue() as string;
          const report = row.original;
          return (
            <div>
              <p className="font-medium truncate max-w-[200px]" title={title}>
                {title}
              </p>
              <p className="text-xs text-muted-foreground">
                Báo cáo bởi: {report.reportedBy}
              </p>
            </div>
          );
        },
      },
      {
        accessorKey: "type",
        header: "LOẠI BÁO CÁO",
        cell: ({ getValue }) => {
          const type = getValue() as string;
          const typeConfig = {
            violation: { label: "Vi phạm", variant: "destructive" as const },
            spam: { label: "Spam", variant: "secondary" as const },
            copyright: { label: "Bản quyền", variant: "default" as const },
            inappropriate_content: {
              label: "Nội dung không phù hợp",
              variant: "outline" as const,
            },
            harassment: { label: "Quấy rối", variant: "destructive" as const },
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
        accessorKey: "status",
        header: "TRẠNG THÁI",
        cell: ({ getValue }) => {
          const status = getValue() as string;
          const statusConfig = {
            pending: {
              label: "Chờ xử lý",
              variant: "secondary" as const,
              icon: Clock,
              color: "text-yellow-600",
            },
            reviewing: {
              label: "Đang xem xét",
              variant: "default" as const,
              icon: Eye,
              color: "text-blue-600",
            },
            resolved: {
              label: "Đã giải quyết",
              variant: "outline" as const,
              icon: CheckCircle,
              color: "text-green-600",
            },
            rejected: {
              label: "Từ chối",
              variant: "destructive" as const,
              icon: XCircle,
              color: "text-red-600",
            },
          };

          const config =
            statusConfig[status as keyof typeof statusConfig] ||
            statusConfig.pending;
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
            low: {
              label: "Thấp",
              variant: "secondary" as const,
              color: "text-gray-600",
            },
            medium: {
              label: "Trung bình",
              variant: "default" as const,
              color: "text-blue-600",
            },
            high: {
              label: "Cao",
              variant: "destructive" as const,
              color: "text-orange-600",
            },
            urgent: {
              label: "Khẩn cấp",
              variant: "destructive" as const,
              color: "text-red-600",
            },
          };

          const config =
            priorityConfig[priority as keyof typeof priorityConfig] ||
            priorityConfig.medium;

          return (
            <div className="flex items-center gap-2">
              {priority === "urgent" && (
                <AlertTriangle className="h-4 w-4 text-red-600" />
              )}
              <Badge variant={config.variant} className="text-xs">
                {config.label}
              </Badge>
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
          const report = row.original;
          return (
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost" title="Xem chi tiết">
                <Eye className="h-4 w-4" />
              </Button>
              {report.status !== "resolved" && report.status !== "rejected" && (
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
