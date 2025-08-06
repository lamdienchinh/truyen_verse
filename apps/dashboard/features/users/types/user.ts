export interface User {
  id: string;
  username: string;
  email: string;
  displayName: string;
  name?: string;
  avatar?: string;
  phoneNumber?: string;
  dateOfBirth?: Date;
  gender?: "male" | "female" | "other";
  status: "active" | "inactive" | "banned" | "pending";
  role: "user" | "author" | "moderator" | "admin";
  emailVerified: boolean;
  phoneVerified: boolean;
  wallet: UserWallet;
  preferences: UserPreferences;
  statistics: UserStatistics;
  createdAt: Date;
  updatedAt: Date;
  lastLoginAt?: Date;
}

export interface UserWallet {
  balance: number;
  currency: "VND" | "USD" | "EUR";
  totalSpent: number;
  totalEarned: number;
  lockedAmount: number;
}

export interface UserPreferences {
  language: "vi" | "en";
  theme: "light" | "dark" | "system";
  notifications: {
    email: boolean;
    push: boolean;
    newChapter: boolean;
    promotions: boolean;
    comments: boolean;
  };
  privacy: {
    showProfile: boolean;
    showReadingHistory: boolean;
    showFavorites: boolean;
  };
}

export interface UserStatistics {
  chaptersRead: number;
  favoriteNovels: number;
  commentsCount: number;
  reviewsCount: number;
  totalReadingTime: number; // in minutes
  averageRating: number;
  joinedDays: number;
}

export interface UserFilters {
  status?: User["status"];
  role?: User["role"];
  emailVerified?: boolean;
  phoneVerified?: boolean;
  currency?: UserWallet["currency"];
  dateFrom?: Date;
  dateTo?: Date;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface CreateUserInput {
  username: string;
  email: string;
  password: string;
  displayName: string;
  role?: User["role"];
  currency?: UserWallet["currency"];
}

export interface UpdateUserInput extends Partial<CreateUserInput> {
  id: string;
  status?: User["status"];
  emailVerified?: boolean;
  phoneVerified?: boolean;
  wallet?: Partial<UserWallet>;
}

export interface UserStats {
  total: number;
  active: number;
  inactive: number;
  banned: number;
  byRole: {
    user: number;
    author: number;
    moderator: number;
    admin: number;
  };
  byCurrency: {
    VND: number;
    USD: number;
    EUR: number;
  };
  totalWalletBalance: {
    VND: number;
    USD: number;
    EUR: number;
  };
}
