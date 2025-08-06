import type { Recommendation } from "../types/recommendation";

export const RECOMMENDATION_CATEGORIES = {
  daily: "Đề xuất hàng ngày",
  trending: "Xu hướng",
  featured: "Nổi bật",
  new_release: "Mới phát hành",
  editor_choice: "Lựa chọn biên tập viên",
} as const;

export const RECOMMENDATION_PRIORITIES = {
  high: "Cao",
  medium: "Trung bình",
  low: "Thấp",
} as const;

export const PRIORITY_COLORS = {
  high: "bg-red-100 text-red-800",
  medium: "bg-yellow-100 text-yellow-800",
  low: "bg-green-100 text-green-800",
} as const;

export const CATEGORY_COLORS = {
  daily: "bg-blue-100 text-blue-800",
  trending: "bg-purple-100 text-purple-800",
  featured: "bg-orange-100 text-orange-800",
  new_release: "bg-green-100 text-green-800",
  editor_choice: "bg-pink-100 text-pink-800",
} as const;

export const DEFAULT_RECOMMENDATION_FILTERS: Required<
  Pick<Recommendation, "category" | "priority">
> & {
  isActive: boolean | undefined;
  search: string;
  page: number;
  pageSize: number;
} = {
  category: "daily",
  priority: "high",
  isActive: undefined,
  search: "",
  page: 1,
  pageSize: 10,
};
