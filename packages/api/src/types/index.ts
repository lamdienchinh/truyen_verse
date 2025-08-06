// API Types
export * from "./api.js";

// Common Types
export interface SelectOption<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface TableColumn<T> {
  id: string;
  label: string;
  accessor: keyof T | ((item: T) => any);
  sortable?: boolean;
  filterable?: boolean;
  width?: string | number;
  align?: "left" | "center" | "right";
}

export interface PaginationInfo {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
}

export interface SortInfo {
  field: string;
  direction: "asc" | "desc";
}

export interface FilterInfo {
  field: string;
  value: any;
  operator?:
    | "eq"
    | "ne"
    | "gt"
    | "gte"
    | "lt"
    | "lte"
    | "contains"
    | "startsWith"
    | "endsWith";
}

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  avatar?: string;
  role: "user" | "admin" | "moderator" | "author";
  status: "active" | "inactive" | "banned";
  emailVerified: boolean;
  phoneVerified: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

// Auth Types
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  agreeToTerms: boolean;
}

// Error Types
export interface ApiError {
  message: string;
  code?: string;
  field?: string;
  details?: any;
}

export interface ValidationError {
  field: string;
  message: string;
}

// Theme Types
export type Theme = "light" | "dark" | "system";

// Status Types
export type Status = "idle" | "loading" | "success" | "error";

// Common Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type KeyOf<T> = keyof T;
export type ValueOf<T> = T[keyof T];

// Function Types
export type EventHandler<T = void> = (event: T) => void;
export type AsyncEventHandler<T = void> = (event: T) => Promise<void>;
export type Callback<T = void> = () => T;
export type AsyncCallback<T = void> = () => Promise<T>;
