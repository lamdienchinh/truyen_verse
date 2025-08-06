import { baseEntitySchema } from "@/shared/types/base-entity.schema";
import z from "zod";

export const bookSchema = baseEntitySchema.extend({
  name: z.string(),
  status: z.string(),
  publicDate: z.date(),
});

export const createBookSchema = z.object({
  name: z.string().min(1, "Tên truyện là bắt buộc"),
  author: z.string().min(1, "Tên tác giả là bắt buộc"),
  description: z.string().min(10, "Giới thiệu phải có ít nhất 10 ký tự"),
  genre: z.string().min(1, "Vui lòng chọn thể loại chính"),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  world: z.string().default(""),
  mcPersonality: z.string().default(""),
  mcPower: z.string().default(""),
  status: z.enum(["draft", "ongoing", "completed", "hiatus"]).default("draft"),
  publishType: z.enum(["free", "vip", "mixed"]).default("free"),
  isAdult: z.boolean().default(false),
  coverImage: z.any().optional(),
  agreeToTerms: z.boolean().default(false),
});

export type TBook = z.infer<typeof bookSchema>;
export type TCreateBook = z.infer<typeof createBookSchema>;
