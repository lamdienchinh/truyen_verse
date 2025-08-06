export type TArticle = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  category: {
    id: string;
    name: string;
    slug: string;
  };
  tags: Array<{
    id: string;
    name: string;
  }>;
  status: "draft" | "published" | "archived";
  featured?: boolean;
  coverImage?: string;
  views: number;
  likes: number;
  comments: number;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export type TArticleFilters = {
  status?: TArticle["status"];
  category?: string;
  author?: string;
  featured?: boolean;
  dateFrom?: Date;
  dateTo?: Date;
  search?: string;
  page?: number;
  pageSize?: number;
};

export interface CreateArticleInput {
  title: string;
  content: string;
  excerpt: string;
  categoryId: string;
  tags: string[];
  status: TArticle["status"];
  coverImage?: string;
  slug?: string;
}

export interface UpdateArticleInput extends Partial<CreateArticleInput> {
  id: string;
}

export interface ArticleStats {
  total: number;
  published: number;
  draft: number;
  archived: number;
  totalViews: number;
  totalLikes: number;
  totalComments: number;
}
