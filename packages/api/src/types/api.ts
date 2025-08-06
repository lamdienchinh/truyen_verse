import { AxiosResponse } from "axios";

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseFilters {
  page?: number;
  pageSize?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export abstract class BaseApiService<
  T extends BaseEntity,
  TFilters extends BaseFilters = BaseFilters,
> {
  protected abstract baseEndpoint: string;

  abstract getAll(
    filters?: TFilters
  ): Promise<AxiosResponse<PaginatedResponse<T>>>;
  abstract getById(id: string): Promise<AxiosResponse<T>>;
  abstract create(data: Omit<T, keyof BaseEntity>): Promise<AxiosResponse<T>>;
  abstract update(
    id: string,
    data: Partial<Omit<T, keyof BaseEntity>>
  ): Promise<AxiosResponse<T>>;
  abstract delete(id: string): Promise<AxiosResponse<void>>;

  protected buildQueryString(filters?: TFilters): string {
    if (!filters) return "";

    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.append(key, String(value));
      }
    });

    return params.toString() ? `?${params.toString()}` : "";
  }
}

export interface UseBaseQueryOptions<TFilters> {
  filters?: TFilters;
  enabled?: boolean;
  refetchOnWindowFocus?: boolean;
  staleTime?: number;
}

export interface UseMutationCallbacks<TData = unknown, TError = Error> {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
  onSettled?: (data: TData | undefined, error: TError | null) => void;
}
