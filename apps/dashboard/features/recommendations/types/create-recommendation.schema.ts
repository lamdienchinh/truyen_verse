import z from "zod";

export const createRecommendationSchema = z
  .object({
    title: z
      .string()
      .min(1, "Tiêu đề không được để trống")
      .max(100, "Tiêu đề quá dài"),
    description: z
      .string()
      .min(1, "Mô tả không được để trống")
      .max(500, "Mô tả quá dài"),
    novelId: z.string().min(1, "Vui lòng chọn truyện"),
    category: z.enum([
      "daily",
      "trending",
      "featured",
      "new_release",
      "editor_choice",
    ]),
    priority: z.enum(["high", "medium", "low"]),
    startDate: z.date({
      required_error: "Vui lòng chọn ngày bắt đầu",
    }),
    endDate: z.date({
      required_error: "Vui lòng chọn ngày kết thúc",
    }),
    position: z
      .number()
      .min(1, "Vị trí phải lớn hơn 0")
      .max(100, "Vị trí quá lớn")
      .optional(),
  })
  .refine((data) => data.endDate > data.startDate, {
    message: "Ngày kết thúc phải sau ngày bắt đầu",
    path: ["endDate"],
  });

export type CreateRecommendationFormValues = z.infer<
  typeof createRecommendationSchema
>;
