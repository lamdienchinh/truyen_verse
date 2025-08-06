export const ARTICLE_STATUS = {
  DRAFT: "draft",
  PUBLISHED: "published",
  ARCHIVED: "archived",
} as const;

export const ARTICLE_STATUS_LABELS = {
  [ARTICLE_STATUS.DRAFT]: "Bản nháp",
  [ARTICLE_STATUS.PUBLISHED]: "Đã xuất bản",
  [ARTICLE_STATUS.ARCHIVED]: "Đã lưu trữ",
} as const;

export const ARTICLE_STATUS_COLORS = {
  [ARTICLE_STATUS.DRAFT]: "text-yellow-600 bg-yellow-50 border-yellow-200",
  [ARTICLE_STATUS.PUBLISHED]: "text-green-600 bg-green-50 border-green-200",
  [ARTICLE_STATUS.ARCHIVED]: "text-gray-600 bg-gray-50 border-gray-200",
} as const;

export const DEFAULT_ARTICLE_FILTERS = {
  status: undefined,
  category: undefined,
  author: undefined,
  featured: undefined,
  dateFrom: undefined,
  dateTo: undefined,
  search: "",
};
