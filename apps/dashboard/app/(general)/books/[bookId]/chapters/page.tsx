import ChapterTable from "@/features/books/components/chapter-table";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { ArrowLeft, Plus } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: {
    bookId: string;
  };
  searchParams: {
    bookTitle?: string;
  };
}

export default function Page({ params, searchParams }: PageProps) {
  const { bookId } = params;
  const { bookTitle } = searchParams;

  return (
    <section className="w-full pt-[40px]">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/books" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Quay lại
                </Link>
              </Button>
              <div>
                <CardTitle>Quản lý chương truyện</CardTitle>
                {bookTitle && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Truyện: {decodeURIComponent(bookTitle)}
                  </p>
                )}
              </div>
            </div>
            <Button asChild>
              <Link
                href={`/books/create-chapter?bookId=${bookId}&bookTitle=${bookTitle || ""}`}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Thêm chương mới
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ChapterTable bookId={bookId} />
        </CardContent>
      </Card>
    </section>
  );
}
