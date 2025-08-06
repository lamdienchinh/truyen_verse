"use client";

import { useState } from "react";
import { Transaction } from "../types/transaction";

export interface TransactionFilters {
  searchQuery: string;
  statusFilter: Transaction["status"] | "all";
  typeFilter: Transaction["type"] | "all";
  currencyFilter: Transaction["currency"] | "all";
}

export const DEFAULT_TRANSACTION_FILTERS: TransactionFilters = {
  searchQuery: "",
  statusFilter: "all",
  typeFilter: "all",
  currencyFilter: "all",
};

export function useTransactionFilters() {
  const [filters, setFilters] = useState<TransactionFilters>(
    DEFAULT_TRANSACTION_FILTERS
  );

  const updateFilter = <K extends keyof TransactionFilters>(
    key: K,
    value: TransactionFilters[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters(DEFAULT_TRANSACTION_FILTERS);
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
