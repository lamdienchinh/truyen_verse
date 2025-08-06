"use client";
import { formatRelativeTime } from "@/utils/date-time";
import { Button } from "@workspace/ui/components/button";
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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
    <section className="container my-6 sm:my-8 space-y-3 sm:space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 sm:py-4 px-3 sm:px-4 bg-primary text-primary-foreground rounded-md">
        <div className="font-semibold text-sm sm:text-base">Danh sách chương</div>
        
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-primary-foreground h-8 w-8"
                  onClick={() => setIsOldToNew((prev) => !prev)}
                >
                  {isOldToNew ? <ArrowDown01 className="h-4 w-4" /> : <ArrowDown10 className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>Chương cũ đến mới nhất</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          {/* Mobile search toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-primary-foreground h-8 w-8 sm:hidden"
            onClick={() => setIsSearchOpen(prev => !prev)}
          >
            <Search className="h-4 w-4" />
          </Button>
          
          {/* Desktop search */}
          <div className="relative w-fit hidden sm:block">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-primary-foreground" />
            <Input
              placeholder="Tìm chương truyện..."
              className="pl-8 w-[200px] md:w-[300px] placeholder:text-primary-foreground border-primary-foreground h-9"
              type="search"
            />
          </div>
        </div>
        
        {/* Mobile search (conditional) */}
        {isSearchOpen && (
          <div className="relative w-full sm:hidden mt-2">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-primary-foreground" />
            <Input
              placeholder="Tìm chương truyện..."
              className="pl-8 w-full placeholder:text-primary-foreground border-primary-foreground"
              type="search"
              autoFocus
            />
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="p-2 border rounded hover:bg-muted/30">
            <Link href="/detail/abcd/1" className="block hover:text-primary/80 text-sm sm:text-base line-clamp-1">
              Chương {chapter.chap_index}: {chapter.title}
            </Link>
            <div className="text-xs sm:text-sm text-gray-600">
              {formatRelativeTime(chapter.createdAt)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <div className="w-fit my-4 sm:my-8">
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
