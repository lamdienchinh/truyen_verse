import ReportFilter from "@/features/reports/components/report-filter";
import ReportTable from "@/features/reports/components/report-table";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { AlertTriangle, CheckCircle, Clock, XCircle } from "lucide-react";

export default function ReportsPage() {
  const stats = {
    total: 42,
    pending: 8,
    reviewing: 5,
    resolved: 25,
    rejected: 4,
  };

  return (
    <section className="w-full pt-[40px]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quản Lý Báo Cáo</h1>
          <p className="text-muted-foreground">
            Xử lý các báo cáo vi phạm và spam từ người dùng
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Tổng số báo cáo
                  </p>
                  <p className="text-2xl font-bold">{stats.total}</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Chờ xử lý</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {stats.pending}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Đang xem xét</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {stats.reviewing}
                  </p>
                </div>
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Đã giải quyết</p>
                  <p className="text-2xl font-bold text-green-600">
                    {stats.resolved}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Từ chối</p>
                  <p className="text-2xl font-bold text-red-600">
                    {stats.rejected}
                  </p>
                </div>
                <XCircle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Danh Sách Báo Cáo</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  {stats.pending + stats.reviewing} báo cáo cần xử lý
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <ReportFilter />
              <ReportTable />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
