import { baseEntitySchema } from "@/shared/types/base-entity.schema";
import z from "zod";

export const supportTicketSchema = baseEntitySchema.extend({
  title: z.string(),
  description: z.string(),
  type: z.enum([
    "technical",
    "feedback",
    "bug_report",
    "feature_request",
    "account_issue",
    "other",
  ]),
  status: z.enum([
    "open",
    "in_progress",
    "waiting_response",
    "resolved",
    "closed",
  ]),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  category: z.enum(["general", "billing", "technical", "content", "account"]),
  userId: z.string(),
  userName: z.string(),
  userEmail: z.string(),
  assignedTo: z.string().optional(),
  adminNote: z.string().optional(),
  resolvedAt: z.date().optional(),
  lastResponse: z.date().optional(),
});

export const createSupportTicketSchema = z.object({
  title: z.string().min(1, "Tiêu đề yêu cầu là bắt buộc"),
  description: z.string().min(1, "Mô tả yêu cầu là bắt buộc"),
  type: z.enum([
    "technical",
    "feedback",
    "bug_report",
    "feature_request",
    "account_issue",
    "other",
  ]),
  category: z.enum(["general", "billing", "technical", "content", "account"]),
  priority: z.enum(["low", "medium", "high", "urgent"]).default("medium"),
  userEmail: z.string().email("Email không hợp lệ"),
});

export const updateSupportTicketSchema = z.object({
  status: z.enum([
    "open",
    "in_progress",
    "waiting_response",
    "resolved",
    "closed",
  ]),
  assignedTo: z.string().optional(),
  adminNote: z.string().optional(),
});

export const supportResponseSchema = baseEntitySchema.extend({
  ticketId: z.string(),
  message: z.string(),
  isAdminResponse: z.boolean(),
  authorName: z.string(),
  authorEmail: z.string(),
});

export const createSupportResponseSchema = z.object({
  ticketId: z.string().min(1, "ID ticket là bắt buộc"),
  message: z.string().min(1, "Nội dung phản hồi là bắt buộc"),
  isAdminResponse: z.boolean().default(true),
});

export type TSupportTicket = z.infer<typeof supportTicketSchema>;
export type TCreateSupportTicket = z.infer<typeof createSupportTicketSchema>;
export type TUpdateSupportTicket = z.infer<typeof updateSupportTicketSchema>;
export type TSupportResponse = z.infer<typeof supportResponseSchema>;
export type TCreateSupportResponse = z.infer<
  typeof createSupportResponseSchema
>;
