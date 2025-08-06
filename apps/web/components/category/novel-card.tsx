import { INovel } from "@/type/novel";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";
import { BookOpen, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NovelCard({
  title,
  slug,
  author,
  cover,
  desc,
  totalChapters,
  category,
}: INovel) {
  return (
    <Card className="group transition-colors">
      <CardContent className="flex gap-4 p-4">
        <Link
          href={`/detail/${slug ?? "temp"}`}
          className="relative shrink-0 w-[120px] h-[160px] overflow-hidden rounded-md"
        >
          <Image
            src={cover || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <Link
              href={`/detail/${slug ?? "temp"}`}
              className="font-bold text-lg hover:text-primary transition-colors line-clamp-1"
            >
              {title}
            </Link>
            <div className="flex items-center gap-2 shrink-0">
              <Badge variant="outline" className="h-6">
                <BookOpen className="mr-1 h-3 w-3" />
                {totalChapters} chương
              </Badge>
              <Button variant="secondary" size="sm" asChild>
                <Link href={`/detail/${slug ?? "temp"}`}>Đọc thử</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <UserRound className="h-4 w-4" />
            <span className="line-clamp-1">{author}</span>
          </div>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {desc}
          </p>

          <div className="mt-auto pt-4">
            <Badge variant="secondary" className="text-xs">
              {category}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
