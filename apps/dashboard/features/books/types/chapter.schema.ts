import { baseEntitySchema } from "@/shared/types/base-entity.schema";
import z from "zod";

export const chapterSchema = baseEntitySchema.extend({
  title: z.string(),
  content: z.string(),
  order: z.number(),
  status: z.string(),
  publishedDate: z.date().optional(),
  wordCount: z.number().optional(),
  bookId: z.string(),
});

export const createChapterSchema = z.object({
  title: z.string().min(1, "Tiêu đề chương là bắt buộc"),
  content: z.string().min(1, "Nội dung chương là bắt buộc"),
  order: z.number().min(1, "Thứ tự chương phải lớn hơn 0"),
  status: z.enum(["draft", "published", "scheduled"]),
  publishedDate: z.date().optional(),
  bookId: z.string().min(1, "ID truyện là bắt buộc"),
});

export type TChapter = z.infer<typeof chapterSchema>;
export type TCreateChapter = z.infer<typeof createChapterSchema>;
