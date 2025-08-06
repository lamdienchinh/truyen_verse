"use client";

import { Button } from "@workspace/ui/components/button";
import { ArrowLeft } from "lucide-react";

export function FormHeader() {
  return (
    <div className="mb-6">
      <Button variant="ghost" className="mb-6">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Quay lại
      </Button>
      <h1 className="text-2xl font-bold pb-4">Thêm Truyện Tiên Hiệp Mới</h1>
      <p className="text-muted-foreground">
        Tạo truyện chữ mới cho nền tảng TruyenVerse. Vui lòng điền đầy đủ thông
        tin để độc giả dễ tìm thấy truyện của bạn.
      </p>
    </div>
  );
}
