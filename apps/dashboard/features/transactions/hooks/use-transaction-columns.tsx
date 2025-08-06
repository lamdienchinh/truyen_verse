import type { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import {
  CheckCircle,
  Clock,
  Edit,
  Eye,
  MoreHorizontal,
  Trash2,
  XCircle,
} from "lucide-react";
import { useMemo } from "react";
import { TRANSACTION_STATUSES, TRANSACTION_TYPES } from "../consts/transaction";
import { Transaction } from "../types/transaction";

const STATUS_COLORS = {
  pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
  completed: "bg-green-100 text-green-800 border-green-200",
  failed: "bg-red-100 text-red-800 border-red-200",
  cancelled: "bg-gray-100 text-gray-800 border-gray-200",
  refunded: "bg-blue-100 text-blue-800 border-blue-200",
} as const;

const TYPE_COLORS = {
  deposit: "bg-blue-100 text-blue-800 border-blue-200",
  withdrawal: "bg-orange-100 text-orange-800 border-orange-200",
  purchase: "bg-purple-100 text-purple-800 border-purple-200",
  refund: "bg-cyan-100 text-cyan-800 border-cyan-200",
  reward: "bg-green-100 text-green-800 border-green-200",
  penalty: "bg-red-100 text-red-800 border-red-200",
} as const;

export const useTransactionColumns = () => {
  const columns: ColumnDef<Transaction>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID GIAO DỊCH",
        cell: ({ row }) => {
          const transaction = row.original;
          return <div className="font-mono text-sm">{transaction.id}</div>;
        },
      },
      {
        accessorKey: "user",
        header: "NGƯỜI DÙNG",
        cell: ({ row }) => {
          const transaction = row.original;
          return (
            <div>
              <div className="font-medium">{transaction.user.displayName}</div>
              <div className="text-sm text-muted-foreground">
                {transaction.user.email}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "type",
        header: "LOẠI",
        cell: ({ row }) => {
          const transaction = row.original;
          return (
            <Badge variant="outline" className={TYPE_COLORS[transaction.type]}>
              {TRANSACTION_TYPES[transaction.type]}
            </Badge>
          );
        },
      },
      {
        accessorKey: "amount",
        header: "SỐ TIỀN",
        cell: ({ row }) => {
          const transaction = row.original;
          return (
            <div className="text-right">
              <div className="font-medium">
                {transaction.amount.toLocaleString("vi-VN")}{" "}
                {transaction.currency}
              </div>
              {transaction.gateway?.fee && transaction.gateway.fee > 0 && (
                <div className="text-xs text-muted-foreground">
                  Phí: {transaction.gateway.fee.toLocaleString("vi-VN")}{" "}
                  {transaction.currency}
                </div>
              )}
            </div>
          );
        },
      },
      {
        accessorKey: "status",
        header: "TRẠNG THÁI",
        cell: ({ row }) => {
          const transaction = row.original;
          return (
            <Badge
              variant="outline"
              className={STATUS_COLORS[transaction.status]}
            >
              {transaction.status === "pending" && (
                <Clock className="w-3 h-3 mr-1" />
              )}
              {transaction.status === "completed" && (
                <CheckCircle className="w-3 h-3 mr-1" />
              )}
              {transaction.status === "failed" && (
                <XCircle className="w-3 h-3 mr-1" />
              )}
              {transaction.status === "cancelled" && (
                <XCircle className="w-3 h-3 mr-1" />
              )}
              {TRANSACTION_STATUSES[transaction.status]}
            </Badge>
          );
        },
      },
      {
        accessorKey: "createdAt",
        header: "THỜI GIAN",
        cell: ({ row }) => {
          const transaction = row.original;
          return (
            <div className="text-sm">
              <div>
                {format(new Date(transaction.createdAt), "dd/MM/yyyy", {
                  locale: vi,
                })}
              </div>
              <div className="text-muted-foreground">
                {format(new Date(transaction.createdAt), "HH:mm", {
                  locale: vi,
                })}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "paymentMethod",
        header: "PHƯƠNG THỨC",
        cell: ({ row }) => {
          const transaction = row.original;
          return <div className="text-sm">{transaction.paymentMethod}</div>;
        },
      },
      {
        id: "actions",
        header: "THAO TÁC",
        cell: ({ row }) => {
          const transaction = row.original;

          const handleView = () => {
            // TODO: Implement view transaction details
            console.log("View transaction:", transaction.id);
          };

          const handleEdit = () => {
            // TODO: Implement edit transaction
            console.log("Edit transaction:", transaction.id);
          };

          const handleDelete = () => {
            // TODO: Implement delete transaction
            console.log("Delete transaction:", transaction.id);
          };

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleView}>
                  <Eye className="h-4 w-4 mr-2" />
                  Xem chi tiết
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleEdit}>
                  <Edit className="h-4 w-4 mr-2" />
                  Chỉnh sửa
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleDelete}
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
    ],
    []
  );

  return columns;
};
