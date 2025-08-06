"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  ChapterPurchase,
  CreateTransactionInput,
  Transaction,
  TransactionFilters,
  TransactionStats,
  UpdateTransactionInput,
} from "../types/transaction";

// Mock data
const mockTransactions: Transaction[] = [
  {
    id: "tx-1",
    user: {
      id: "user-1",
      username: "nguyenvana",
      displayName: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
    },
    type: "purchase",
    category: "chapter",
    status: "completed",
    amount: 5000,
    currency: "VND",
    description: "Mua chương 15 - Kiếm Hiệp Giang Hồ",
    reference: {
      type: "chapter",
      id: "chapter-15",
      title: "Trận chiến cuối cùng",
      chapterNumber: 15,
      novelTitle: "Kiếm Hiệp Giang Hồ",
      authorName: "Tác giả A",
    },
    paymentMethod: "wallet",
    createdAt: new Date("2024-01-15T10:30:00"),
    updatedAt: new Date("2024-01-15T10:30:05"),
    completedAt: new Date("2024-01-15T10:30:05"),
  },
  {
    id: "tx-2",
    user: {
      id: "user-1",
      username: "nguyenvana",
      displayName: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
    },
    type: "deposit",
    category: "system",
    status: "completed",
    amount: 100000,
    currency: "VND",
    description: "Nạp tiền vào ví",
    paymentMethod: "momo",
    gateway: {
      provider: "MoMo",
      transactionId: "MOMO123456789",
      fee: 2000,
    },
    createdAt: new Date("2024-01-14T15:20:00"),
    updatedAt: new Date("2024-01-14T15:22:30"),
    completedAt: new Date("2024-01-14T15:22:30"),
  },
  {
    id: "tx-3",
    user: {
      id: "user-2",
      username: "lethib",
      displayName: "Lê Thị B",
      email: "lethib@example.com",
    },
    type: "reward",
    category: "system",
    status: "completed",
    amount: 50000,
    currency: "VND",
    description: "Thưởng cho tác giả - Doanh thu tháng 1",
    reference: {
      type: "user",
      id: "user-2",
    },
    paymentMethod: "wallet",
    createdAt: new Date("2024-01-13T09:00:00"),
    updatedAt: new Date("2024-01-13T09:00:05"),
    completedAt: new Date("2024-01-13T09:00:05"),
  },
  {
    id: "tx-4",
    user: {
      id: "user-3",
      username: "tranvanc",
      displayName: "Trần Văn C",
      email: "tranvanc@example.com",
    },
    type: "purchase",
    category: "chapter",
    status: "failed",
    amount: 3000,
    currency: "VND",
    description: "Mua chương 8 - Tu Tiên Hiện Đại",
    reference: {
      type: "chapter",
      id: "chapter-8",
      title: "Đột phá cảnh giới",
      chapterNumber: 8,
      novelTitle: "Tu Tiên Hiện Đại",
      authorName: "Tác giả B",
    },
    paymentMethod: "wallet",
    createdAt: new Date("2024-01-12T14:45:00"),
    updatedAt: new Date("2024-01-12T14:45:10"),
  },
  {
    id: "tx-5",
    user: {
      id: "user-1",
      username: "nguyenvana",
      displayName: "Nguyễn Văn A",
      email: "nguyenvana@example.com",
    },
    type: "refund",
    category: "chapter",
    status: "completed",
    amount: 4000,
    currency: "VND",
    description: "Hoàn tiền chương 12 - Lỗi hệ thống",
    reference: {
      type: "chapter",
      id: "chapter-12",
      title: "Bí mật được tiết lộ",
      chapterNumber: 12,
      novelTitle: "Huyền Huyễn Thế Giới",
      authorName: "Tác giả C",
    },
    paymentMethod: "wallet",
    createdAt: new Date("2024-01-11T11:15:00"),
    updatedAt: new Date("2024-01-11T11:20:00"),
    completedAt: new Date("2024-01-11T11:20:00"),
    refundedAt: new Date("2024-01-11T11:20:00"),
  },
];

const mockChapterPurchases: ChapterPurchase[] = [
  {
    id: "cp-1",
    user: {
      id: "user-1",
      username: "nguyenvana",
      displayName: "Nguyễn Văn A",
    },
    novel: {
      id: "novel-1",
      title: "Kiếm Hiệp Giang Hồ",
      author: "Tác giả A",
    },
    chapter: {
      id: "chapter-15",
      title: "Trận chiến cuối cùng",
      number: 15,
      price: 5000,
      currency: "VND",
    },
    transactionId: "tx-1",
    purchasePrice: 5000,
    currency: "VND",
    status: "active",
    purchasedAt: new Date("2024-01-15T10:30:05"),
  },
];

const mockStats: TransactionStats = {
  total: 15234,
  byStatus: {
    pending: 245,
    completed: 14156,
    failed: 678,
    cancelled: 123,
    refunded: 32,
  },
  byType: {
    purchase: 12456,
    refund: 234,
    deposit: 1876,
    withdrawal: 456,
    reward: 178,
    penalty: 34,
  },
  byCategory: {
    chapter: 11567,
    novel: 234,
    subscription: 876,
    gift: 145,
    promotion: 2234,
    system: 178,
  },
  revenue: {
    total: 125000000,
    thisMonth: 15000000,
    lastMonth: 12000000,
    growth: 25.0,
  },
  volume: {
    VND: 120000000,
    USD: 3500,
    EUR: 1200,
  },
};

export function useTransactions(filters?: TransactionFilters) {
  return useQuery({
    queryKey: ["transactions", filters],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let filteredTransactions = [...mockTransactions];

      if (filters?.type) {
        filteredTransactions = filteredTransactions.filter(
          (tx) => tx.type === filters.type
        );
      }

      if (filters?.category) {
        filteredTransactions = filteredTransactions.filter(
          (tx) => tx.category === filters.category
        );
      }

      if (filters?.status) {
        filteredTransactions = filteredTransactions.filter(
          (tx) => tx.status === filters.status
        );
      }

      if (filters?.currency) {
        filteredTransactions = filteredTransactions.filter(
          (tx) => tx.currency === filters.currency
        );
      }

      if (filters?.paymentMethod) {
        filteredTransactions = filteredTransactions.filter(
          (tx) => tx.paymentMethod === filters.paymentMethod
        );
      }

      if (filters?.userId) {
        filteredTransactions = filteredTransactions.filter(
          (tx) => tx.user.id === filters.userId
        );
      }

      if (filters?.search) {
        const searchLower = filters.search.toLowerCase();
        filteredTransactions = filteredTransactions.filter(
          (tx) =>
            tx.description.toLowerCase().includes(searchLower) ||
            tx.user.username.toLowerCase().includes(searchLower) ||
            tx.user.displayName.toLowerCase().includes(searchLower) ||
            tx.id.toLowerCase().includes(searchLower)
        );
      }

      const page = filters?.page || 1;
      const pageSize = filters?.pageSize || 10;
      const start = (page - 1) * pageSize;
      const end = start + pageSize;

      return {
        data: filteredTransactions.slice(start, end),
        total: filteredTransactions.length,
        page,
        pageSize,
        totalPages: Math.ceil(filteredTransactions.length / pageSize),
      };
    },
  });
}

export function useCreateTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateTransactionInput) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newTransaction: Transaction = {
        id: `tx-${Date.now()}`,
        user: {
          id: input.userId,
          username: "unknown",
          displayName: "Unknown User",
          email: "unknown@example.com",
        },
        type: input.type,
        category: input.category,
        status: "pending",
        amount: input.amount,
        currency: input.currency,
        description: input.description,
        reference: input.reference,
        paymentMethod: input.paymentMethod,
        metadata: input.metadata,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return newTransaction;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["transaction-stats"] });
    },
  });
}

export function useUpdateTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: UpdateTransactionInput) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return input;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["transaction-stats"] });
    },
  });
}

export function useTransactionStats() {
  return useQuery({
    queryKey: ["transaction-stats"],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockStats;
    },
  });
}

export function useChapterPurchases(filters?: {
  userId?: string;
  novelId?: string;
}) {
  return useQuery({
    queryKey: ["chapter-purchases", filters],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));

      let filteredPurchases = [...mockChapterPurchases];

      if (filters?.userId) {
        filteredPurchases = filteredPurchases.filter(
          (cp) => cp.user.id === filters.userId
        );
      }

      if (filters?.novelId) {
        filteredPurchases = filteredPurchases.filter(
          (cp) => cp.novel.id === filters.novelId
        );
      }

      return filteredPurchases;
    },
  });
}

export function useTransaction(id: string) {
  return useQuery({
    queryKey: ["transaction", id],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockTransactions.find((tx) => tx.id === id) || null;
    },
    enabled: !!id,
  });
}
