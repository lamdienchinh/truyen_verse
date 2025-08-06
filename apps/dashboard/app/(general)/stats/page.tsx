"use client";

import BookStatusChart from "@/features/stats/components/book-status-chart";
import GoalsAndAchievements from "@/features/stats/components/goals-and-achievements";
import RecentActivity from "@/features/stats/components/recent-activity";
import StatsOverview from "@/features/stats/components/stats-overview";
import TopBooksChart from "@/features/stats/components/top-books-chart";
import TrendsComparison from "@/features/stats/components/trends-comparison";
import ViewsChart from "@/features/stats/components/views-chart";
import {
  statsMockData,
  trendsMockData,
} from "@/features/stats/consts/stats-mock-data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function StatsPage() {
  const stats = statsMockData;

  return (
    <section className="w-full pt-[40px]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Thống Kê</h1>
          <p className="text-muted-foreground">
            Tổng quan về hoạt động và hiệu suất truyện của bạn
          </p>
        </div>

        {/* Stats Overview */}
        <StatsOverview
          totalBooks={stats.totalBooks}
          totalChapters={stats.totalChapters}
          totalViews={stats.totalViews}
          totalLikes={stats.totalLikes}
          publishedBooks={stats.publishedBooks}
          draftBooks={stats.draftBooks}
        />

        {/* Charts Row */}
        <div className="grid gap-6 md:grid-cols-3">
          <ViewsChart monthlyViews={stats.monthlyViews} />
          <TopBooksChart topBooks={stats.topBooks} />
          <BookStatusChart
            publishedBooks={stats.publishedBooks}
            draftBooks={stats.draftBooks}
          />
        </div>

        {/* Goals and Achievements */}
        <GoalsAndAchievements
          totalBooks={stats.totalBooks}
          totalChapters={stats.totalChapters}
          totalViews={stats.totalViews}
        />

        {/* Recent Activity */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <RecentActivity activities={stats.recentActivity} />
          </div>
          <div className="space-y-6">
            <TrendsComparison trends={trendsMockData} />
            <Card>
              <CardHeader>
                <CardTitle>Thông Tin Tài Khoản</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Thành viên từ</p>
                  <p className="font-medium">Tháng 1, 2024</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Cấp độ tác giả
                  </p>
                  <p className="font-medium">Tác giả Bạc</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Điểm danh tiếng
                  </p>
                  <p className="font-medium">1,247 điểm</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Người theo dõi
                  </p>
                  <p className="font-medium">324 người</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
