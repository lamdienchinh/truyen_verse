"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ArticleStats,
  CreateArticleInput,
  TArticle,
  TArticleFilters,
  UpdateArticleInput,
} from "../types/article";

// Mock API functions - replace with real API calls
const mockArticles: TArticle[] = [
  {
    id: "1",
    title: "Hướng dẫn viết truyện hiệu quả",
    content: "Nội dung bài viết về cách viết truyện hiệu quả...",
    excerpt:
      "Những bí quyết để viết một câu truyện hấp dẫn và cuốn hút độc giả.",
    author: {
      id: "1",
      name: "Nguyễn Văn A",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    category: {
      id: "1",
      name: "Hướng dẫn",
      slug: "huong-dan",
    },
    tags: [
      { id: "1", name: "viết truyện" },
      { id: "2", name: "kỹ thuật" },
    ],
    status: "published",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=300&h=200&fit=crop",
    views: 1250,
    likes: 89,
    comments: 23,
    publishedAt: new Date("2024-01-15"),
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Xu hướng truyện năm 2024",
    content: "Phân tích các xu hướng truyện phổ biến trong năm 2024...",
    excerpt:
      "Khám phá những thể loại và phong cách viết truyện đang được yêu thích.",
    author: {
      id: "2",
      name: "Trần Thị B",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    },
    category: {
      id: "2",
      name: "Phân tích",
      slug: "phan-tich",
    },
    tags: [
      { id: "3", name: "xu hướng" },
      { id: "4", name: "2024" },
    ],
    status: "published",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
    views: 890,
    likes: 67,
    comments: 15,
    publishedAt: new Date("2024-02-01"),
    createdAt: new Date("2024-01-28"),
    updatedAt: new Date("2024-02-01"),
  },
];

const articleAPI = {
  getArticles: async (
    filters: TArticleFilters = {}
  ): Promise<{ data: TArticle[]; total: number }> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    let filteredArticles = [...mockArticles];

    if (filters.status) {
      filteredArticles = filteredArticles.filter(
        (article) => article.status === filters.status
      );
    }
    if (filters.featured !== undefined) {
      filteredArticles = filteredArticles.filter(
        (article) => article.featured === filters.featured
      );
    }
    if (filters.search) {
      filteredArticles = filteredArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(filters.search!.toLowerCase())
      );
    }

    return { data: filteredArticles, total: filteredArticles.length };
  },

  getArticle: async (id: string): Promise<TArticle> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const article = mockArticles.find((a) => a.id === id);
    if (!article) throw new Error("Article not found");
    return article;
  },

  createArticle: async (input: CreateArticleInput): Promise<TArticle> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const newArticle: TArticle = {
      id: String(mockArticles.length + 1),
      ...input,
      author: {
        id: "1",
        name: "Current User",
      },
      category: {
        id: input.categoryId,
        name: "Sample Category",
        slug: "sample-category",
      },
      tags: input.tags.map((tag, index) => ({ id: String(index), name: tag })),
      views: 0,
      likes: 0,
      comments: 0,
      publishedAt: input.status === "published" ? new Date() : undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return newArticle;
  },

  updateArticle: async (input: UpdateArticleInput): Promise<TArticle> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const existingArticle = mockArticles.find((a) => a.id === input.id);
    if (!existingArticle) throw new Error("Article not found");

    const updatedArticle: TArticle = {
      ...existingArticle,
      ...input,
      tags: input.tags
        ? input.tags.map((tag, index) => ({ id: String(index), name: tag }))
        : existingArticle.tags,
      category: input.categoryId
        ? {
            id: input.categoryId,
            name: "Updated Category",
            slug: "updated-category",
          }
        : existingArticle.category,
      updatedAt: new Date(),
    };

    return updatedArticle;
  },

  deleteArticle: async (id: string): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = mockArticles.findIndex((a) => a.id === id);
    if (index === -1) throw new Error("Article not found");
    mockArticles.splice(index, 1);
  },

  getStats: async (): Promise<ArticleStats> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return {
      total: mockArticles.length,
      published: mockArticles.filter((a) => a.status === "published").length,
      draft: mockArticles.filter((a) => a.status === "draft").length,
      archived: mockArticles.filter((a) => a.status === "archived").length,
      totalViews: mockArticles.reduce((sum, a) => sum + a.views, 0),
      totalLikes: mockArticles.reduce((sum, a) => sum + a.likes, 0),
      totalComments: mockArticles.reduce((sum, a) => sum + a.comments, 0),
    };
  },
};

export const useArticles = (filters: TArticleFilters = {}) => {
  return useQuery({
    queryKey: ["articles", filters],
    queryFn: () => articleAPI.getArticles(filters),
  });
};

export const useArticle = (id: string) => {
  return useQuery({
    queryKey: ["article", id],
    queryFn: () => articleAPI.getArticle(id),
    enabled: !!id,
  });
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: articleAPI.createArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["article-stats"] });
    },
  });
};

export const useUpdateArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: articleAPI.updateArticle,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["article", data.id] });
      queryClient.invalidateQueries({ queryKey: ["article-stats"] });
    },
  });
};

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: articleAPI.deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
      queryClient.invalidateQueries({ queryKey: ["article-stats"] });
    },
  });
};

export const useArticleStats = () => {
  return useQuery({
    queryKey: ["article-stats"],
    queryFn: articleAPI.getStats,
  });
};
