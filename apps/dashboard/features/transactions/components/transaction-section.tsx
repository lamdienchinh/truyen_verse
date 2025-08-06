import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { CreditCard } from "lucide-react";
import { Transaction } from "../types/transaction";
import { TransactionsTable } from "./transactions-table";

interface TransactionSectionProps {
  searchQuery: string;
  statusFilter?: Transaction["status"];
  typeFilter?: Transaction["type"];
  currencyFilter?: Transaction["currency"];
}

export function TransactionSection({
  searchQuery,
  statusFilter,
  typeFilter,
  currencyFilter,
}: TransactionSectionProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Danh sách giao dịch
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TransactionsTable
            searchQuery={searchQuery}
            statusFilter={statusFilter}
            typeFilter={typeFilter}
            currencyFilter={currencyFilter}
          />
        </CardContent>
      </Card>
    </div>
  );
}
