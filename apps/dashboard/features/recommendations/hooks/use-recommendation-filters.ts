"use client";

import { useState } from "react";

export interface RecommendationFilters {
  searchQuery: string;
  categoryFilter: string;
  priorityFilter: string;
  statusFilter: string;
}

export const DEFAULT_RECOMMENDATION_FILTERS: RecommendationFilters = {
  searchQuery: "",
  categoryFilter: "all",
  priorityFilter: "all",
  statusFilter: "all",
};

export function useRecommendationFilters() {
  const [filters, setFilters] = useState<RecommendationFilters>(
    DEFAULT_RECOMMENDATION_FILTERS
  );

  const updateFilter = <K extends keyof RecommendationFilters>(
    key: K,
    value: RecommendationFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters(DEFAULT_RECOMMENDATION_FILTERS);
  };

  const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
    if (key === "searchQuery") return value !== "";
    return value !== "all";
  });

  return {
    filters,
    updateFilter,
    clearFilters,
    hasActiveFilters,
  };
}
