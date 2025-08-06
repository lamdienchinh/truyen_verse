import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { useToast } from "@workspace/ui/hooks/use-toast";

import {
  CreateRecommendationFormValues,
  createRecommendationSchema,
} from "../types/create-recommendation.schema";
import { useCreateRecommendation } from "./use-recommendations";

export function useCreateRecommendationForm() {
  const router = useRouter();
  const { toast } = useToast();
  const createRecommendation = useCreateRecommendation();

  const form = useForm<CreateRecommendationFormValues>({
    resolver: zodResolver(createRecommendationSchema),
    defaultValues: {
      title: "",
      description: "",
      novelId: "",
      category: "daily",
      priority: "medium",
      position: 1,
    },
  });

  const onSubmit = async (values: CreateRecommendationFormValues) => {
    try {
      await createRecommendation.mutateAsync({
        title: values.title,
        description: values.description,
        novelId: values.novelId,
        category: values.category,
        priority: values.priority,
        startDate: values.startDate,
        endDate: values.endDate,
        position: values.position,
      });

      toast({
        title: "Thành công",
        description: "Đã tạo đề xuất mới thành công",
      });

      router.push("/recommendations");
    } catch {
      toast({
        title: "Lỗi",
        description: "Có lỗi xảy ra khi tạo đề xuất",
        variant: "destructive",
      });
    }
  };

  return {
    form,
    onSubmit,
    isPending: createRecommendation.isPending,
  };
}
