import type { ColumnDef } from "@tanstack/react-table";
import { Button } from "@workspace/ui/components/button";
import { BookOpen, Plus } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { TBook } from "../types/book.schema";

export const useBookColumns = () => {
  const columns: ColumnDef<TBook>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "TRUYỆN",
      },
      {
        accessorKey: "status",
        header: "TRẠNG THÁI",
      },
      {
        accessorKey: "publicDate",
        header: "NGÀY PHÁT HÀNH",
      },
      {
        id: "actions",
        header: "THAO TÁC",
        cell: ({ row }) => {
          const book = row.original;
          return (
            <div className="flex items-center gap-2">
              <Button asChild size="sm" variant="outline">
                <Link
                  href={`/books/${book.id}/chapters?bookTitle=${encodeURIComponent(book.name)}`}
                  className="flex items-center gap-2"
                >
                  <BookOpen className="h-4 w-4" />
                  Quản lý chương
                </Link>
              </Button>
              <Button asChild size="sm" variant="default">
                <Link
                  href={`/books/create-chapter?bookId=${book.id}&bookTitle=${encodeURIComponent(book.name)}`}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Thêm chương
                </Link>
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  return columns;
};
