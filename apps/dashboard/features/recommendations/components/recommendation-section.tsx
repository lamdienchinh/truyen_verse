import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Star } from "lucide-react";
import type { Recommendation } from "../types/recommendation";
import { RecommendationsTable } from "./recommendations-table";

interface RecommendationSectionProps {
  recommendations: Recommendation[];
  isLoading?: boolean;
}

export function RecommendationSection({
  recommendations,
  isLoading,
}: RecommendationSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5" />
          Danh sách đề xuất
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <RecommendationsTable
          recommendations={recommendations}
          isLoading={isLoading}
        />
      </CardContent>
    </Card>
  );
}
