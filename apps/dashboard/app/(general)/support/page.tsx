import SupportTable from "@/features/support/components/support-table";
import { Badge } from "@workspace/ui/components/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  HeadphonesIcon,
  XCircle,
} from "lucide-react";

export default function SupportPage() {
  const stats = {
    total: 28,
    open: 6,
    inProgress: 8,
    waitingResponse: 3,
    resolved: 9,
    closed: 2,
  };

  return (
    <section className="w-full pt-[40px]">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Hỗ Trợ Khách Hàng
          </h1>
          <p className="text-muted-foreground">
            Quản lý và xử lý các yêu cầu hỗ trợ từ người dùng
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Tổng số ticket
                  </p>
                  <p className="text-2xl font-bold">{stats.total}</p>
                </div>
                <HeadphonesIcon className="h-8 w-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Mở mới</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {stats.open}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Đang xử lý</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {stats.inProgress}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Chờ phản hồi</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {stats.waitingResponse}
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
                  <p className="text-sm text-muted-foreground">Đã đóng</p>
                  <p className="text-2xl font-bold text-gray-600">
                    {stats.closed}
                  </p>
                </div>
                <XCircle className="h-8 w-8 text-gray-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Danh Sách Yêu Cầu Hỗ Trợ</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  {stats.open + stats.inProgress + stats.waitingResponse} ticket
                  cần xử lý
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <SupportTable />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
