"use client";

import {
  UserFilter,
  UserHeader,
  UserSection,
  UserStatsCards,
} from "@/features/users/components";
import { useUserFilters } from "@/features/users/hooks/use-user-filters";

export default function UsersPage() {
  const { filters, updateFilter, clearFilters, hasActiveFilters } =
    useUserFilters();

  return (
    <div className="flex flex-col gap-6 p-6">
      {/* Header */}
      <UserHeader />

      {/* Stats Cards */}
      <UserStatsCards />

      {/* Filters */}
      <UserFilter
        searchQuery={filters.searchQuery}
        onSearchChange={(value) => updateFilter("searchQuery", value)}
        statusFilter={filters.statusFilter}
        onStatusChange={(value) => updateFilter("statusFilter", value)}
        roleFilter={filters.roleFilter}
        onRoleChange={(value) => updateFilter("roleFilter", value)}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
      />

      {/* Users Table */}
      <UserSection
        searchQuery={filters.searchQuery}
        statusFilter={
          filters.statusFilter === "all" ? undefined : filters.statusFilter
        }
        roleFilter={
          filters.roleFilter === "all" ? undefined : filters.roleFilter
        }
      />
    </div>
  );
}
