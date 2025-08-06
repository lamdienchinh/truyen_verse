"use client";

import { DataTable } from "@/shared/components/data-table";
import { DataTablePagination } from "@/shared/components/table-pagination";
import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { supportTicketsMockData } from "../consts/support-mock-data";
import { useSupportColumns } from "../hooks/use-support-columns";
import { TSupportTicket } from "../types/support.schema";

interface SupportTableProps {
  filterType?: "all" | "technical" | "feedback";
}

export default function SupportTable({
  filterType = "all",
}: SupportTableProps) {
  const supportColumns = useSupportColumns();
  const [globalFilter, setGlobalFilter] = useState("");

  // Filter tickets based on type
  const filteredData = supportTicketsMockData.filter(
    (ticket: TSupportTicket) => {
      if (filterType === "all") return true;
      if (filterType === "technical") {
        return ["technical", "bug_report"].includes(ticket.type);
      }
      if (filterType === "feedback") {
        return ["feedback", "feature_request"].includes(ticket.type);
      }
      return true;
    }
  );

  const table = useReactTable({
    data: filteredData,
    columns: supportColumns,
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
