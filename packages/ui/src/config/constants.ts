// Global Constants
export const APP_CONFIG = {
  NAME: "Truyện Verse",
  DESCRIPTION:
    "Cộng động truyện chữ với vô vàn truyện cùng với cộng đồng đọc giả lớn, hoạt động sôi nổi",
  DEFAULT_LOCALE: "vi",
  PAGINATION: {
    DEFAULT_PAGE_SIZE: 10,
    DEFAULT_PAGE: 1,
  },
  TIMEOUTS: {
    DEFAULT_API: 5000,
    DEBOUNCE_SEARCH: 300,
  },
} as const;

export const QUERY_KEYS = {
  // Auth
  USER_PROFILE: "user-profile",

  // Dashboard
  USERS: "users",
  USER_STATS: "user-stats",
  USER: "user",
  ARTICLES: "articles",
  ARTICLE: "article",
  ARTICLE_STATS: "article-stats",
  TRANSACTIONS: "transactions",
  TRANSACTION_STATS: "transaction-stats",
  RECOMMENDATIONS: "recommendations",
  BOOKS: "books",
  REPORTS: "reports",
  SUPPORT: "support",
  STATS: "stats",
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
    FORGOT_PASSWORD: "/auth/forgot-password",
    VERIFY_OTP: "/otp/verify",
  },
  USERS: {
    PROFILE: "/users/profile",
    CHANGE_PASSWORD: "/users/change-password",
  },
} as const;

export const DEFAULT_FILTERS = {
  USER: {
    searchQuery: "",
    statusFilter: "all" as const,
    roleFilter: "all" as const,
  },
  TRANSACTION: {
    searchQuery: "",
    statusFilter: "all" as const,
    typeFilter: "all" as const,
    currencyFilter: "all" as const,
  },
  RECOMMENDATION: {
    searchQuery: "",
    categoryFilter: "all" as const,
    priorityFilter: "all" as const,
    statusFilter: "all" as const,
  },
  ARTICLE: {
    searchQuery: "",
    statusFilter: "all" as const,
    categoryFilter: "all" as const,
  },
} as const;
