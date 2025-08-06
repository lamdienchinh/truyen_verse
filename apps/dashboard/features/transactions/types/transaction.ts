export interface Transaction {
  id: string;
  user: {
    id: string;
    username: string;
    displayName: string;
    email: string;
  };
  type: "purchase" | "refund" | "deposit" | "withdrawal" | "reward" | "penalty";
  category:
    | "chapter"
    | "novel"
    | "subscription"
    | "gift"
    | "promotion"
    | "system";
  status: "pending" | "completed" | "failed" | "cancelled" | "refunded";
  amount: number;
  currency: "VND" | "USD" | "EUR";
  exchangeRate?: number; // Rate if currency conversion occurred
  originalAmount?: number; // Original amount in user's currency
  originalCurrency?: "VND" | "USD" | "EUR";
  description: string;
  reference?: TransactionReference;
  paymentMethod?:
    | "wallet"
    | "credit_card"
    | "bank_transfer"
    | "paypal"
    | "momo"
    | "zalopay";
  gateway?: {
    provider: string;
    transactionId: string;
    fee?: number;
  };
  metadata?: Record<string, string | number | boolean>;
  createdAt: Date;
  updatedAt: Date;
  completedAt?: Date;
  refundedAt?: Date;
}

export interface TransactionReference {
  type: "chapter" | "novel" | "subscription" | "user";
  id: string;
  title?: string;
  chapterNumber?: number;
  novelTitle?: string;
  authorName?: string;
}

export interface TransactionFilters {
  type?: Transaction["type"];
  category?: Transaction["category"];
  status?: Transaction["status"];
  currency?: Transaction["currency"];
  paymentMethod?: Transaction["paymentMethod"];
  userId?: string;
  amountFrom?: number;
  amountTo?: number;
  dateFrom?: Date;
  dateTo?: Date;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface CreateTransactionInput {
  userId: string;
  type: Transaction["type"];
  category: Transaction["category"];
  amount: number;
  currency: Transaction["currency"];
  description: string;
  reference?: TransactionReference;
  paymentMethod?: Transaction["paymentMethod"];
  metadata?: Record<string, string | number | boolean>;
}

export interface UpdateTransactionInput
  extends Partial<CreateTransactionInput> {
  id: string;
  status?: Transaction["status"];
}

export interface TransactionStats {
  total: number;
  byStatus: {
    pending: number;
    completed: number;
    failed: number;
    cancelled: number;
    refunded: number;
  };
  byType: {
    purchase: number;
    refund: number;
    deposit: number;
    withdrawal: number;
    reward: number;
    penalty: number;
  };
  byCategory: {
    chapter: number;
    novel: number;
    subscription: number;
    gift: number;
    promotion: number;
    system: number;
  };
  revenue: {
    total: number;
    thisMonth: number;
    lastMonth: number;
    growth: number; // percentage
  };
  volume: {
    VND: number;
    USD: number;
    EUR: number;
  };
}

export interface ChapterPurchase {
  id: string;
  user: {
    id: string;
    username: string;
    displayName: string;
  };
  novel: {
    id: string;
    title: string;
    author: string;
  };
  chapter: {
    id: string;
    title: string;
    number: number;
    price: number;
    currency: string;
  };
  transactionId: string;
  purchasePrice: number;
  currency: string;
  discount?: {
    type: "percentage" | "fixed";
    value: number;
    reason: string;
  };
  status: "active" | "expired" | "refunded";
  purchasedAt: Date;
  expiresAt?: Date;
}
