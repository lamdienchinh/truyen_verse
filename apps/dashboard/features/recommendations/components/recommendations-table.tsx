"use client";

import { DataTable } from "@/shared/components/data-table";
import { DataTablePagination } from "@/shared/components/table-pagination";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useRecommendationColumns } from "../hooks/use-recommendation-columns";
import type { Recommendation } from "../types/recommendation";

interface RecommendationsTableProps {
  recommendations: Recommendation[];
  isLoading?: boolean;
}

export function RecommendationsTable({
  recommendations,
  isLoading,
}: RecommendationsTableProps) {
  const columns = useRecommendationColumns();

  const table = useReactTable({
    data: recommendations || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="rounded-md border">
          <div className="p-8 text-center text-muted-foreground">
            Đang tải dữ liệu...
          </div>
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return (
      <div className="space-y-6">
        <div className="rounded-md border">
          <div className="p-8 text-center text-muted-foreground">
            Không có đề xuất nào được tìm thấy
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <DataTable table={table} />
      <DataTablePagination showFilterText showCurrentPageText table={table} />
    </div>
  );
}
