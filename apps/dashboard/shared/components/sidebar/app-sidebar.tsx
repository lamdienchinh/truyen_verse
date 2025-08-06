"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@workspace/ui/components/sidebar";
import {
  BarChart3,
  BookOpen,
  BookTemplate,
  CheckCircle,
  CreditCard,
  FileText,
  Heart,
  PenTool,
  Settings,
  Star,
  Upload,
  Users,
} from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { NavMain } from "./nav-main";

const data = {
  myBooks: [
    {
      title: "Đã đăng",
      url: "/books",
      icon: BookTemplate,
      isActive: true,
    },
    {
      title: "Thêm mới",
      url: "/books/create",
      icon: Upload,
    },
    {
      title: "Thống kê",
      url: "/stats",
      icon: BarChart3,
    },
  ],
  articles: [
    {
      title: "Quản lý bài viết",
      url: "/articles",
      icon: PenTool,
      items: [
        {
          title: "Tất cả bài viết",
          url: "/articles",
        },
        {
          title: "Tạo bài viết mới",
          url: "/articles/create",
        },
      ],
    },
    {
      title: "Đề xuất truyện",
      url: "/recommendations",
      icon: Star,
      items: [
        {
          title: "Tất cả đề xuất",
          url: "/recommendations",
        },
        {
          title: "Tạo đề xuất mới",
          url: "/recommendations/create",
        },
        {
          title: "Đề xuất hàng ngày",
          url: "/recommendations?category=daily",
        },
        {
          title: "Đề xuất nổi bật",
          url: "/recommendations?category=featured",
        },
      ],
    },
  ],
  users: [
    {
      title: "Duyệt truyện",
      url: "/book-approval",
      icon: CheckCircle,
      items: [
        {
          title: "Chờ duyệt",
          url: "/book-approval?status=pending",
        },
        {
          title: "Đã duyệt",
          url: "/book-approval?status=approved",
        },
        {
          title: "Từ chối",
          url: "/book-approval?status=rejected",
        },
        {
          title: "Tất cả",
          url: "/book-approval",
        },
      ],
    },
    {
      title: "Quản lý người dùng",
      url: "/users",
      icon: Users,
      items: [
        {
          title: "Tất cả người dùng",
          url: "/users",
        },
        {
          title: "Người dùng mới",
          url: "/users?status=pending",
        },
        {
          title: "Người dùng bị khóa",
          url: "/users?status=banned",
        },
        {
          title: "Quản trị viên",
          url: "/users?role=admin",
        },
      ],
    },
    {
      title: "Quản lý giao dịch",
      url: "/transactions",
      icon: CreditCard,
      items: [
        {
          title: "Tất cả giao dịch",
          url: "/transactions",
        },
        {
          title: "Chờ xử lý",
          url: "/transactions?status=pending",
        },
        {
          title: "Giao dịch mua chương",
          url: "/transactions?type=purchase",
        },
        {
          title: "Hoàn tiền",
          url: "/transactions?type=refund",
        },
      ],
    },
  ],
  reports: [
    {
      title: "Xử lý báo cáo",
      url: "/reports",
      icon: FileText,
      items: [
        {
          title: "Báo cáo vi phạm",
          url: "/reports/violations",
        },
        {
          title: "Báo cáo spam",
          url: "/reports/spam",
        },
      ],
    },
    {
      title: "Yêu cầu hỗ trợ",
      url: "/support",
      icon: Heart,
      items: [
        {
          title: "Hỗ trợ kỹ thuật",
          url: "/support/technical",
        },
        {
          title: "Phản hồi người dùng",
          url: "/support/feedback",
        },
      ],
    },
  ],
  library: [
    {
      title: "Bản thảo",
      url: "/drafts",
      icon: FileText,
      items: [
        {
          title: "Bản nháp mới",
          url: "/drafts/new",
        },
        {
          title: "Đang chờ duyệt",
          url: "/drafts/pending",
        },
      ],
    },
    {
      title: "Đại cương",
      url: "/overview",
      icon: Users,
      items: [
        {
          title: "Tổng quan",
          url: "/overview/general",
        },
        {
          title: "Phân tích",
          url: "/overview/analytics",
        },
      ],
    },
  ],
  info: [
    {
      title: "Kiến thức cơ bản",
      url: "/knowledge",
      icon: FileText,
    },
    {
      title: "Các danh hiệu",
      url: "/titles",
      icon: Users,
    },
    {
      title: "Dịch/không QT",
      url: "/translation",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BookOpen className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-primary">
                    Bookhub
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.myBooks} groupLabel="TRUYỆN CỦA TÔI" />
        <NavMain items={data.articles} groupLabel="NỘI DUNG" />
        <NavMain items={data.users} groupLabel="QUẢN LÝ HỆ THỐNG" />
        <NavMain items={data.reports} groupLabel="BÁO CÁO & HỖ TRỢ" />
        <NavMain items={data.library} groupLabel="THƯ LIỆU" />
        <NavMain items={data.info} groupLabel="THÔNG TIN" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
