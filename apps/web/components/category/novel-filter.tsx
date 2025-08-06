"use client";

import {
  CHAPTER_COUNT_OPTIONS,
  CHARACTER_TRAIT_OPTIONS,
  GENRE_OPTIONS,
  PROPERTY_OPTIONS,
  SORT_OPTIONS,
  STATUS_OPTIONS,
} from "@/const/filter";
import { NovelFilters } from "@/type/filter";
import { Input } from "@workspace/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { useCallback, useState } from "react";
import { FilterSection } from "./filter-section";

interface NovelFiltersProps {
  onFilterChange?: (filters: NovelFilters) => void;
}

export function NovelFilter({ onFilterChange }: NovelFiltersProps) {
  const [filters, setFilters] = useState<NovelFilters>({
    status: [],
    properties: [],
    genres: [],
    chapterCount: [],
    characterTraits: [],
    search: "",
    sort: "",
  });

  const updateFilters = useCallback(
    (key: keyof NovelFilters, value: any) => {
      setFilters((prev) => {
        const newFilters = { ...prev };

        if (Array.isArray(newFilters[key])) {
          const array = newFilters[key] as string[];
          if (array.includes(value)) {
            newFilters[key] = array.filter((v) => v !== value) as any;
          } else {
            newFilters[key] = [...array, value] as any;
          }
        } else {
          newFilters[key] = value;
        }

        onFilterChange?.(newFilters);
        return newFilters;
      });
    },
    [onFilterChange]
  );

  return (
    <div className="space-y-6 p-6 bg-card rounded-lg border">
      {/* Thêm search và sort */}
      <div className="flex gap-4">
        {/* Ô tìm kiếm */}
        <Input
          placeholder="Tìm kiếm truyện..."
          value={filters.search}
          onChange={(e) => updateFilters("search", e.target.value)}
          className="flex-1"
        />

        {/* Ô chọn sắp xếp */}
        <Select
          value={filters.sort}
          onValueChange={(value) => updateFilters("sort", value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sắp xếp theo" />
          </SelectTrigger>
          <SelectContent>
            {SORT_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Các phần bộ lọc */}
      <FilterSection
        title="Tình trạng"
        options={STATUS_OPTIONS}
        selected={filters.status}
        onChange={(value) => updateFilters("status", value)}
      />

      <FilterSection
        title="Thuộc tính"
        options={PROPERTY_OPTIONS}
        selected={filters.properties}
        onChange={(value) => updateFilters("properties", value)}
      />

      <FilterSection
        title="Số chương"
        options={CHAPTER_COUNT_OPTIONS}
        selected={filters.chapterCount}
        onChange={(value) => updateFilters("chapterCount", value)}
      />

      <FilterSection
        title="Thể loại"
        options={GENRE_OPTIONS}
        selected={filters.genres}
        onChange={(value) => updateFilters("genres", value)}
      />

      <FilterSection
        title="Tính cách nhân vật chính"
        options={CHARACTER_TRAIT_OPTIONS}
        selected={filters.characterTraits}
        onChange={(value) => updateFilters("characterTraits", value)}
      />
    </div>
  );
}
