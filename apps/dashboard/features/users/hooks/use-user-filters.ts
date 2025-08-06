"use client";
import { DEFAULT_FILTERS } from "@workspace/api/config/index";
import { useFilters } from "@workspace/api/hooks/use-filters";
import { User } from "../types/user";
export interface UserFilters {
  searchQuery: string;
  statusFilter: User["status"] | "all";
  roleFilter: User["role"] | "all";
  [key: string]: string | undefined;
}

export function useUserFilters() {
  return useFilters<UserFilters>(DEFAULT_FILTERS.USER);
}
