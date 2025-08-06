import { Button } from "@workspace/ui/components/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export function RecommendationHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Quản lý đề xuất</h1>
        <p className="text-muted-foreground">
          Quản lý và điều chỉnh các đề xuất truyện cho người dùng
        </p>
      </div>
      <Button asChild>
        <Link href="/recommendations/create">
          <Plus className="mr-2 h-4 w-4" />
          Tạo đề xuất mới
        </Link>
      </Button>
    </div>
  );
}
