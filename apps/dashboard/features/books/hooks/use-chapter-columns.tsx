import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Edit, Eye, Trash2 } from "lucide-react";
import { useMemo } from "react";
import { TChapter } from "../types/chapter.schema";

export const useChapterColumns = () => {
  const columns: ColumnDef<TChapter>[] = useMemo(
    () => [
      {
        accessorKey: "order",
        header: "STT",
        cell: ({ getValue }) => (
          <span className="font-medium">Chương {getValue() as number}</span>
        ),
      },
      {
        accessorKey: "title",
        header: "TIÊU ĐỀ",
      },
      {
        accessorKey: "status",
        header: "TRẠNG THÁI",
        cell: ({ getValue }) => {
          const status = getValue() as string;
          const statusConfig = {
            draft: { label: "Bản nháp", variant: "secondary" as const },
            published: { label: "Đã xuất bản", variant: "default" as const },
            scheduled: { label: "Đã lên lịch", variant: "outline" as const },
          };

          const config =
            statusConfig[status as keyof typeof statusConfig] ||
            statusConfig.draft;

          return <Badge variant={config.variant}>{config.label}</Badge>;
        },
      },
      {
        accessorKey: "wordCount",
        header: "SỐ TỪ",
        cell: ({ getValue }) => {
          const wordCount = getValue() as number;
          return wordCount ? `${wordCount.toLocaleString()} từ` : "—";
        },
      },
      {
        accessorKey: "publishedDate",
        header: "NGÀY XUẤT BẢN",
        cell: ({ getValue }) => {
          const date = getValue() as Date;
          return date ? new Date(date).toLocaleDateString("vi-VN") : "—";
        },
      },
      {
        id: "actions",
        header: "THAO TÁC",
        cell: () => {
          return (
            <div className="flex items-center gap-2">
              <Button size="sm" variant="ghost">
                <Eye className="h-4 w-4" />
              </Button>
              <Button size="sm" variant="ghost">
                <Edit className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  return columns;
};
