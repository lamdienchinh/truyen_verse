import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  Edit,
  Eye,
  MoreHorizontal,
  Power,
  PowerOff,
  Trash2,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { useToast } from "@workspace/ui/hooks/use-toast";

import {
  CATEGORY_COLORS,
  PRIORITY_COLORS,
  RECOMMENDATION_CATEGORIES,
  RECOMMENDATION_PRIORITIES,
} from "../consts/recommendation";
import type { Recommendation } from "../types/recommendation";
import {
  useDeleteRecommendation,
  useUpdateRecommendation,
} from "./use-recommendations";

export const useRecommendationColumns = () => {
  const { toast } = useToast();
  const deleteRecommendation = useDeleteRecommendation();
  const updateRecommendation = useUpdateRecommendation();
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [togglingId, setTogglingId] = useState<string | null>(null);

  const columns: ColumnDef<Recommendation>[] = useMemo(() => {
    const handleDelete = async (recommendation: Recommendation) => {
      try {
        setDeletingId(recommendation.id);
        await deleteRecommendation.mutateAsync(recommendation.id);
        toast({
          title: "Thành công",
          description: "Đã xóa đề xuất thành công",
        });
      } catch {
        toast({
          title: "Lỗi",
          description: "Có lỗi xảy ra khi xóa đề xuất",
          variant: "destructive",
        });
      } finally {
        setDeletingId(null);
      }
    };

    const handleToggleActive = async (recommendation: Recommendation) => {
      try {
        setTogglingId(recommendation.id);
        await updateRecommendation.mutateAsync({
          id: recommendation.id,
          isActive: !recommendation.isActive,
        });
        toast({
          title: "Thành công",
          description: `Đã ${recommendation.isActive ? "tắt" : "bật"} đề xuất`,
        });
      } catch {
        toast({
          title: "Lỗi",
          description: "Có lỗi xảy ra khi cập nhật trạng thái",
          variant: "destructive",
        });
      } finally {
        setTogglingId(null);
      }
    };

    return [
      {
        accessorKey: "title",
        header: "ĐỀ XUẤT",
        cell: ({ row }) => {
          const recommendation = row.original;
          return (
            <div>
              <div className="font-medium">{recommendation.title}</div>
              <div className="text-sm text-muted-foreground line-clamp-1">
                {recommendation.description}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "novel",
        header: "TRUYỆN",
        cell: ({ row }) => {
          const recommendation = row.original;
          return (
            <div>
              <div className="font-medium">{recommendation.novel.title}</div>
              <div className="text-sm text-muted-foreground">
                {recommendation.novel.author}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "category",
        header: "DANH MỤC",
        cell: ({ row }) => {
          const recommendation = row.original;
          return (
            <Badge
              variant="outline"
              className={CATEGORY_COLORS[recommendation.category]}
            >
              {RECOMMENDATION_CATEGORIES[recommendation.category]}
            </Badge>
          );
        },
      },
      {
        accessorKey: "priority",
        header: "ƯU TIÊN",
        cell: ({ row }) => {
          const recommendation = row.original;
          return (
            <Badge
              variant="outline"
              className={PRIORITY_COLORS[recommendation.priority]}
            >
              {RECOMMENDATION_PRIORITIES[recommendation.priority]}
            </Badge>
          );
        },
      },
      {
        accessorKey: "isActive",
        header: "TRẠNG THÁI",
        cell: ({ row }) => {
          const recommendation = row.original;
          return (
            <Badge variant={recommendation.isActive ? "default" : "secondary"}>
              {recommendation.isActive ? "Hoạt động" : "Tạm dừng"}
            </Badge>
          );
        },
      },
      {
        accessorKey: "dateRange",
        header: "THỜI GIAN",
        cell: ({ row }) => {
          const recommendation = row.original;
          return (
            <div className="text-sm">
              <div>
                {format(recommendation.startDate, "dd/MM/yyyy", {
                  locale: vi,
                })}
              </div>
              <div className="text-muted-foreground">
                đến{" "}
                {format(recommendation.endDate, "dd/MM/yyyy", { locale: vi })}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "position",
        header: "VỊ TRÍ",
        cell: ({ row }) => {
          const recommendation = row.original;
          return <div className="font-medium">#{recommendation.position}</div>;
        },
      },
      {
        id: "actions",
        header: "THAO TÁC",
        cell: ({ row }) => {
          const recommendation = row.original;
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Eye className="h-4 w-4 mr-2" />
                  Xem chi tiết
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Edit className="h-4 w-4 mr-2" />
                  Chỉnh sửa
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => handleToggleActive(recommendation)}
                  disabled={togglingId === recommendation.id}
                >
                  {recommendation.isActive ? (
                    <>
                      <PowerOff className="h-4 w-4 mr-2" />
                      Tắt đề xuất
                    </>
                  ) : (
                    <>
                      <Power className="h-4 w-4 mr-2" />
                      Bật đề xuất
                    </>
                  )}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => handleDelete(recommendation)}
                  disabled={deletingId === recommendation.id}
                  className="text-red-600"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Xóa
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ];
  }, [
    deletingId,
    togglingId,
    deleteRecommendation,
    updateRecommendation,
    toast,
  ]);

  return columns;
};
