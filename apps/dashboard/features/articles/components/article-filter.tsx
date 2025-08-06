"use client";

import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Filter, Search, X } from "lucide-react";
import { useState } from "react";
import { DEFAULT_ARTICLE_FILTERS } from "../consts/article";
import { TArticleFilters } from "../types/article";

export function ArticleFilter() {
  const [filters, setFilters] = useState<TArticleFilters>(
    DEFAULT_ARTICLE_FILTERS
  );
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  const handleFilterChange = (
    key: keyof TArticleFilters,
    value?: string | boolean
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters(DEFAULT_ARTICLE_FILTERS);
  };

  const hasActiveFilters = Object.values(filters).some(
    (value) => value !== undefined && value !== "" && value !== null
  );
  return (
    <div>
      <div>
        <div className="flex items-center justify-between">
          <div className="text-lg font-semibold">Bộ lọc</div>
          <div className="flex items-center gap-2">
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={handleClearFilters}>
                <X className="w-4 h-4 mr-2" />
                Xóa bộ lọc
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
            >
              <Filter className="w-4 h-4 mr-2" />
              {showAdvancedFilters ? "Ẩn" : "Hiển thị"} bộ lọc nâng cao
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="search">Tìm kiếm</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="search"
                  placeholder="Tìm theo tiêu đề, nội dung..."
                  value={filters.search || ""}
                  onChange={(e) => handleFilterChange("search", e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="status">Trạng thái</Label>
              <Select
                value={filters.status || ""}
                onValueChange={(value) =>
                  handleFilterChange("status", value || undefined)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Tất cả trạng thái" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả trạng thái</SelectItem>
                  <SelectItem value="draft">Bản nháp</SelectItem>
                  <SelectItem value="published">Đã xuất bản</SelectItem>
                  <SelectItem value="archived">Đã lưu trữ</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="featured">Nổi bật</Label>
              <Select
                value={
                  filters.featured === undefined
                    ? ""
                    : filters.featured.toString()
                }
                onValueChange={(value) =>
                  handleFilterChange(
                    "featured",
                    value === "" ? undefined : value === "true"
                  )
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Tất cả" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tất cả</SelectItem>
                  <SelectItem value="true">Nổi bật</SelectItem>
                  <SelectItem value="false">Thường</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {showAdvancedFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <Label htmlFor="category">Danh mục</Label>
                <Select
                  value={filters.category || ""}
                  onValueChange={(value) =>
                    handleFilterChange("category", value || undefined)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Tất cả danh mục" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tất cả danh mục</SelectItem>
                    <SelectItem value="1">Hướng dẫn</SelectItem>
                    <SelectItem value="2">Phân tích</SelectItem>
                    <SelectItem value="3">Tin tức</SelectItem>
                    <SelectItem value="4">Review</SelectItem>
                    <SelectItem value="5">Thảo luận</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="author">Tác giả</Label>
                <Input
                  id="author"
                  placeholder="Tìm theo tên tác giả..."
                  value={filters.author || ""}
                  onChange={(e) => handleFilterChange("author", e.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
