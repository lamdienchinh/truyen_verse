"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  CreateRecommendationInput,
  Recommendation,
  RecommendationFilters,
  RecommendationStats,
  UpdateRecommendationInput,
} from "../types/recommendation";

const mockRecommendations: Recommendation[] = [
  {
    id: "1",
    title: "Truyện hay nhất tuần",
    description: "Những tác phẩm được yêu thích nhất trong tuần qua",
    novel: {
      id: "novel-1",
      title: "Kiếm Hiệp Giang Hồ",
      author: "Tác giả A",
      coverImage: "https://via.placeholder.com/150x200",
      genre: "Kiếm hiệp",
      status: "ongoing",
      rating: 4.8,
      views: 125000,
    },
    priority: "high",
    category: "daily",
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-31"),
    isActive: true,
    position: 1,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
  },
  {
    id: "2",
    title: "Xu hướng mới",
    description: "Truyện đang hot trên cộng đồng",
    novel: {
      id: "novel-2",
      title: "Tu Tiên Hiện Đại",
      author: "Tác giả B",
      coverImage: "https://via.placeholder.com/150x200",
      genre: "Tu tiên",
      status: "ongoing",
      rating: 4.6,
      views: 98000,
    },
    priority: "medium",
    category: "trending",
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-02-28"),
    isActive: true,
    position: 2,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-01"),
  },
  {
    id: "3",
    title: "Lựa chọn biên tập viên",
    description: "Những tác phẩm được biên tập viên đề xuất",
    novel: {
      id: "novel-3",
      title: "Huyền Huyễn Thế Giới",
      author: "Tác giả C",
      coverImage: "https://via.placeholder.com/150x200",
      genre: "Huyền huyễn",
      status: "completed",
      rating: 4.9,
      views: 200000,
    },
    priority: "high",
    category: "editor_choice",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-31"),
    isActive: false,
    position: 1,
    createdAt: new Date("2024-03-01"),
    updatedAt: new Date("2024-03-01"),
  },
];

const mockStats: RecommendationStats = {
  total: 15,
  active: 12,
  inactive: 3,
  byCategory: {
    daily: 5,
    trending: 3,
    featured: 2,
    new_release: 3,
    editor_choice: 2,
  },
  byPriority: {
    high: 6,
    medium: 7,
    low: 2,
  },
};

const mockNovels = [
  {
    id: "novel-1",
    title: "Kiếm Hiệp Giang Hồ",
    author: "Tác giả A",
    genre: "Kiếm hiệp",
    status: "ongoing" as const,
    rating: 4.8,
    views: 125000,
  },
  {
    id: "novel-2",
    title: "Tu Tiên Hiện Đại",
    author: "Tác giả B",
    genre: "Tu tiên",
    status: "ongoing" as const,
    rating: 4.6,
    views: 98000,
  },
  {
    id: "novel-3",
    title: "Huyền Huyễn Thế Giới",
    author: "Tác giả C",
    genre: "Huyền huyễn",
    status: "completed" as const,
    rating: 4.9,
    views: 200000,
  },
  {
    id: "novel-4",
    title: "Đô Thị Dị Năng",
    author: "Tác giả D",
    genre: "Dị năng",
    status: "ongoing" as const,
    rating: 4.5,
    views: 75000,
  },
  {
    id: "novel-5",
    title: "Lịch Sử Giả Tưởng",
    author: "Tác giả E",
    genre: "Lịch sử",
    status: "hiatus" as const,
    rating: 4.3,
    views: 50000,
  },
];

export function useRecommendations(filters?: RecommendationFilters) {
  return useQuery({
    queryKey: ["recommendations", filters],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let filteredRecommendations = [...mockRecommendations];

      if (filters?.category) {
        filteredRecommendations = filteredRecommendations.filter(
          (rec) => rec.category === filters.category
        );
      }

      if (filters?.priority) {
        filteredRecommendations = filteredRecommendations.filter(
          (rec) => rec.priority === filters.priority
        );
      }

      if (filters?.isActive !== undefined) {
        filteredRecommendations = filteredRecommendations.filter(
          (rec) => rec.isActive === filters.isActive
        );
      }

      if (filters?.search) {
        const searchLower = filters.search.toLowerCase();
        filteredRecommendations = filteredRecommendations.filter(
          (rec) =>
            rec.title.toLowerCase().includes(searchLower) ||
            rec.description.toLowerCase().includes(searchLower) ||
            rec.novel.title.toLowerCase().includes(searchLower)
        );
      }

      const page = filters?.page || 1;
      const pageSize = filters?.pageSize || 10;
      const start = (page - 1) * pageSize;
      const end = start + pageSize;

      return {
        data: filteredRecommendations.slice(start, end),
        total: filteredRecommendations.length,
        page,
        pageSize,
        totalPages: Math.ceil(filteredRecommendations.length / pageSize),
      };
    },
  });
}

export function useCreateRecommendation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: CreateRecommendationInput) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const newRecommendation: Recommendation = {
        id: `rec-${Date.now()}`,
        ...input,
        novel: mockNovels.find((n) => n.id === input.novelId) || {
          id: input.novelId,
          title: "Unknown Novel",
          author: "Unknown Author",
          genre: "Unknown",
          status: "ongoing",
          rating: 0,
          views: 0,
        },
        isActive: true,
        position: input.position || 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      return newRecommendation;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recommendations"] });
      queryClient.invalidateQueries({ queryKey: ["recommendation-stats"] });
    },
  });
}

export function useUpdateRecommendation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (input: UpdateRecommendationInput) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return input;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recommendations"] });
      queryClient.invalidateQueries({ queryKey: ["recommendation-stats"] });
    },
  });
}

export function useDeleteRecommendation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["recommendations"] });
      queryClient.invalidateQueries({ queryKey: ["recommendation-stats"] });
    },
  });
}

export function useRecommendationStats() {
  return useQuery({
    queryKey: ["recommendation-stats"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockStats;
    },
  });
}

export function useNovels() {
  return useQuery({
    queryKey: ["novels-for-recommendation"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      return mockNovels;
    },
  });
}
