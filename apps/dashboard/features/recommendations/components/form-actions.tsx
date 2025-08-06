"use client";

import { Save } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";

interface FormActionsProps {
  isPending: boolean;
}

export function FormActions({ isPending }: FormActionsProps) {
  const router = useRouter();

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-3">
          <Button type="submit" className="w-full" disabled={isPending}>
            <Save className="w-4 h-4 mr-2" />
            {isPending ? "Đang lưu..." : "Lưu đề xuất"}
          </Button>
          <Button
            type="button"
            variant="outline"
            className="w-full"
            onClick={() => router.push("/recommendations")}
          >
            Hủy
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
