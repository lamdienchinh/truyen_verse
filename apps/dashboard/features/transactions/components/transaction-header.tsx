import { Button } from "@workspace/ui/components/button";
import { Download } from "lucide-react";

export function TransactionHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Quản lý giao dịch</h1>
        <p className="text-muted-foreground">
          Theo dõi và quản lý các giao dịch tài chính
        </p>
      </div>
      <Button>
        <Download className="mr-2 h-4 w-4" />
        Xuất báo cáo
      </Button>
    </div>
  );
}
