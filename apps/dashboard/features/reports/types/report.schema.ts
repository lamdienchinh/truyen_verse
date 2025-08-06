import { baseEntitySchema } from "@/shared/types/base-entity.schema";
import z from "zod";

export const reportSchema = baseEntitySchema.extend({
  title: z.string(),
  description: z.string(),
  type: z.enum([
    "violation",
    "spam",
    "copyright",
    "inappropriate_content",
    "harassment",
    "other",
  ]),
  status: z.enum(["pending", "reviewing", "resolved", "rejected"]),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  reportedBy: z.string(),
  reportedUser: z.string().optional(),
  reportedContent: z.string().optional(),
  bookId: z.string().optional(),
  chapterId: z.string().optional(),
  adminNote: z.string().optional(),
  resolvedBy: z.string().optional(),
  resolvedAt: z.date().optional(),
});

export const createReportSchema = z.object({
  title: z.string().min(1, "Tiêu đề báo cáo là bắt buộc"),
  description: z.string().min(1, "Mô tả báo cáo là bắt buộc"),
  type: z.enum([
    "violation",
    "spam",
    "copyright",
    "inappropriate_content",
    "harassment",
    "other",
  ]),
  priority: z.enum(["low", "medium", "high", "urgent"]).default("medium"),
  reportedUser: z.string().optional(),
  reportedContent: z.string().optional(),
  bookId: z.string().optional(),
  chapterId: z.string().optional(),
});

export const updateReportSchema = z.object({
  status: z.enum(["pending", "reviewing", "resolved", "rejected"]),
  adminNote: z.string().optional(),
  resolvedBy: z.string().optional(),
});

export type TReport = z.infer<typeof reportSchema>;
export type TCreateReport = z.infer<typeof createReportSchema>;
export type TUpdateReport = z.infer<typeof updateReportSchema>;
