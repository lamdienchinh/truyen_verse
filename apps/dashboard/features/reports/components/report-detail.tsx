"use client";

import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";
import { Textarea } from "@workspace/ui/components/textarea";
import { formatDistanceToNow } from "date-fns";
import { vi } from "date-fns/locale";
import {
  AlertTriangle,
  ArrowLeft,
  Calendar,
  CheckCircle,
  User,
  XCircle,
} from "lucide-react";
import { useState } from "react";

interface ReportDetailProps {
  reportId: string;
}

export default function ReportDetail({ reportId }: ReportDetailProps) {
  const [status, setStatus] = useState("pending");
  const [adminNote, setAdminNote] = useState("");

  // Mock data - in real app, fetch by reportId
  const report = {
    id: reportId,
    title: "Nội dung không phù hợp trong truyện",
    description:
      "Truyện có chứa nội dung bạo lực quá mức, không phù hợp với độ tuổi được ghi nhận. Cụ thể là trong chương 15, có các cảnh miêu tả bạo lực chi tiết và đồ tể không phù hợp với độc giả trẻ em.",
    type: "inappropriate_content",
    status: "pending",
    priority: "high",
    reportedBy: "user123",
    reportedUser: "author456",
    reportedContent: "Chương 15: Trận chiến cuối cùng",
    bookId: "book789",
    bookTitle: "Truyện kiếm hiệp phong vân",
    chapterId: "chapter101",
    createdAt: new Date("2024-08-05T10:30:00Z"),
    updatedAt: new Date("2024-08-05T10:30:00Z"),
  };

  const typeLabels = {
    violation: "Vi phạm",
    spam: "Spam",
    copyright: "Bản quyền",
    inappropriate_content: "Nội dung không phù hợp",
    harassment: "Quấy rối",
    other: "Khác",
  };

  const priorityLabels = {
    low: "Thấp",
    medium: "Trung bình",
    high: "Cao",
    urgent: "Khẩn cấp",
  };

  const handleResolve = () => {
    console.log("Resolving report with note:", adminNote);
    // TODO: Implement API call
  };

  const handleReject = () => {
    console.log("Rejecting report with note:", adminNote);
    // TODO: Implement API call
  };

  return (
    <section className="w-full pt-[40px]">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Quay lại danh sách
          </Button>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Chi Tiết Báo Cáo
            </h1>
            <p className="text-muted-foreground">ID: {report.id}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            {/* Report Content */}
            <Card>
              <CardHeader>
                <CardTitle>Nội Dung Báo Cáo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{report.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="outline">
                      {typeLabels[report.type as keyof typeof typeLabels]}
                    </Badge>
                    <Badge
                      variant={
                        report.priority === "urgent"
                          ? "destructive"
                          : "secondary"
                      }
                    >
                      {
                        priorityLabels[
                          report.priority as keyof typeof priorityLabels
                        ]
                      }
                    </Badge>
                  </div>
                </div>

                <div className="prose max-w-none">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {report.description}
                  </p>
                </div>

                {report.reportedContent && (
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-medium mb-2">
                      Nội dung được báo cáo:
                    </p>
                    <p className="text-sm">{report.reportedContent}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Admin Action */}
            <Card>
              <CardHeader>
                <CardTitle>Xử Lý Báo Cáo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Trạng thái xử lý
                  </label>
                  <Select value={status} onValueChange={setStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Chờ xử lý</SelectItem>
                      <SelectItem value="reviewing">Đang xem xét</SelectItem>
                      <SelectItem value="resolved">Đã giải quyết</SelectItem>
                      <SelectItem value="rejected">Từ chối</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Ghi chú admin
                  </label>
                  <Textarea
                    placeholder="Thêm ghi chú về cách xử lý báo cáo này..."
                    value={adminNote}
                    onChange={(e) => setAdminNote(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleResolve}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4" />
                    Giải quyết
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={handleReject}
                    className="flex items-center gap-2"
                  >
                    <XCircle className="h-4 w-4" />
                    Từ chối
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Report Info */}
            <Card>
              <CardHeader>
                <CardTitle>Thông Tin Báo Cáo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Người báo cáo</p>
                    <p className="text-sm text-muted-foreground">
                      {report.reportedBy}
                    </p>
                  </div>
                </div>

                {report.reportedUser && (
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Người bị báo cáo</p>
                      <p className="text-sm text-muted-foreground">
                        {report.reportedUser}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Thời gian báo cáo</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDistanceToNow(new Date(report.createdAt), {
                        addSuffix: true,
                        locale: vi,
                      })}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Content */}
            {(report.bookTitle || report.reportedContent) && (
              <Card>
                <CardHeader>
                  <CardTitle>Nội Dung Liên Quan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {report.bookTitle && (
                    <div>
                      <p className="text-sm font-medium">Truyện</p>
                      <p className="text-sm text-muted-foreground">
                        {report.bookTitle}
                      </p>
                    </div>
                  )}

                  {report.reportedContent && (
                    <div>
                      <p className="text-sm font-medium">Chương</p>
                      <p className="text-sm text-muted-foreground">
                        {report.reportedContent}
                      </p>
                    </div>
                  )}

                  <Button variant="outline" size="sm" className="w-full">
                    Xem nội dung gốc
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
