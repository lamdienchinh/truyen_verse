"use client";

import { DataTable } from "@/shared/components/data-table";
import { DataTablePagination } from "@/shared/components/table-pagination";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { DEFAULT_ARTICLE_FILTERS } from "../consts/article";
import { useArticleColumns } from "../hooks/use-article-columns";
import { useArticles } from "../hooks/use-articles";
import { TArticleFilters } from "../types/article";

export function ArticlesTable() {
  const [page] = useState(1);
  const [pageSize] = useState(10);
  const [filters] = useState<TArticleFilters>(DEFAULT_ARTICLE_FILTERS);
  const columns = useArticleColumns();
  const { data } = useArticles({
    ...filters,
    page,
    pageSize,
  });

  const table = useReactTable({
    data: data?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex: page - 1,
        pageSize,
      },
    },
  });

  return (
    <div className="space-y-6">
      <DataTable table={table} />
      <DataTablePagination table={table} />
    </div>
  );
}
