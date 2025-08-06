import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent, CardTitle } from "@workspace/ui/components/card";
import { DatePicker } from "@workspace/ui/components/date-picker";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { useState } from "react";

interface ArticleFilterProps {
  onFilterChange: (filters: {
    fromDate?: Date;
    toDate?: Date;
    sortBy?: string;
    tags?: string[];
  }) => void;
}

const sortOptions = [
  { value: "newest", label: "Mới nhất" },
  { value: "oldest", label: "Trễ nhất" },
  { value: "mostRead", label: "Đọc nhiều nhất" },
  { value: "alphabetical", label: "Theo ký tự" },
];

const availableTags = ["Truyện", "Tiểu thuyết", "Tin mới", "Tin hot"];

export default function ArticleFilter({ onFilterChange }: ArticleFilterProps) {
  const [filters, setFilters] = useState({
    fromDate: undefined,
    toDate: undefined,
    sortBy: "newest",
    tags: [] as string[],
  });

  const handleDateChange = (
    key: "fromDate" | "toDate",
    date: Date | undefined
  ) => {
    const updatedFilters = { ...filters, [key]: date };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSortChange = (value: string) => {
    const updatedFilters = { ...filters, sortBy: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleTagToggle = (tag: string) => {
    const isTagSelected = filters.tags.includes(tag);
    const updatedTags = isTagSelected
      ? filters.tags.filter((t) => t !== tag)
      : [...filters.tags, tag];

    const updatedFilters = { ...filters, tags: updatedTags };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <Card className="w-full">
      <CardContent>
        <CardTitle>
          <h2 className="text-lg font-semibold mt-4">Lọc bài viết</h2>
        </CardTitle>
        <div className="mb-2 space-y-2">
          <Label htmlFor="fromDate" className="block text-sm font-medium">
            Từ ngày
          </Label>
          <DatePicker
            value={filters.fromDate}
            onChange={(date) => handleDateChange("fromDate", date)}
            placeholder="Chọn ngày bắt đầu"
            buttonClassName="w-full bg-transparent"
          />
        </div>

        <div className="mb-4 space-y-2">
          <Label
            htmlFor="toDate"
            className="block text-sm font-medium"
          >
            Đến ngày
          </Label>
          <DatePicker
            value={filters.toDate}
            onChange={(date) => handleDateChange("toDate", date)}
            placeholder="Chọn ngày kết thúc"
            buttonClassName="w-full bg-transparent"
          />
        </div>

        <div className="mb-4 space-y-2">
          <Label htmlFor="sortBy" className="block text-sm font-medium">
            Sắp xếp theo
          </Label>
          <Select
            onValueChange={handleSortChange}
            defaultValue={filters.sortBy}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sắp xếp theo" />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <Label htmlFor="tags" className="block text-sm font-medium">
            Tag
          </Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {availableTags.map((tag) => (
              <Badge
                key={tag}
                onClick={() => handleTagToggle(tag)}
                className={`flex items-center gap-2 cursor-pointer ${
                  filters.tags.includes(tag)
                    ? "bg-primary text-primary-foreground"
                    : "!bg-gray-200 !text-gray-700"
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
