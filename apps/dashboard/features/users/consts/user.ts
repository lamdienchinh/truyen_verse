export const USER_STATUSES = {
  active: "Hoạt động",
  inactive: "Không hoạt động",
  pending: "Chờ xác thực",
  banned: "Bị khóa",
  suspended: "Tạm khóa",
} as const;

export const USER_ROLES = {
  user: "Người dùng",
  author: "Tác giả",
  moderator: "Kiểm duyệt viên",
  admin: "Quản trị viên",
  super_admin: "Quản trị viên cấp cao",
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
export const USER_STATUS_MAP = {
  active: {
    label: "Hoạt động",
    variant: "default",
    className: "bg-green-100 text-green-800",
  },
  inactive: {
    label: "Không hoạt động",
    variant: "secondary",
    className: "bg-gray-100 text-gray-800",
  },
  pending: {
    label: "Chờ xác thực",
    variant: "secondary",
    className: "bg-yellow-100 text-yellow-800",
  },
  banned: {
    label: "Bị khóa",
    variant: "destructive",
    className: "bg-red-100 text-red-800",
  },
  suspended: {
    label: "Tạm khóa",
    variant: "outline",
    className: "bg-orange-100 text-orange-800",
  },
} as const;

export const USER_ROLE_MAP = USER_ROLES;

export const CURRENCY_MAP = {
  VND: { symbol: "₫", name: "Vietnamese Dong" },
  USD: { symbol: "$", name: "US Dollar" },
  EUR: { symbol: "€", name: "Euro" },
} as const;
