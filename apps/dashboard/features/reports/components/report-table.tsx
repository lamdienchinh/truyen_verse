"use client";

import { DataTable } from "@/shared/components/data-table";
import { DataTablePagination } from "@/shared/components/table-pagination";
import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { reportsMockData } from "../consts/reports-mock-data";
import { useReportColumns } from "../hooks/use-report-columns";
import { TReport } from "../types/report.schema";

interface ReportTableProps {
  filterType?: "all" | "violation" | "spam";
}

export default function ReportTable({ filterType = "all" }: ReportTableProps) {
  const reportColumns = useReportColumns();
  const [globalFilter, setGlobalFilter] = useState("");

  // Filter reports based on type
  const filteredData = reportsMockData.filter((report: TReport) => {
    if (filterType === "all") return true;
    if (filterType === "violation") {
      return ["violation", "inappropriate_content", "harassment"].includes(
        report.type
      );
    }
    if (filterType === "spam") {
      return report.type === "spam";
    }
    return true;
  });

  const table = useReactTable({
    data: filteredData,
    columns: reportColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter,
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <div className="space-y-4">
      <DataTable table={table} />
      <DataTablePagination showFilterText showCurrentPageText table={table} />
    </div>
  );
}
