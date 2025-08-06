"use client";
import { DataTable } from "@/shared/components/data-table";
import { DataTablePagination } from "@/shared/components/table-pagination";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { booksMockData } from "../consts/mock-data";
import { useBookColumns } from "../hooks/use-book-columns";

export default function BookTable() {
  const bookColumns = useBookColumns();
  const table = useReactTable({
    data: booksMockData,
    columns: bookColumns,
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
