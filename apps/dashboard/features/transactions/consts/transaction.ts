import type { Transaction } from "../types/transaction";

export const TRANSACTION_TYPES = {
  purchase: "Mua hàng",
  refund: "Hoàn tiền",
  deposit: "Nạp tiền",
  withdrawal: "Rút tiền",
  reward: "Thưởng",
  penalty: "Phạt",
} as const;

export const TRANSACTION_CATEGORIES = {
  chapter: "Mua chương",
  novel: "Mua truyện",
  subscription: "Đăng ký",
  gift: "Quà tặng",
  promotion: "Khuyến mãi",
  system: "Hệ thống",
} as const;

export const TRANSACTION_STATUSES = {
  pending: "Đang xử lý",
  completed: "Hoàn thành",
  failed: "Thất bại",
  cancelled: "Đã hủy",
  refunded: "Đã hoàn tiền",
} as const;

export const PAYMENT_METHODS = {
  wallet: "Ví điện tử",
  credit_card: "Thẻ tín dụng",
  bank_transfer: "Chuyển khoản ngân hàng",
  paypal: "PayPal",
  momo: "MoMo",
  zalopay: "ZaloPay",
} as const;

export const CURRENCIES = {
  VND: "Vietnamese Dong",
  USD: "US Dollar",
  EUR: "Euro",
} as const;

export const CURRENCY_SYMBOLS = {
  VND: "₫",
  USD: "$",
  EUR: "€",
} as const;

// UI Mapping objects
export const TRANSACTION_TYPE_MAP = TRANSACTION_TYPES;
export const TRANSACTION_STATUS_MAP = {
  pending: {
    label: "Đang xử lý",
    variant: "secondary",
    className: "bg-yellow-100 text-yellow-800",
  },
  completed: {
    label: "Hoàn thành",
    variant: "default",
    className: "bg-green-100 text-green-800",
  },
  failed: {
    label: "Thất bại",
    variant: "destructive",
    className: "bg-red-100 text-red-800",
  },
  cancelled: {
    label: "Đã hủy",
    variant: "outline",
    className: "bg-gray-100 text-gray-800",
  },
  refunded: {
    label: "Đã hoàn tiền",
    variant: "secondary",
    className: "bg-orange-100 text-orange-800",
  },
} as const;

export const PAYMENT_METHOD_MAP = PAYMENT_METHODS;
export const CURRENCY_MAP = {
  VND: { symbol: "₫", name: "Vietnamese Dong" },
  USD: { symbol: "$", name: "US Dollar" },
  EUR: { symbol: "€", name: "Euro" },
} as const;

export const TYPE_COLORS = {
  purchase: "bg-blue-100 text-blue-800",
  refund: "bg-orange-100 text-orange-800",
  deposit: "bg-green-100 text-green-800",
  withdrawal: "bg-red-100 text-red-800",
  reward: "bg-purple-100 text-purple-800",
  penalty: "bg-gray-100 text-gray-800",
} as const;

export const STATUS_COLORS = {
  pending: "bg-yellow-100 text-yellow-800",
  completed: "bg-green-100 text-green-800",
  failed: "bg-red-100 text-red-800",
  cancelled: "bg-gray-100 text-gray-800",
  refunded: "bg-orange-100 text-orange-800",
} as const;

export const CATEGORY_COLORS = {
  chapter: "bg-blue-100 text-blue-800",
  novel: "bg-purple-100 text-purple-800",
  subscription: "bg-green-100 text-green-800",
  gift: "bg-pink-100 text-pink-800",
  promotion: "bg-orange-100 text-orange-800",
  system: "bg-gray-100 text-gray-800",
} as const;

export const DEFAULT_TRANSACTION_FILTERS: Required<
  Pick<Transaction, "type" | "category" | "status" | "currency">
> & {
  paymentMethod: Transaction["paymentMethod"] | undefined;
  userId: string | undefined;
  search: string;
  page: number;
  pageSize: number;
} = {
  type: "purchase",
  category: "chapter",
  status: "completed",
  currency: "VND",
  paymentMethod: undefined,
  userId: undefined,
  search: "",
  page: 1,
  pageSize: 10,
};
