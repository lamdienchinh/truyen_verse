"use client";
import { formatRelativeTime } from "@/utils/date-time";
import { Input } from "@workspace/ui/components/input";
import { PaginationComponent } from "@workspace/ui/components/pagination";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import { ArrowDown01, ArrowDown10, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function ChaptersList() {
  const [isOldToNew, setIsOldToNew] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };
  const chapters = [
    {
      id: "1",
      chap_index: 1,
      title: "Vạn sự khởi đầu nan",
      createdAt: new Date("2025-01-05T15:30:00Z"),
    },
    {
      id: "2",
      chap_index: 2,
      title: "Hoạ vô đơn chí",
      createdAt: new Date("2025-01-08T15:30:00Z"),
    },
    {
      id: "3",
      chap_index: 3,
      title: "May mắn cũng là một loại thực lực",
      createdAt: new Date("2025-01-09T15:30:00Z"),
    },
    {
      id: "4",
      chap_index: 4,
      title: "Vạn sự khởi đầu nan",
      createdAt: new Date("2025-01-05T15:30:00Z"),
    },
    {
      id: "5",
      chap_index: 5,
      title: "Hoạ vô đơn chí",
      createdAt: new Date("2025-01-08T15:30:00Z"),
    },
    {
      id: "6",
      chap_index: 6,
      title: "May mắn cũng là một loại thực lực",
      createdAt: new Date("2025-01-09T15:30:00Z"),
    },
  ];
  return (
    <section className="container my-8 space-y-4">
      <div className="flex items-center justify-between gap-4 py-4 px-4 bg-primary text-primary-foreground rounded-md">
        <div className="font-semibold">Danh sách chương</div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button onClick={() => setIsOldToNew((prev) => !prev)}>
                  {isOldToNew ? <ArrowDown01 /> : <ArrowDown10 />}
                </button>
              </TooltipTrigger>
              <TooltipContent>Chương cũ đến mới nhất</TooltipContent>
            </Tooltip>{" "}
          </TooltipProvider>
          <div className="relative w-fit">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-primary-foreground" />
            <Input
              placeholder="Tìm chương truyện..."
              className="pl-8 w-[300px] placeholder:text-primary-foreground border-primary-foreground"
              type="search"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {chapters.map((chapter) => (
          <div key={chapter.id}>
            <Link href="/detail/abcd/1" className="hover:text-primary/80">
              Chương {chapter.chap_index}: {chapter.title}
            </Link>
            <div className="text-sm text-gray-600">
              {formatRelativeTime(chapter.createdAt)}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <div className="w-fit my-8">
          <PaginationComponent
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            siblingsCount={1}
          />
        </div>
      </div>
    </section>
  );
}
