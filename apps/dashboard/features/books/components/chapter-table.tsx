"use client";
import { DataTable } from "@/shared/components/data-table";
import { DataTablePagination } from "@/shared/components/table-pagination";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { chaptersMockData } from "../consts/chapter-mock-data";
import { useChapterColumns } from "../hooks/use-chapter-columns";
import { TChapter } from "../types/chapter.schema";

interface ChapterTableProps {
  bookId: string;
}

export default function ChapterTable({ bookId }: ChapterTableProps) {
  const chapterColumns = useChapterColumns();

  const filteredChapters = chaptersMockData.filter(
    (chapter: TChapter) => chapter.bookId === bookId
  );

  const table = useReactTable({
    data: filteredChapters,
    columns: chapterColumns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  return (
    <div className="space-y-4">
      <DataTable table={table} />
      <DataTablePagination showFilterText showCurrentPageText table={table} />
    </div>
  );
}
