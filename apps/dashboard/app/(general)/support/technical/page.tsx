import SupportTable from "@/features/support/components/support-table";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Wrench } from "lucide-react";

export default function TechnicalSupportPage() {
  return (
    <section className="w-full pt-[40px]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hỗ Trợ Kỹ Thuật</h1>
          <p className="text-muted-foreground">
            Xử lý các vấn đề kỹ thuật và báo cáo lỗi từ người dùng
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-blue-600" />
                Hỗ Trợ Kỹ Thuật
              </CardTitle>
              <Badge variant="default">Ưu tiên cao</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <SupportTable filterType="technical" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
