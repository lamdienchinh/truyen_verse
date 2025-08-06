import SupportTable from "@/features/support/components/support-table";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { MessageSquare } from "lucide-react";

export default function FeedbackPage() {
  return (
    <section className="w-full pt-[40px]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Phản Hồi Người Dùng
          </h1>
          <p className="text-muted-foreground">
            Xem và phản hồi các ý kiến, đề xuất từ cộng đồng người dùng
          </p>
        </div>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-600" />
                Phản Hồi & Đề Xuất
              </CardTitle>
              <Badge variant="outline">Cải thiện sản phẩm</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <SupportTable filterType="feedback" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
