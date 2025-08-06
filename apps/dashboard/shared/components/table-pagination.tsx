import type { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Ellipsis,
} from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { cn } from "@workspace/ui/lib/utils";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  showFilterText?: boolean;
  showCurrentPageText?: boolean;
  maxVisiblePages?: number;
}

export function DataTablePagination<TData>({
  table,
  showCurrentPageText = false,
  showFilterText = false,
  maxVisiblePages = 5,
}: DataTablePaginationProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  const getPageNumbers = () => {
    const pages = [];

    if (pageCount <= maxVisiblePages) {
      for (let i = 0; i < pageCount; i++) {
        pages.push({ type: "page", value: i });
      }
    } else {
      pages.push({ type: "page", value: 0 });

      const middlePagesCount = Math.max(1, maxVisiblePages - 2);
      const halfMiddle = Math.floor(middlePagesCount / 2);

      let start = Math.max(1, pageIndex - halfMiddle);
      let end = Math.min(pageCount - 2, pageIndex + halfMiddle);

      if (pageIndex <= halfMiddle + 1) {
        start = 1;
        end = Math.min(pageCount - 2, middlePagesCount);
      }

      if (pageIndex >= pageCount - halfMiddle - 2) {
        start = Math.max(1, pageCount - middlePagesCount - 1);
        end = pageCount - 2;
      }

      if (start > 1) {
        pages.push({ type: "ellipsis", value: "start" });
      }

      for (let i = start; i <= end; i++) {
        pages.push({ type: "page", value: i });
      }

      if (end < pageCount - 2) {
        pages.push({ type: "ellipsis", value: "end" });
      }

      pages.push({ type: "page", value: pageCount - 1 });
    }

    return pages;
  };

  return (
    <div className="w-full flex justify-end">
      <div className="flex gap-4 items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Số dòng trên trang</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 25, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div
          className={cn(
            showCurrentPageText ? "flex" : "hidden",
            "w-[100px] items-center justify-center text-sm font-medium"
          )}
        >
          {table.getState().pagination.pageIndex + 1} / {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Trang đầu</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">Trang trước</span>
            <ChevronLeft />
          </Button>
          {getPageNumbers().map((item) =>
            item.type === "page" ? (
              <Button
                size="icon"
                variant={pageIndex === item.value ? "outline" : "ghost"}
                key={`page-${item.value}`}
                onClick={() => table.setPageIndex(item.value as number)}
              >
                {(item.value as number) + 1}
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                key={`ellipsis-${item.value}`}
                className="pointer-events-none"
              >
                <Ellipsis />
              </Button>
            )
          )}
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Trang tiếp</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">Trang cuối</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
