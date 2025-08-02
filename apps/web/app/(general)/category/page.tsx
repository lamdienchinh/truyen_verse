"use client";
import { NovelCard } from "@/components/category/novel-card";
import { NovelFilter } from "@/components/category/novel-filter";
import { INovel } from "@/type/novel";
import { getRandomImage } from "@/utils/common";
import { PaginationComponent } from "@workspace/ui/components/pagination";
import { useState } from "react";

const img = getRandomImage();

const novels: INovel[] = [
  {
    title:
      "Vừa Thành Áo Bào Tím Cương Vương, Thanh Lãnh Giáo Hoa Đế Cho Ta Đông Phòng",
    slug: "vua-thanh-ao-bao-tim",
    author: "Ái Hát Nãi Trà 1",
    cover: img,
    desc: "Thì bên trong hung nhất gọi cương thi, đạo sĩ ở trong lợi hại n hất mặc áo bào tím, Lão Tử mặc áo bào tím biến cương thi...",
    totalChapters: 98,
    category: "Đô Thị",
  },
  {
    title:
      "Vừa Thành Áo Bào Tím Cương Vương, Thanh Lãnh Giáo Hoa Đế Cho Ta Đông Phòng",
    slug: "vua-thanh-ao-bao-tim 1",
    author: "Ái Hát Nãi Trà 1",
    cover: img,
    desc: "Thì bên trong hung nhất gọi cương thi, đạo sĩ ở trong lợi hại n hất mặc áo bào tím, Lão Tử mặc áo bào tím biến cương thi...",
    totalChapters: 98,
    category: "Đô Thị",
  },
  {
    title:
      "Vừa Thành Áo Bào Tím Cương Vương, Thanh Lãnh Giáo Hoa Đế Cho Ta Đông Phòng",
    slug: "vua-thanh-ao-bao-tim 2",
    author: "Ái Hát Nãi Trà 1",
    cover: img,
    desc: "Thì bên trong hung nhất gọi cương thi, đạo sĩ ở trong lợi hại n hất mặc áo bào tím, Lão Tử mặc áo bào tím biến cương thi...",
    totalChapters: 98,
    category: "Đô Thị",
  },
  {
    title:
      "Vừa Thành Áo Bào Tím Cương Vương, Thanh Lãnh Giáo Hoa Đế Cho Ta Đông Phòng",
    slug: "vua-thanh-ao-bao-tim 3",
    author: "Ái Hát Nãi Trà 1",
    cover: img,
    desc: "Thì bên trong hung nhất gọi cương thi, đạo sĩ ở trong lợi hại n hất mặc áo bào tím, Lão Tử mặc áo bào tím biến cương thi...",
    totalChapters: 98,
    category: "Đô Thị",
  },
];

export default function CategoryPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages] = useState<number>(2);
  return (
    <div className="container py-8 space-y-4">
      <NovelFilter />
      <div className="grid lg:grid-cols-2 gap-4">
        {novels.map((novel) => (
          <NovelCard key={novel.slug} {...novel} />
        ))}
      </div>
      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
}
