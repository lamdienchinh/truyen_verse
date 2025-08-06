import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Search } from "lucide-react";

export default function SearchFilter() {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Tìm kiếm" className="pl-10" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Trạng thái" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Nháp</SelectItem>
            <SelectItem value="fantasy">Chờ duyệt</SelectItem>
            <SelectItem value="romance">Đã duyệt</SelectItem>
            <SelectItem value="action">Đã xuất bản</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Thuộc tính" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Thuộc tính</SelectItem>
            <SelectItem value="published">Miễn phí</SelectItem>
            <SelectItem value="draft">Thu phí</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
