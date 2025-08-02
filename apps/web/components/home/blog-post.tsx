import { formatDateTime } from "@/utils/date-time";
import { Card, CardContent } from "@workspace/ui/components/card";
import { Calendar, Clock } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogPostProps {
  id: string;
  title: string;
  excerpt: string;
  image?: string | StaticImageData;
  publishedAt?: Date;
  readTime?: number;
  author?: string;
  category?: string;
}

export const BlogPost = ({
  id,
  title,
  excerpt,
  image,
  publishedAt = new Date("2024-6-12"),
  readTime = 5,
  author = "Admin",
  category = "Tin tức",
}: BlogPostProps) => (
  <Card className="group overflow-hidden">
    <div className="relative">
      <Link href={`/article/${id}`} className="block">
        <div className="relative overflow-hidden aspect-[16/10]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-primary rounded-full shadow-lg">
              {category}
            </span>
          </div>

          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
            <Clock size={12} className="text-white" />
            <span className="text-xs text-white font-medium">
              {readTime} phút
            </span>
          </div>
        </div>
      </Link>
    </div>

    <CardContent className="p-5 space-y-3">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          <time dateTime={publishedAt.toISOString()}>
            {formatDateTime(publishedAt)}
          </time>
        </div>
        <span className="text-primary font-medium">bởi {author}</span>
      </div>

      <h3 className="font-bold text-lg leading-tight">
        <Link
          href={`/article/${id}`}
          className="text-foreground hover:text-primary transition-colors duration-200 line-clamp-2"
        >
          {title}
        </Link>
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {excerpt}
      </p>
      <div className="pt-2">
        <Link
          href={`/article/${id}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group/link"
        >
          Đọc thêm
          <svg
            className="ml-1 w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </CardContent>
  </Card>
);
