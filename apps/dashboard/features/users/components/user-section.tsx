import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Users } from "lucide-react";
import { User } from "../types/user";
import { UsersTable } from "./users-table";

interface UserSectionProps {
  searchQuery?: string;
  statusFilter?: User["status"];
  roleFilter?: User["role"];
}

export function UserSection({
  searchQuery,
  statusFilter,
  roleFilter,
}: UserSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Danh sách người dùng
        </CardTitle>
      </CardHeader>
      <CardContent>
        <UsersTable
          searchQuery={searchQuery}
          statusFilter={statusFilter}
          roleFilter={roleFilter}
        />
      </CardContent>
    </Card>
  );
}
