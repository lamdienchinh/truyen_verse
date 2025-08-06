"use client";

import { DataTable } from "@/shared/components/data-table";
import { DataTablePagination } from "@/shared/components/table-pagination";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { useTransactionColumns } from "../hooks/use-transaction-columns";
import { useTransactions } from "../hooks/use-transactions";
import { Transaction } from "../types/transaction";

interface TransactionsTableProps {
  searchQuery: string;
  statusFilter?: Transaction["status"];
  typeFilter?: Transaction["type"];
  currencyFilter?: Transaction["currency"];
}

export function TransactionsTable({
  searchQuery,
  statusFilter,
  typeFilter,
  currencyFilter,
}: TransactionsTableProps) {
  const [page] = useState(1);
  const [pageSize] = useState(10);
  const columns = useTransactionColumns();

  const { data, isLoading } = useTransactions({
    search: searchQuery,
    status: statusFilter,
    type: typeFilter,
    currency: currencyFilter,
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

  return (
    <div className="space-y-6">
      <DataTable table={table} />
      <DataTablePagination table={table} />
    </div>
  );
}
