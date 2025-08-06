import ReportFilter from "@/features/reports/components/report-filter";
import ReportTable from "@/features/reports/components/report-table";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Shield } from "lucide-react";

export default function SpamPage() {
  return (
    <section className="w-full pt-[40px]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Báo Cáo Spam</h1>
          <p className="text-muted-foreground">
            Xử lý các báo cáo về spam và nội dung quảng cáo không mong muốn
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Báo Cáo Spam
              </CardTitle>
              <Badge variant="secondary">Tự động lọc</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <ReportFilter />
              <ReportTable filterType="spam" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
