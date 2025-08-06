import { Button } from "@workspace/ui/components/button";
import { UserPlus } from "lucide-react";

export function UserHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Quản lý người dùng</h1>
        <p className="text-muted-foreground">
          Quản lý và theo dõi thông tin người dùng
        </p>
      </div>
      <Button>
        <UserPlus className="mr-2 h-4 w-4" />
        Thêm người dùng
      </Button>
    </div>
  );
}
