"use client";

interface CreateRecommendationLayoutProps {
  children: React.ReactNode;
}

export function CreateRecommendationLayout({
  children,
}: CreateRecommendationLayoutProps) {
  return (
    <div className="py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Tạo đề xuất mới</h1>
        <p className="text-muted-foreground mt-2">
          Tạo đề xuất truyện mới cho người dùng
        </p>
      </div>
      {children}
    </div>
  );
}
