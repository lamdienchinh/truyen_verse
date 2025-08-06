import ReportFilter from "@/features/reports/components/report-filter";
import ReportTable from "@/features/reports/components/report-table";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { AlertTriangle } from "lucide-react";

export default function ViolationsPage() {
  return (
    <section className="w-full pt-[40px]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Báo Cáo Vi Phạm</h1>
          <p className="text-muted-foreground">
            Xử lý các báo cáo về nội dung vi phạm quy định cộng đồng
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Báo Cáo Vi Phạm
              </CardTitle>
              <Badge variant="destructive">Cần xử lý ưu tiên</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <ReportFilter />
              <ReportTable filterType="violation" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
