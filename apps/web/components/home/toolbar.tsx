import { Button } from "@workspace/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function ToolBar() {
  const genres = [
    "Tiên hiệp",
    "Kiếm hiệp",
    "Ngôn tình",
    "Đô thị",
    "Huyền huyễn",
    "Dị giới",
    "Võng du",
    "Khoa huyễn",
  ];

  return (
    <section className="bg-muted py-4">
      <div className="container flex justify-between items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Sắp xếp <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Mới nhất</DropdownMenuItem>
            <DropdownMenuItem>Lượt xem</DropdownMenuItem>
            <DropdownMenuItem>Đánh giá</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex space-x-2 overflow-x-auto">
          {genres.map((genre, index) => (
            <Button key={index} variant="ghost" size="sm">
              {genre}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
