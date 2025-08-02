import { INovel } from "@/type/novel";
import { Badge } from "@workspace/ui/components/badge";
import { UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type NovelCardProps = Partial<INovel>;

export const NovelCard = ({
  title,
  slug,
  author,
  cover,
  desc,
  totalChapters = 300,
  category = "Tiên hiệp",
}: NovelCardProps) => (
  <article className="flex w-full">
    <div>
      <Link
        className="relative overflow-hidden rounded-sm block h-[128px] w-[96px] group cursor-pointer"
        href={`/detail/${slug ?? "temp"}`}
      >
        <Image
          src={cover || "/placeholder.svg"}
          alt={title || "Truyện chưa có tên"}
          width={50}
          height={50}
          className="rounded-sm object-cover w-full h-full transition-transform duration-200 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" />
      </Link>
    </div>
    <div className="w-full flex flex-col items-start pt-2 px-2 space-y-1 sm:space-y-2">
      <div className="w-full flex justify-between">
        <Link
          href={`/detail/${slug ?? "temp"}`}
          className="inline-flex font-bold line-clamp-1 text-sm"
        >
          {title}
        </Link>
        <div className="flex gap-2 items-center text-nowrap">
          <Badge>{category}</Badge>
          <Badge className='bg-blue-500 hover:bg-blue-400'>{totalChapters} chương</Badge>
        </div>
      </div>
      <div className="flex items-center gap-1 text-[10px] sm:text-xs line-clamp-1">
        <UserRound className="w-3 h-3 sm:w-4 sm:h-4" />
        {author}
      </div>
      <div className="text-sm line-clamp-2 text-gray-400">{desc}</div>
    </div>
  </article>
);
