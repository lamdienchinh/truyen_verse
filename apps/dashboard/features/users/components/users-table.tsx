"use client";

import { DataTable } from "@/shared/components/data-table";
import { DataTablePagination } from "@/shared/components/table-pagination";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { useUserColumns } from "../hooks/use-user-columns";
import { useUsers } from "../hooks/use-users";
import { User } from "../types/user";

interface UsersTableProps {
  searchQuery?: string;
  statusFilter?: User["status"];
  roleFilter?: User["role"];
}

export function UsersTable({
  searchQuery,
  statusFilter,
  roleFilter,
}: UsersTableProps) {
  const [page] = useState(1);
  const [pageSize] = useState(10);
  const columns = useUserColumns();

  const { data, isLoading } = useUsers({
    page,
    pageSize,
    search: searchQuery,
    status: statusFilter,
    role: roleFilter,
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
      <DataTablePagination showFilterText showCurrentPageText table={table} />
    </div>
  );
}
