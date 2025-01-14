import { getRandomImage } from "@/utils/common";
import { formatDateTime } from "@/utils/date-time";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { ChevronsRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogPostProps {
  title: string;
  excerpt: string;
  image?: string | StaticImageData;
}

const BlogPost = ({ title, excerpt, image }: BlogPostProps) => (
  <Card className="overflow-hidden">
    <CardContent className="p-0 overflow-hidden">
      <Link href="article/123">
        <div className="relative overflow-hidden h-[250px] group cursor-pointer">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={250}
            height={250}
            className="object-cover w-full h-[250px] transition-transform duration-200 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" />
        </div>
      </Link>
    </CardContent>
    <CardHeader>
      <p className="text-end text-xs text-gray-500">
        {formatDateTime(new Date("2024-6-12"))}
      </p>
      <CardTitle className="text-lg line-clamp-1">
        <Link href="article/abcd">{title}</Link>
      </CardTitle>
      <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
    </CardHeader>
  </Card>
);

export default function BlogSection() {
  const img_sample = getRandomImage(0);
  const posts = [
    {
      title: "Top 10 truyện tiên hiệp hay nhất 2023",
      excerpt: "Khám phá những tác phẩm tiên hiệp đỉnh cao trong năm qua...",
      image: img_sample,
    },
    {
      title: "Phỏng vấn độc quyền tác giả Đường Gia Tam Thiếu",
      excerpt: "Tìm hiểu về quá trình sáng tác của tác giả Đấu La Đại Lục...",
      image: img_sample,
    },
    {
      title: "Hướng dẫn: Cách đọc truyện hiệu quả",
      excerpt: "Những mẹo hay giúp bạn tận hưởng truyện chữ tốt hơn...",
      image: img_sample,
    },
    {
      title: "Top 20 truyện tiên hiệp hay nhất 2024",
      excerpt: "Khám phá những tác phẩm tiên hiệp đỉnh cao trong năm qua...",
      image: img_sample,
    },
    {
      title: "Top 5 truyện tiên hiệp hay nhất 2024",
      excerpt: "Khám phá những tác phẩm tiên hiệp đỉnh cao trong năm qua...",
      image: img_sample,
    },
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="w-full flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Tin mới</h2>
          <Link className="flex items-center gap-1" href="article">
            Tất cả
            <ChevronsRight width={20} height={20} />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}
