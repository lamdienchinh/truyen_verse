import { Button } from "@workspace/ui/components/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export function ArticleHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold">Quản lý bài viết</h1>
        <p className="text-muted-foreground">
          Quản lý và chỉnh sửa các bài viết trên website
        </p>
      </div>
      <Button asChild>
        <Link href="/articles/create">
          <Plus className="w-4 h-4 mr-2" />
          Tạo bài viết mới
        </Link>
      </Button>
    </div>
  );
}
