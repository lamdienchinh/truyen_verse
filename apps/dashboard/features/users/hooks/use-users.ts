"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  CreateUserInput,
  UpdateUserInput,
  User,
  UserFilters,
  UserStats,
} from "../types/user";

// Mock data
const mockUsers: User[] = [
  {
    id: "user-1",
    username: "nguyenvana",
    email: "nguyenvana@example.com",
    displayName: "Nguyễn Văn A",
    avatar: "https://via.placeholder.com/64x64",
    phoneNumber: "+84123456789",
    dateOfBirth: new Date("1990-01-15"),
    gender: "male",
    status: "active",
    role: "user",
    emailVerified: true,
    phoneVerified: true,
    wallet: {
      balance: 150000,
      currency: "VND",
      totalSpent: 500000,
      totalEarned: 0,
      lockedAmount: 0,
    },
    preferences: {
      language: "vi",
      theme: "light",
      notifications: {
        email: true,
        push: true,
        newChapter: true,
        promotions: false,
        comments: true,
      },
      privacy: {
        showProfile: true,
        showReadingHistory: false,
        showFavorites: true,
      },
    },
    statistics: {
      chaptersRead: 245,
      favoriteNovels: 12,
      commentsCount: 34,
      reviewsCount: 8,
      totalReadingTime: 1250,
      averageRating: 4.2,
      joinedDays: 365,
    },
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2024-01-15"),
    lastLoginAt: new Date("2024-01-14"),
  },
  {
    id: "user-2",
    username: "lethib",
    email: "lethib@example.com",
    displayName: "Lê Thị B",
    status: "active",
    role: "author",
    emailVerified: true,
    phoneVerified: false,
    wallet: {
      balance: 2500000,
      currency: "VND",
      totalSpent: 100000,
      totalEarned: 3000000,
      lockedAmount: 500000,
    },
    preferences: {
      language: "vi",
      theme: "dark",
      notifications: {
        email: true,
        push: true,
        newChapter: false,
        promotions: true,
        comments: true,
      },
      privacy: {
        showProfile: true,
        showReadingHistory: true,
        showFavorites: true,
      },
    },
    statistics: {
      chaptersRead: 89,
      favoriteNovels: 5,
      commentsCount: 156,
      reviewsCount: 23,
      totalReadingTime: 450,
      averageRating: 4.8,
      joinedDays: 180,
    },
    createdAt: new Date("2023-07-01"),
    updatedAt: new Date("2024-01-10"),
    lastLoginAt: new Date("2024-01-13"),
  },
  {
    id: "user-3",
    username: "tranvanc",
    email: "tranvanc@example.com",
    displayName: "Trần Văn C",
    status: "banned",
    role: "user",
    emailVerified: false,
    phoneVerified: false,
    wallet: {
      balance: 0,
      currency: "VND",
      totalSpent: 50000,
      totalEarned: 0,
      lockedAmount: 0,
    },
    preferences: {
      language: "vi",
      theme: "system",
      notifications: {
        email: false,
        push: false,
        newChapter: false,
        promotions: false,
        comments: false,
      },
      privacy: {
        showProfile: false,
        showReadingHistory: false,
        showFavorites: false,
      },
    },
    statistics: {
      chaptersRead: 15,
      favoriteNovels: 2,
      commentsCount: 3,
      reviewsCount: 0,
      totalReadingTime: 85,
      averageRating: 3.5,
      joinedDays: 30,
    },
    createdAt: new Date("2023-12-01"),
    updatedAt: new Date("2023-12-15"),
    lastLoginAt: new Date("2023-12-10"),
  },
];

const mockStats: UserStats = {
  total: 1250,
  active: 1180,
  inactive: 45,
  banned: 25,
  byRole: {
    user: 1100,
    author: 120,
    moderator: 25,
    admin: 5,
  },
  byCurrency: {
    VND: 1200,
    USD: 35,
    EUR: 15,
  },
  totalWalletBalance: {
    VND: 125000000,
    USD: 8500,
    EUR: 3200,
  },
};

export function useUsers(filters?: UserFilters) {
  return useQuery({
    queryKey: ["users", filters],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let filteredUsers = [...mockUsers];

      if (filters?.status) {
        filteredUsers = filteredUsers.filter(
          (user) => user.status === filters.status
        );
      }

      if (filters?.role) {
        filteredUsers = filteredUsers.filter(
          (user) => user.role === filters.role
        );
      }

      if (filters?.emailVerified !== undefined) {
        filteredUsers = filteredUsers.filter(
          (user) => user.emailVerified === filters.emailVerified
        );
      }

      if (filters?.phoneVerified !== undefined) {
        filteredUsers = filteredUsers.filter(
          (user) => user.phoneVerified === filters.phoneVerified
        );
      }

      if (filters?.currency) {
        filteredUsers = filteredUsers.filter(
          (user) => user.wallet.currency === filters.currency
        );
      }

      if (filters?.search) {
        const searchLower = filters.search.toLowerCase();
        filteredUsers = filteredUsers.filter(
          (user) =>
            user.username.toLowerCase().includes(searchLower) ||
            user.email.toLowerCase().includes(searchLower) ||
            user.displayName.toLowerCase().includes(searchLower)
        );
      }

      const page = filters?.page || 1;
      const pageSize = filters?.pageSize || 10;
      const start = (page - 1) * pageSize;
      const end = start + pageSize;

      return {
        data: filteredUsers.slice(start, end),
        total: filteredUsers.length,
        page,
        pageSize,
        totalPages: Math.ceil(filteredUsers.length / pageSize),
      };
    },
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateUserInput) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newUser: User = {
        id: `user-${Date.now()}`,
        username: input.username,
        email: input.email,
        displayName: input.displayName,
        status: "pending",
        role: input.role || "user",
        emailVerified: false,
        phoneVerified: false,
        wallet: {
          balance: 0,
          currency: input.currency || "VND",
          totalSpent: 0,
          totalEarned: 0,
          lockedAmount: 0,
        },
        preferences: {
          language: "vi",
          theme: "system",
          notifications: {
            email: true,
            push: true,
            newChapter: true,
            promotions: false,
            comments: true,
          },
          privacy: {
            showProfile: true,
            showReadingHistory: false,
            showFavorites: true,
          },
        },
        statistics: {
          chaptersRead: 0,
          favoriteNovels: 0,
          commentsCount: 0,
          reviewsCount: 0,
          totalReadingTime: 0,
          averageRating: 0,
          joinedDays: 0,
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return newUser;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user-stats"] });
    },
  });
}

export function useUpdateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: UpdateUserInput) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return input;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user-stats"] });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user-stats"] });
    },
  });
}

export function useUserStats() {
  return useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockStats;
    },
  });
}

export function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockUsers.find((user) => user.id === id) || null;
    },
    enabled: !!id,
  });
}
