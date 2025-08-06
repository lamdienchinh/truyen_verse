export interface Recommendation {
  id: string;
  title: string;
  description: string;
  novel: {
    id: string;
    title: string;
    author: string;
    coverImage?: string;
    genre: string;
    status: "ongoing" | "completed" | "hiatus";
    rating: number;
    views: number;
  };
  priority: "high" | "medium" | "low";
  category: "daily" | "trending" | "featured" | "new_release" | "editor_choice";
  startDate: Date;
  endDate: Date;
  isActive: boolean;
  position: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface RecommendationFilters {
  category?: Recommendation["category"];
  priority?: Recommendation["priority"];
  isActive?: boolean;
  dateFrom?: Date;
  dateTo?: Date;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface CreateRecommendationInput {
  title: string;
  description: string;
  novelId: string;
  priority: Recommendation["priority"];
  category: Recommendation["category"];
  startDate: Date;
  endDate: Date;
  position?: number;
}

export interface UpdateRecommendationInput
  extends Partial<CreateRecommendationInput> {
  id: string;
  isActive?: boolean;
}

export interface RecommendationStats {
  total: number;
  active: number;
  inactive: number;
  byCategory: {
    daily: number;
    trending: number;
    featured: number;
    new_release: number;
    editor_choice: number;
  };
  byPriority: {
    high: number;
    medium: number;
    low: number;
  };
}
