import z from "zod";

export const statsSchema = z.object({
  totalBooks: z.number(),
  totalChapters: z.number(),
  totalViews: z.number(),
  totalLikes: z.number(),
  publishedBooks: z.number(),
  draftBooks: z.number(),
  monthlyViews: z.array(
    z.object({
      month: z.string(),
      views: z.number(),
    })
  ),
  topBooks: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      views: z.number(),
      likes: z.number(),
      chapters: z.number(),
    })
  ),
  recentActivity: z.array(
    z.object({
      id: z.string(),
      type: z.enum([
        "book_created",
        "chapter_added",
        "book_published",
        "book_liked",
      ]),
      bookName: z.string(),
      timestamp: z.date(),
      details: z.string().optional(),
    })
  ),
});

export type TStats = z.infer<typeof statsSchema>;
