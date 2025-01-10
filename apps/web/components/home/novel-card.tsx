import { INovel } from "@/type/novel";
import { Badge } from "@workspace/ui/components/badge";
import { Card, CardContent, CardFooter } from "@workspace/ui/components/card";
import { Layers, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NovelCardProps extends INovel {}

export const NovelCard = ({
  title,
  slug,
  author,
  cover,
  desc,
  totalChapters = 300,
  category = "Tiên hiệp",
}: NovelCardProps) => (
  <Card className="overflow-hidden">
    <CardContent className="p-0 relative">
      <Link
        className="block relative overflow-hidden h-[250px] group cursor-pointer"
        href={`/detail/${slug ?? "temp"}`}
      >
        <Image
          src={cover || "/placeholder.svg"}
          alt={title}
          width={250}
          height={250}
          className="object-cover w-full h-[250px] transition-transform duration-200 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out" />
      </Link>
      <div className="flex items-center gap-2 absolute left-2 bottom-2">
        <Badge>{totalChapters} chương</Badge>
        <Badge className="flex items-center gap-2 bg-blue-500">
          <Layers width={10} height={10} /> {category}
        </Badge>
      </div>
    </CardContent>
    <CardFooter className="flex flex-col items-start pt-2 px-2 space-y-2">
      <Link
        href={`/detail/${slug ?? "temp"}`}
        className="font-semibold line-clamp-1 text-sm"
      >
        {title}
      </Link>
      <div className="flex items-center gap-1 text-xs line-clamp-1">
        <UserRound width={15} height={15} />
        {author}
      </div>
      <div className="text-sm line-clamp-2 text-gray-400">{desc}</div>
    </CardFooter>
  </Card>
);
