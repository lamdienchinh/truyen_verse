"use client";

import {
  TransactionFilter,
  TransactionHeader,
  TransactionSection,
  TransactionStatsCards,
} from "@/features/transactions/components";
import { useTransactionFilters } from "@/features/transactions/hooks/use-transaction-filters";

export default function TransactionsPage() {
  const { filters, updateFilter, clearFilters, hasActiveFilters } =
    useTransactionFilters();

  return (
    <div className="flex flex-col gap-6 p-6">
      <TransactionHeader />
      <TransactionStatsCards />
      <TransactionFilter
        searchQuery={filters.searchQuery}
        onSearchChange={(value) => updateFilter("searchQuery", value)}
        statusFilter={filters.statusFilter}
        onStatusChange={(value) => updateFilter("statusFilter", value)}
        typeFilter={filters.typeFilter}
        onTypeChange={(value) => updateFilter("typeFilter", value)}
        currencyFilter={filters.currencyFilter}
        onCurrencyChange={(value) => updateFilter("currencyFilter", value)}
        hasActiveFilters={hasActiveFilters}
        onClearFilters={clearFilters}
      />
      <TransactionSection
        searchQuery={filters.searchQuery}
        statusFilter={
          filters.statusFilter === "all" ? undefined : filters.statusFilter
        }
        typeFilter={
          filters.typeFilter === "all" ? undefined : filters.typeFilter
        }
        currencyFilter={
          filters.currencyFilter === "all" ? undefined : filters.currencyFilter
        }
      />
    </div>
  );
}
