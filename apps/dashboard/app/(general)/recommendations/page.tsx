"use client";

import {
  RecommendationFilter,
  RecommendationHeader,
  RecommendationSection,
  RecommendationStatsCards,
} from "@/features/recommendations/components";
import { useRecommendationFilters } from "@/features/recommendations/hooks/use-recommendation-filters";
import { useRecommendations } from "@/features/recommendations/hooks/use-recommendations";
import type { Recommendation } from "@/features/recommendations/types/recommendation";

export default function RecommendationsPage() {
  const { filters, updateFilter, clearFilters, hasActiveFilters } =
    useRecommendationFilters();

  const { data, isLoading } = useRecommendations({
    search: filters.searchQuery,
    category:
      filters.categoryFilter === "all"
        ? undefined
        : (filters.categoryFilter as Recommendation["category"]),
    priority:
      filters.priorityFilter === "all"
        ? undefined
        : (filters.priorityFilter as Recommendation["priority"]),
    isActive:
      filters.statusFilter === "all"
        ? undefined
        : filters.statusFilter === "active",
    page: 1,
    pageSize: 10,
  });

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <RecommendationHeader />

      {/* Stats Cards */}
      <RecommendationStatsCards />

      {/* Filters */}
      <RecommendationFilter
        searchQuery={filters.searchQuery}
        onSearchChange={(value) => updateFilter("searchQuery", value)}
        categoryFilter={filters.categoryFilter}
        onCategoryChange={(value) => updateFilter("categoryFilter", value)}
        priorityFilter={filters.priorityFilter}
        onPriorityChange={(value) => updateFilter("priorityFilter", value)}
        statusFilter={filters.statusFilter}
        onStatusChange={(value) => updateFilter("statusFilter", value)}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
      />

      {/* Recommendations Table */}
      <RecommendationSection
        recommendations={data?.data || []}
        isLoading={isLoading}
      />
    </div>
  );
}
