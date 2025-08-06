import { TStats } from "../types/stats.schema";

export const statsMockData: TStats = {
  totalBooks: 12,
  totalChapters: 156,
  totalViews: 45230,
  totalLikes: 2841,
  publishedBooks: 8,
  draftBooks: 4,
  monthlyViews: [
    { month: "Jan", views: 3200 },
    { month: "Feb", views: 4100 },
    { month: "Mar", views: 3800 },
    { month: "Apr", views: 5200 },
    { month: "May", views: 6800 },
    { month: "Jun", views: 7500 },
    { month: "Jul", views: 8200 },
    { month: "Aug", views: 9100 },
  ],
  topBooks: [
    {
      id: "1",
      name: "Truyện Kiếm Hiệp Phong Vân",
      views: 12500,
      likes: 847,
      chapters: 45,
    },
    {
      id: "2",
      name: "Thế Giới Phép Thuật",
      views: 9800,
      likes: 623,
      chapters: 38,
    },
    {
      id: "3",
      name: "Hành Trình Anh Hùng",
      views: 8200,
      likes: 512,
      chapters: 32,
    },
    {
      id: "4",
      name: "Tình Yêu Trong Sáng",
      views: 6900,
      likes: 445,
      chapters: 28,
    },
    {
      id: "5",
      name: "Cuộc Chiến Galactic",
      views: 5500,
      likes: 368,
      chapters: 22,
    },
  ],
  recentActivity: [
    {
      id: "1",
      type: "chapter_added",
      bookName: "Truyện Kiếm Hiệp Phong Vân",
      timestamp: new Date("2024-08-05T10:30:00Z"),
      details: "Chương 46: Đại chiến cuối cùng",
    },
    {
      id: "2",
      type: "book_liked",
      bookName: "Thế Giới Phép Thuật",
      timestamp: new Date("2024-08-05T09:15:00Z"),
      details: "Nhận được 25 lượt thích mới",
    },
    {
      id: "3",
      type: "book_published",
      bookName: "Hành Trình Anh Hùng",
      timestamp: new Date("2024-08-04T16:45:00Z"),
      details: "Truyện đã được xuất bản",
    },
    {
      id: "4",
      type: "chapter_added",
      bookName: "Tình Yêu Trong Sáng",
      timestamp: new Date("2024-08-04T14:20:00Z"),
      details: "Chương 29: Lời tỏ tình",
    },
    {
      id: "5",
      type: "book_created",
      bookName: "Cuộc Phiêu Lưu Mới",
      timestamp: new Date("2024-08-04T11:00:00Z"),
      details: "Truyện mới được tạo",
    },
  ],
};

export const trendsMockData = [
  {
    label: "Lượt xem",
    current: 9100,
    previous: 8200,
  },
  {
    label: "Lượt thích",
    current: 2841,
    previous: 2650,
  },
  {
    label: "Chương mới",
    current: 15,
    previous: 12,
  },
  {
    label: "Người theo dõi",
    current: 324,
    previous: 298,
  },
];
