import { useCallback, useState } from "react";

export interface BaseFilters {
  searchQuery: string;
  [key: string]: string | number | boolean | undefined;
}

export interface UseFiltersReturn<T extends BaseFilters> {
  filters: T;
  updateFilter: <K extends keyof T>(key: K, value: T[K]) => void;
  clearFilters: () => void;
  hasActiveFilters: boolean;
  resetFilter: <K extends keyof T>(key: K) => void;
  setMultipleFilters: (newFilters: Partial<T>) => void;
}

export function useFilters<T extends BaseFilters>(
  defaultFilters: T
): UseFiltersReturn<T> {
  const [filters, setFilters] = useState<T>(defaultFilters);

  const updateFilter = useCallback(<K extends keyof T>(key: K, value: T[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, [defaultFilters]);

  const resetFilter = useCallback(
    <K extends keyof T>(key: K) => {
      setFilters((prev) => ({ ...prev, [key]: defaultFilters[key] }));
    },
    [defaultFilters]
  );

  const setMultipleFilters = useCallback((newFilters: Partial<T>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
    const defaultValue = defaultFilters[key as keyof T];
    if (key === "searchQuery") return value !== "";
    return value !== defaultValue;
  });

  return {
    filters,
    updateFilter,
    clearFilters,
    hasActiveFilters,
    resetFilter,
    setMultipleFilters,
  };
}
